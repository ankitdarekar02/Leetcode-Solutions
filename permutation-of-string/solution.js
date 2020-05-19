/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const s1_length = s1.length;
    const s2_length = s2.length
    const s1_counter = {}
    let window_counter ={}
    
    if(s1_length > s2_length) return false
    
    for (let c in s1){
        if(!s1_counter[s1[c]] || s1_counter[s1[c]] == null) {
            s1_counter[s1[c]] = 1;
        } else {
            s1_counter[s1[c]] += 1;
        }
    }
   
    for (let c in s2){
        if(!window_counter[s2[c]] || window_counter[s2[c]] == null) {
            window_counter[s2[c]] = 1;
        } else {
            window_counter[s2[c]] += 1;
        }
        if(c >= s1_length){
            let element_from_left = s2[c - s1_length];
            if(window_counter[element_from_left] == 1) {
                delete window_counter[element_from_left]
            } else {
                window_counter[element_from_left] -=1
            }
        }
        if (isEqual(s1_counter, window_counter)) return true
    }
    
    return false;
    
};

function isEqual(map1, map2) {
    for (key in map1) {
        if (map1[key] !== map2[key]) return false;
    }
    return true;
}