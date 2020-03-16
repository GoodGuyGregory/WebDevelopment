## CSS Grid Notes


Setting your CSS to Feature Grid

In order to code CSS Grid properties the display properties must be set to grid

```css
.container {
   display: grid;
}
```

**Setting Columns and Rows**

in order to display certain numbers of row and columns you must specify rows/columns by associating a numerical dimension to the grid-template-columns/rows selector. when a numerical value is added the number or rows or columns increases to accomodate that number

```css
.continer {
 display: grid;
 grid-template-columns: size1 size2;
 grid-template-rows: sizerow1 sizerow2;

}
```

add size dimensions to see resulting rows/columns

**Adding Gaps**

To add a gap between the columns, use the grid-column-gap property like this: this has to clearly be inside of a grid container element

```css
grid-column-gap: 10px;
```

This creates 10px of empty space between all of our columns.

this same selector can be used for rows as well, just change the name of the css property to see the results `grid-row-gap: 10px;

**Grid Gap**

grid-gap is a shorthand property for grid-row-gap and grid-column-gap from the previous two challenges that's more convenient to use. If grid-gap has one value, it will create a gap between all rows and columns. However, if there are two values, it will use the first one to set the gap between the rows and the second value for the columns.

**Grid Item Properties**

**grid-column**

To control the amount of columns an item will consume, you can use the grid-column property in conjunction with the line numbers you want the item to start and stop at.

Here's an example:

`grid-column: 1 / 3;`

This will make the item start at the first vertical line of the grid on the left and span to the 3rd line of the grid, consuming two columns.

The same action can be utilized for styling row lines in the grid with the `grid-row: 2 / 4;`

**Justify-self**

In CSS Grid, the content of each item is located in a box which is referred to as a cell. You can align the content's position within its cell horizontally using the `justify-self` property on a grid item. By default, this property has a value of `stretch`, which will make the content fill the whole width of the cell. This CSS Grid property accepts other values as well:

`start:` aligns the content at the left of the cell,

`center:` aligns the content in the center of the cell,

`end:` aligns the content at the right of the cell.

**Align-self**

Just as you can align an item horizontally, there's a way to align an item vertically as well. To do this, you use the `align-self` property on an item. This property accepts all of the same values as `justify-self` from the previous section.

**Sharing the same alignment for all cell items**

Sometimes you want all the items in your CSS Grid to share the same alignment. You can use the previously learned properties and align them individually, or you can align them all at once horizontally by using `justify-items` on your grid container. This property can accept all the same values you learned about in the previous two challenges, the difference being that it will move all the items in our grid to the desired alignment.

Using the `align-items` property on a grid container will set the vertical alignment for all the items in our grid.

**Divide the Grid Into an Area Template**

You can group cells of your grid together into an area and give the area a custom name. Do this by using grid-template-areas on the container like this:

```css
grid-template-areas:
  "header header header"
  "advert content content"
  "footer footer footer";
```

The code above merges the top three cells together into an area named `header`, the bottom three cells into a `footer` area, and it makes two areas in the middle row; `advert` and `content`. Note: Every word in the code represents a cell and every pair of quotation marks represent a row. In addition to custom labels, you can use a period (`.`) to designate an empty cell in the grid

**Placing items into grid-areas**

you can place an item in your custom area by referencing the name you gave it. To do this, you use the grid-area property on an item like this:

```css
.item1 {
  grid-area: header;
}
```
This lets the grid know that you want the item1 class to go in the area named `header`. In this case, the item will use the entire top row because that whole row is named as the header area.

**Creating grid-area without creating an Areas template**

The `grid-area` usage is simple. If your grid doesn't have an areas template to reference, you can create an area on the fly for an item to be placed like this:

`item1 { grid-area: 1/1/2/4; }`

This is using the line numbers you learned about earlier to define where the area for this item will be. The numbers in the example above represent these values:

`grid-area: horizontal line to start at / vertical line to start at / horizontal line to end at / vertical line to end at;`

