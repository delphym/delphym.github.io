# HTML & CSS Blog
To make easier to test the *blog* post locally it's recommended to run a web server locally...
### Starting your own local web server
By default we have [Apache Web Server](https://httpd.apache.org/) available on *macOS* and it can be used to serve content from the `~/Sites` folder, making it convenient for local development and testing. But it could be harder to configure.<br/><br/>
Thus we will use [Vite](https://vitejs.dev/) the *Next Generation Frontend Tooling*
which is easy to setup and more convenient to use for development and testing.
1. run `npx vite`
2. in the browser enter: https://localhost:5173/

## CSS
CSS (Cascading Style Sheets) is a language used to style and format the layout of web pages. It controls the visual presentation, including fonts, colors, spacing, and positioning, allowing for a more user-friendly and appealing design.
There are projects where their goals are to enhance CSS. Tools, for instance [Sass](https://sass-lang.com/) (Syntactically Awesome Style Sheets), [LESS](https://lesscss.org/), [Stylus](https://stylus-lang.com/) extends CSS with features like variables, nesting, and mixins, making it easier to write and manage complex stylesheets efficiently. Or [Tailwind](https://tailwindcss.com/).

Decorations can be defined on the element, class and id level or globally at the root level.
### [CSS Specificity](https://www.w3schools.com/css/css_specificity.asp)
Every CSS selector has its place in the specificity hierarchy.

There are 4 categories which defines the level of importance:
 1. **Inline styles** – e.g. `<p style="color: pink;">some text</p>`
 2. **IDs** - e.g. `#navbar`
 3. **Classes, pseudo-classes, attribute selectors** - e.g. `.test, :hover, [href]`
 4. **Elements and pseudo-elements** - e.g. `h1, ::before`


- `box-shadow` is pretty cool and casts and drops shadows of an element. More info @ [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
- pseudo-classes, e.g.:<br> `a {color: #000;}`<br>
`a:hover {color: red;}`
- positioning elements:
  - relative
  - absolute
  - fixed: won't move it when a user scrolls
  - float property - as well remove the element from normal document flow and pushes to either `left` or `right` of their containing parent element
  - `z-index` property - sets the order of the elements how are they stack on top of one another
  - `margin: auto;` center an element horizontally.
  For images (they are by default *inline*), but can be changed to block elements by setting `display: block;`
- `section` element & `aside` (sidebar) elements
- **colors**
  - complementary
  - tertiary
  - color wheel e.g.:
    - [canva's](https://www.canva.com/colors/color-wheel/)
    - [adobe's](https://color.adobe.com/create/color-wheel)
    - **hue** a value of a color from a wheel (an angel value, where **red is 0º**, **green is 120º**, **blue is 240º**) + *saturation* and *lightness* in %. `hsl(xº, 100%, 50%)` gives a normal color.
  - color transition AKA gradients `background: linear-gradient(gradient_directionº, color 1, color 2, color 3, ...);`. angle directions is clockwise and starts on a vertical axe from the bottom to the top.<br>
- `transform:` with many properties like `scale(1.1)`, `skewX()`, etc.  Great for use with `:hover` pseudo-class
- pseudo-elements: `::before` and `::after`
- **animation**: with 8 `animation-*` properties and `@keyframes` rule.
  - `animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);` is equivalent to `linear`keyword.
### Responsive design
#### **viewport**:
is the area of the window in which a content can be seen. It's a kind of virtual window which is usually wider than a device screen.
  - E.G. `<meta name="viewport" content="width=device-width, initial-scale=1" />`
  - It's kinds hack if `@media` queries were not used
  - `vw`, `vh` (viewport width and height) in percentage, e.g. `10vw;`
  - `vmin`, `vmax` (viewport smaller/bigger dimension (width or height) in percentage.
- `@media` queries that change the presentation of content, based on different viewport sizes, e.g. `max-width: 100px)` -> `@media (min-height: 350px) { /* CSS Rules */ }`
  - media query selectors can be chained using `and` or `,` to represent *AND* and *OR*, e.g. `@media (orientation: portrait) and (max-height: 500px)`
- responsive img: The `max-width` of `100%` will make sure the image is never wider than the container it is in, and the `height` of `auto` will make the image keep its original aspect ratio.
#### Flexbox: The easy way to format HML
-  simply aligns items vertically and horizontally with **`justify-content`** along the main axes: `flex-start` and `flex-end`,  and `space-between`, `space-around`, etc.
-  **`align-items`** - align items vertically and horizontally along the cross axis. How to push all items within a container (left-to-right, up-to-down): `flex-start` and `center`, `stretch` (default), `baseline`
-  `align-self` - toadjust each item individually and overrides `align-items` and takes same values
-  **`flex: 1 0 10px`** – shorthand property for (`flex-grow:1;`, `flex-shrink:0;1` and `flex-basis:10px;`)
- more info about [flex-box](https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/)
#### CSS Grid
turns any HTML element into a grid container by setting its `display` property to `grid`
- `grid-template-row: 50px 50px 50px;` - creates 3 rows 50px each high
  - as width/height units we can use `auto` `%` of its container and `fr` - fractions of the remaining space
- `grid-gap` - shorthand for `grid-row-gap` and `grid-column-gap`
- **`grid-column: 3/4;`** - an item to occupy multiple columns
- `justify-self`, `align-self` - to align horizontally and vertically just a cell
- `justify-items`, `align-items` - to align horizontally or vertically just a cell all at once
- **`grid-template-areas:`**<br/>
  ```css
  "header header header"
  "advert content content"
  "footer footer footer";
  ```
  - groups cells together
  - is accompanied by `group-area: footer;` defined in another item(class/id/...)
- **`grid-area: 1/1/2/4;`** can bu used as a standalone for an item if an area template doesn't exist
  - it means: *horizontal line to start at / vertical line to start at / horizontal line to end at / vertical line to end at*
- **Functions** useful with *Grid templates*:
  - `repeat(Xtimes, 50px)`: *repeat* function which can be used to build grid of multiple rows, etc., e.g:
    - `grid-template-rows: repeat(100, 50px);`
  - `minmax(50px, 200px)`: *limit item size* to the acceptable size range, e.g.:
    - `grid-template-column: 100px minmax(50px, 200px);` will create two columns, 1st with exact size, and 2nd with the range specified
  - *repeat* with ***auto-fill*** to create flexible layouts in the size of the container, e.g.:
    - `repeat(auto-fill, minmax(60px, 1fr));`
  - *repeat* with ***auto-fit*** similar to *auto-fill*, but in contrast it collapses empty rows/columns and stretch items to fit the size of the container, e.g.:
    - `grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));`
  - **`@media` query** with **grid** approach
    - <details>
        <summary>will create even more responsive design:</summary>

        ```css
        @media (min-width: 300px){
        .container{
          grid-template-columns: auto 1fr;
          grid-template-rows: auto 1fr auto;
          grid-template-areas:
            "advert header"
            "advert content"
            "advert footer";
          }
        }
        @media (min-width: 400px){
          .container{
            grid-template-areas:
              "header header"
              "advert content"
              "footer footer";
          }
        }
        ```
      </details>
  - **Grid within a grid** – turning an element into a grid, only affects the behaviour of its direct descendant. So by turning a direct descendant into a grid, you'll make a grid within a grid. To do that the nested element should have:
    - `display: grid;`
    - `grid-template-areas:`

## Browser's DevTools
This is like a Swiss army knife, useful for debugging, troubleshooting and rapid development of web pages design and functionality.
  - mobile devices view
  - **element inspector**
    - *:hov* toggle element state
    - *.cls* enable turn on|off and add classes on selected  element
    - add your workspace (link the Sources files to physical files on the disk)
    - hiding/removing/adding elements into DOM
  - **console**
    - clearing the console
    - using of `$_`, `$0`, `$1`, `$2`, `$3`, ...
    - `Esc` opens the console in **Elements** tab
    - <details>
      <summary> commands we can run from JS or console itself:</summary>

      ```JavaScript
      console.log('Hello')
      console.log(myvar)
      console.error('An error')
      console.warn('A warning')
      console.dir(document)
      console.dir(document.URL)

      console.table([{ name: 'John', email: 'test@test.com', age: 33 }])

      console.clear()

      console.group('Say Hello')
      console.log('Hello Brad')
      console.log('Hello John')
      console.log('Hello Sally')
      console.groupEnd('Say Hello')

      console.time('Run Loop')
      for (var i = 0; i < 2000; i++) {
        console.log(i)
      }
      console.timeEnd('Run Loop')

      function greaterThan(a, b) {
        console.assert(a > b, { message: 'a is not greater than b', a: a, b: b })
      }

      greaterThan(5, 6)
      ```
    </details>
  - **Network** tab
    - see the flow of the requests and responses
  - **Applications** Tab
    - managing *Local*, *Session*, *Cache* storages, *Cookies*, etc...
    - <details>
      <summary>corresponding JS/console commands:</summary>

      ```javascript
      // Set localstorage - will stay until delete/clear
      localStorage.setItem('name', 'John')
      console.log(localStorage.getItem('name'))
      localStorage.clear('name')

      // Set sessionstorage - will stay until browser close
      sessionStorage.setItem('user', 'Will')

      // Set cookie
      document.cookie = 'username=John Doe'
      ```
      </details>
  - **Lighthouse** (formerly *Audits*) for thorough performance, security, accessibility, best practices and other issues