function isPalindrome(x){
    x = x.toString().split('');
    var len = x.length;

    for(var i=0; i<len/2;i++){
        if(x[i] !== x[len-1-i]){
            return false;
        }
    }

    return true;
}
