/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    const fillColor = (image, sr, sc, newColor, cols, rows, source) =>  {
        if(sr < 0 || sr >= rows || sc < 0 || sc >= cols) return
          else if( image[sr][sc] != source) return;
        image[sr][sc] = newColor;
        // Top Call
        fillColor(image, sr -1 , sc, newColor, cols, rows, source);
        //Bottom Call
        fillColor(image, sr +1 , sc, newColor, cols, rows, source);
        //Left Call         
        fillColor(image, sr , sc - 1, newColor, cols, rows, source);
        //Right Call         
        fillColor(image, sr , sc + 1, newColor, cols, rows, source);
    }
    if(image[sr][sc] == newColor) return image;
    let source = image[sr][sc];
    let rows = image.length;
    let cols = image[0].length;
    fillColor(image ,sr, sc, newColor, cols, rows, source);
    return image;
};