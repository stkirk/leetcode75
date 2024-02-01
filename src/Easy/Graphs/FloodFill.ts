// Given an image, image, represented by an m x n integer grid
// where image[i][j] represents the pixel value
// and also a starting pixel sr, sc represents the row and column of the start pixel
// flood fill with given color integer considering the starting pixel plus any pixels connected
// four-directionally also with the same color plus any pixels connected 4-directionally to those pixels

const floodFill = (
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] | undefined => {
  // new color is same as source, nothing needs to be done
  // avoids stack overflow
  if (image[sr][sc] === color) {
    return image;
  }
  // recursion helper function with same args
  const recurse = (
    row: number,
    col: number,
    oldColor: number,
    newColor: number
  ): void => {
    // base case if the pixel isn't same color as start pixel and pixel isnt bounds, return
    if (
      row < 0 ||
      col < 0 ||
      row >= image.length ||
      col >= image[0].length ||
      image[row][col] !== oldColor
    ) {
      return;
    }
    // pixel is same color, fill it with new color
    image[row][col] = newColor;
    console.log({ row, col });
    // call recurse on adjacent pixels
    recurse(row - 1, col, oldColor, newColor);
    recurse(row + 1, col, oldColor, newColor);
    recurse(row, col - 1, oldColor, newColor);
    recurse(row, col + 1, oldColor, newColor);
  };
  recurse(sr, sc, image[sr][sc], color);
  return image;
};

// test cases
console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
); // [[2,2,2],[2,2,0],[2,0,1]]
console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 0, 0],
    ],
    0,
    0,
    0
  )
); // [[0,0,0],[0,0,0]]
