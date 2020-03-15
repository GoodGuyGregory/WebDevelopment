## Freecode Camp Web Responsive Notes:

Making Images responsive wirth CSS is actually very simple. You just need to add these properties to an Image

```css
img {
  max-width: 100%;
  height: auto;

}
```

The max-width of 100% will make sure the image is never wider than the container it is in, and the height of auto will make the image keep its original aspect ratio.

## Responsive Web Design Principles: Use a Retina Image for Higher Resolution Displays

With the increase of internet connected devices, their sizes and specifications vary, and the displays they use could be different externally and internally. Pixel density is an aspect that could be different on one device from others and this density is known as Pixel Per Inch(PPI) or Dots Per Inch(DPI). The most famous such display is the one known as a "Retina Display" on the latest Apple MacBook Pro notebooks, and recently iMac computers. Due to the difference in pixel density between a "Retina" and "Non-Retina" displays, some images that have not been made with a High-Resolution Display in mind could look "pixelated" when rendered on a High-Resolution display.

The simplest way to make your images properly appear on High-Resolution Displays, such as the MacBook Pros "retina display" is to define their width and height values as only half of what the original file is. Here is an example of an image that is only using half of the original height and width:

## Use ViewPort Dimenstions instead of EMs or Px

The four different viewport units are:

* vw (viewport width): 10vw would be 10% of the viewport's width.
* vh (viewport height): 3vh would be 3% of the viewport's height.
* vmin (viewport minimum): 70vmin would be 70% of the viewport's smaller dimension (height or width).
* vmax (viewport maximum): 100vmax would be 100% of the viewport's bigger dimension (height or width).


