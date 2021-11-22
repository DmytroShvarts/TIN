function findLongestWord(str) {
  var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
  return longestWord[0];
}
console.log(findLongestWord("The biggest word that i know is supercalifrigilisticexpialidocius which i think was made just for that one movie"));