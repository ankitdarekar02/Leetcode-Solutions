/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if ( ransomNote.length > magazine.length ) return false;
    const oldMagazineLength = magazine.length;
    ransomNote.split('').forEach(item => {
        magazine = magazine.replace(item, '');
    });
     if(oldMagazineLength == magazine.length + ransomNote.length) {
        return true;
    } else {
        return false;
    }
};