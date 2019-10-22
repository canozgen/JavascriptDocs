function countLayers(array){

    if(array.length() <= 0){
        return -1;
    } 
    const uniqueLayers = [...new Set(array)];
    return uniqueLayers.length;
}
console.log(countLayers([
    "AAAAAAAAAAA",
    "AABBBBBBBAA",
    "AABCCCCCBAA",
    "AABCAAACBAA",
    "AABCADACBAA",
    "AABCAAACBAA",
    "AABCCCCCBAA",
    "AABBBBBBBAA",
    "AAAAAAAAAAA"
  ]));