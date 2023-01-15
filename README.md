# Radix UI Navigation menu example

## tl;dr

Example in Radix UI `Navigation Menu` documentation does not work with current (and probably next versions of Next).

Repo generated with Create Next App Radix UI template.

- `main` branch represents the version of the code as presented in the official documentation
- `doc-update` branch represents the version of the code as I propose to update in the documentation

To test locally:

- `git clone https://github.com/damiencornu/radix-next-navigationmenu-update.git`
- `cd radix-next-navigationmenu-update`
- `yarn`
- `yarn dev`

## Issue with example in documentation

Example in documentation renders a non valid HTML where a `<a>` wraps another `<a>`:

```html
<nav aria-label="Main" data-orientation="horizontal" dir="ltr">
  <div style="position: relative;">
    <ul data-orientation="horizontal" dir="ltr">
      <li>
        <a href="/">
          <a
            data-active=""
            aria-current="page"
            class="NavigationMenuLink"
            data-radix-collection-item=""
          >
            Home
          </a>
        </a>
      </li>
      <li>
        <a href="/about">
          <a class="NavigationMenuLink" data-radix-collection-item="">
            About
          </a>
        </a>
      </li>
    </ul>
  </div>
</nav>
```

And a non valid HTML results in an hydration error.

The documentation of Radix UI has to be updated to reflect the change by adding a `legacyBehavior` tag as seen in the `doc-update` change.

With Changes the HTML rendered will be valid and there won't be no Hydration error:

```html
<nav aria-label="Main" data-orientation="horizontal" dir="ltr">
  <div style="position: relative;">
    <ul data-orientation="horizontal" dir="ltr">
      <li>
        <a
          data-active=""
          aria-current="page"
          class="NavigationMenuLink"
          href="/"
          data-radix-collection-item=""
        >
          Home
        </a>
      </li>
      <li>
        <a
          class="NavigationMenuLink"
          href="/about"
          data-radix-collection-item=""
        >
          About
        </a>
      </li>
    </ul>
  </div>
</nav>
```
