/**
 * https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = (s.toLocaleLowerCase()).split('');
    let clear = "";
    for (let i = 0; i < s.length; i++) {
        if((s[i] >= "a" && s[i] <= "z")||
         (s[i] >= "0" && s[i] <= "9")) {
            clear+=s[i];
        }
    }
    for(let i = 0; i < ((clear.length % 2 == 0) ? clear.length : clear.length-1)/2; i++){
        if(clear[i] == clear[clear.length-1-i]){
            continue;
        }else{
            return false;
        }
    }
    return true;
}
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));