function correctTitle(string){
    beginIndex=0;
    var corrected = "";
    while(beginIndex<string.length){
        word=string.slice(beginIndex);
        if(word.search(' ')!=-1){
            var endIndex = word.search(' ');
        }
        else{
            var endIndex =string.length;
        }
    
    var check = word.slice(0,endIndex);
    check = check.charAt(0).toUpperCase() + check.slice(1).toLowerCase() ;
    switch(check){
        case 'of':
        case 'oF':
        case 'Of':
        case 'OF':
            check = "of";
            break;
        case 'in' :
        case 'iN' :
        case 'In' : 
        case 'IN' :   
            check = "in";
            break;
        case 'and':
        case 'anD':
        case 'aNd':
        case 'aND':
        case 'And':
        case 'AnD':
        case 'ANd':
        case 'AND':
            check = "and";
            break;
        case 'the':
        case 'thE':
        case 'tHe':
        case 'tHE':
        case 'The':
        case 'ThE':
        case 'THe':
        case 'THE':
            check = "the";
            break;
    }
    corrected += check + " ";
    beginIndex=endIndex+beginIndex+1;
    }
    return corrected;
}

console.log(correctTitle("jOn SnoW, kINg IN thE noRth."));