export function isPalindrome(s) {
    for(let i = 0, j = s.length - 1, len = s.length; i < len; i++, j--){
        if(s[i] != s[j]){
            return false
        }
    }

    return true;
}
