export function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s;
  let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  let m = l - c / 2;
  let red = 0;
  let green = 0;
  let blue = 0;

  if (0 <= h && h < 60) {
    red = c;
    green = x;
    blue = 0;
  } else if (60 <= h && h < 120) {
    red = x;
    green = c;
    blue = 0;
  } else if (120 <= h && h < 180) {
    red = 0;
    green = c;
    blue = x;
  }
}
