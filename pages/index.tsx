import { useRouter } from "next/router";
import NextLink from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

const Link = ({ href, ...props }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href} passHref legacyBehavior>
      <NavigationMenu.Link
        className="NavigationMenuLink"
        active={isActive}
        {...props}
      />
    </NextLink>
  );
};

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col space-y-4 items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1 className="text-6xl text-white font-semibold">
        Radix UI + Tailwind CSS
      </h1>

      <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <Link href="/">Home</Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link href="/about">About</Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  );
}
