/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longest_substring_size = 0;
  let substring = new Set();
  let start_index = 0;
  let end_index = 0;
  if (s.length == 0) {
    longest_substring_size = 0;
  } else {
    for (let i = 0; i < s.length; i++) {
      if (substring.has(s[i]) == false) {
        substring.add(s[i]);
        end_index++;
      } else {
        substring.delete(s[start_index]);
        start_index++;
        substring.add(s[i]);
      }
      if (substring.size > longest_substring_size) {
        longest_substring_size = substring.size;
      }
    }
  }
  return longest_substring_size;
};
