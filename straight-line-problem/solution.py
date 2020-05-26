class Solution(object):
    def checkStraightLine(self, coordinates):
        """
        :type coordinates: List[List[int]]
        :rtype: bool
        """
        xDiff = coordinates[1][0] - coordinates[0][0];
        yDiff = coordinates[1][1] - coordinates[0][1];
        for i,x in enumerate(coordinates[2:]):
            curr_x_diff = coordinates[i][0] - coordinates[i-1][0];
            curr_y_diff = coordinates[i][1] - coordinates[i-1][1];
            if curr_x_diff*yDiff != curr_y_diff*xDiff:
                return False
        return True