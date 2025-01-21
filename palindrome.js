let x = 1221;

function isPalindrome(x) {
  let number = x;
  let rev = 0;
  let digit;
  if (x == 0) {
    return true;
  } else if (x < 0) {
    return false;
  } else {
    while (number > rev) {
      digit = number % 10;
      rev = rev * 10 + digit;
      number = Math.floor(number / 10);
    }
  }
  if (number == rev || number == Math.floor(rev / 10)) {
    return true;
  } else {
    return false;
  }
}

let result = isPalindrome(x);
console.log(result);
