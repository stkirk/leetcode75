// Given two strings, s and t:
// return true if they are isomorphic, false otherwise
// strings are isomorphic if the characters in s can be replaced to get t
// all occurences of a character must be replaced with another character
// while preserving the order of the characters
// no two characters may map to the same character, but may map to itself
// strings must be same length
// must have same count for mapped letters
// must be in correct order
export function isIsomorphic(s: string, t: string): boolean {
  // return false if strings are not same length
  if (s.length !== t.length) {
    return false;
  }
  // loop over s.length to create 2 hashmaps
  // one where s[i]: t[i]
  // another where t[i]: s[i]
  const sToTMap: { [key: string]: string } = {};
  const TToSMap: { [key: string]: string } = {};

  for (let i = 0; i < s.length; i++) {
    sToTMap[s[i]] = t[i];
    TToSMap[t[i]] = s[i];
  }
  // loop again and check that t[i] === sMap[s[i]] and s[i] === tMap[t[i]]
  for (let i = 0; i < s.length; i++) {
    if (sToTMap[s[i]] !== t[i]) {
      return false;
    }
    if (TToSMap[t[i]] !== s[i]) {
      return false;
    }
  }
  return true;
}
