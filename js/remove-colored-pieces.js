/**
 * 02 October 2023 Daily Question 
 * https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/?envType=daily-question&envId=2023-10-02
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
    let aCount = 0;
    for (let cur = 0; cur < colors.length; cur++) {
        if(cur>=2){
            if(colors[cur-2] == colors[cur-1] && colors[cur-1] == colors[cur]){
                if(colors[cur] == "A") aCount++;
                else aCount--;
            }
        }
    }
    return aCount > 0;
};

console.log(winnerOfGame("AAABBABBBAAAB"));