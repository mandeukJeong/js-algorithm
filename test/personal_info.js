function solution(today, terms, privacies) {
  const answer = [];
  const todayDate = new Date(today);

  const termMap = {};
  terms.forEach((term) => {
    const [type, period] = term.split(' ');
    termMap[type] = parseInt(period);
  });

  for ([index, privacy] of privacies.entries()) {
    const [date, type] = privacy.split(' ');
    const expireDate = new Date(date);
    expireDate.setMonth(expireDate.getMonth() + termMap[type]);

    if (expireDate <= todayDate) {
      answer.push(index + 1);
    }
  }

  return answer;
}
