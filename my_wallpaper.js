// --- your parameter variables go here ---
let duck_body_width  = 60;
let duck_body_height = 40;
let duck_head_size   = 30;
let duck_beak_width  = 20;
let duck_beak_height = 10;
let bubble_size_head = [18, 22, 15]; // 3 bubbles on head
let bubble_size_feet = [18, 14, 10]; // bubbles near foot

let spacingX = 130;
let spacingY = 130;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); // set false when ready to print
}

function wallpaper_background() {
  background(200, 230, 255); // light blue background
}

// draw the duck symbol
function my_symbol() {
  // position at origin (0,0)
  drawDuckWithBubblesOnHead(0, 0, false);
}

// --- Duck drawing function ---
function drawDuckWithBubblesOnHead(x, y, cool = false) {
  // Body
  fill(255, 230, 0);
  ellipse(x, y + 30, duck_body_width, duck_body_height);
  ellipse(x, y, duck_head_size, duck_head_size);

  // Beak
  fill(255, 150, 0);
  ellipse(x, y + 5, duck_beak_width, duck_beak_height);

  // Eyes or sunglasses
  if (cool) {
    fill(255, 105, 180); // pink lenses
    rect(x - 12, y - 8, 9, 8, 2);
    rect(x + 3, y - 8, 9, 8, 2);
    fill(0); // black bridge
    rect(x - 2, y - 6.5, 4, 3);
  } else {
    fill(0);
    ellipse(x - 6, y - 5, 5, 5);
    ellipse(x + 6, y - 5, 5, 5);
  }

  // Wing
  fill(255, 210, 0);
  ellipse(x + 15, y + 30, 20, 15);

  // Feet
  fill(255, 150, 0);
  ellipse(x - 10, y + 50, 10, 5);
  ellipse(x + 10, y + 50, 10, 5);

  // Bubbles on head
  fill(255, 255, 255, 180);
  ellipse(x - 12, y - 12, bubble_size_head[0]);
  ellipse(x, y - 20, bubble_size_head[1]);
  ellipse(x + 14, y - 12, bubble_size_head[2]);

  // Bubbles near left foot
  ellipse(x - 25, y + 45, bubble_size_feet[0]);
  ellipse(x - 35, y + 55, bubble_size_feet[1]);
  ellipse(x - 20, y + 60, bubble_size_feet[2]);
}
