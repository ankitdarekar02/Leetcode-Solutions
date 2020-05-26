/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    const xDiff = coordinates[1][0] - coordinates[0][0];
    const yDiff = coordinates[1][1] - coordinates[0][1];;
    for(i=2;i < coordinates.length;i++) {
        current_x_diff = coordinates[i][0] - coordinates[i-1][0];
        current_y_diff = coordinates[i][1] - coordinates[i-1][1];
        if(current_x_diff * yDiff != current_y_diff * xDiff) {
            return false
        }
        return true
    }
};