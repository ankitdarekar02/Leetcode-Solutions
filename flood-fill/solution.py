class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, newColor: int) -> List[List[int]]:
        def fillColor(image, sr, sc, rows, cols, src):
            if sr < 0 or sr >= rows or sc < 0 or sc >= cols:
                return
            elif image[sr][sc] != src:
                return
                
            image[sr][sc] = newColor
            #Top Search
            fillColor(image ,sr + 1, sc, rows, cols, src)
            # Bottom Search
            fillColor(image, sr - 1, sc, rows, cols, src)
            # Right Search
            fillColor(image, sr, sc + 1, rows, cols, src)
            # Left Search
            fillColor(image, sr, sc - 1, rows, cols, src)
        
        if image[sr][sc] == newColor:
            return image
        fillColor(image, sr, sc, len(image), len(image[0]), image[sr][sc])
        return image