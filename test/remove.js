function solution(my_string, letter) {
  var answer = '';
  var temp = [];

  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] !== letter) {
      temp.push(my_string[i]);
    }
  }

  answer = temp.join('');

  return answer;
}
