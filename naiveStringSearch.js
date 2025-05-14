//Loop over longer string
//Check if the substring matches
//if characters dont match, break out inner loop
//if characters match keep going 
//if we complete the inner loop and find a match, increment the count of matches
//return count 
function naiveStringSearch(long, short) {
    let count = 0;
    for (let i=0; i<long.length; i++){
        for (let j=0; j<short.length; j++){
            if(long[i+j] !== short[j]){
                break;
            }
            if(j === short.length -1){
                cont++;
            }
        }
    }
    return count;
}

naiveStringSearch("lorie loled", "lol") // 2