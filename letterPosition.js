function indexLetter(str) {
  var output = {};
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    if (/\w/.test(letter)) {
      //if (output.hasOwnProperty(letter) === false) {
      if (!output[letter]) {
        output[letter] = [];
      }
      output[letter].push(i);
    }
  }
  return output;
}

console.log(indexLetter('lighthouse in the house'));





// var outputGoal = {
//   l: [0],
//   i: [1, 10],
//   g: [2],
//   h: [3, 5, 13]


// var obj = {
//   first: 1
// };

// obj.second = 2;
// obj['third'] = 3;

// var key = 'fourth';

// obj.key = 4;
// obj[key] = 4;


// {
//   first: 1,
//   second: 2,
//   third: 3,
//   key: 4,
//   fourth: 4
// }



