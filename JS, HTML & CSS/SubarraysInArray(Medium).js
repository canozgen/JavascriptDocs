function subArrays(array){
    count=0;
    array.forEach(element => {
        if(Array.isArray(element)){
            count++;
        }
    });
    return count;
}

const a = [];
console.log(subArrays(a));