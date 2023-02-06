/** product: calculate the product of an array of numbers. */

function product(nums) {
  let res = 1;
  for (let i = 0; i < nums.length; i++) {
    res *= nums[i];
  }
  return res;
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  let maxLength = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  let result = "";
  for (let i = 0; i < str.length; i += 2) {
    result += str[i];
  }
  return result;
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let result = [];
  function gather(obj) {
    for (let key in obj) {
      if (typeof obj[key] === "string") {
        result.push(obj[key]);
      } else if (typeof obj[key] === "object") {
        gather(obj[key]);
      }
    }
  }
  gather(obj);
  return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === val) {
      return middle;
    } else if (arr[middle] < val) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
