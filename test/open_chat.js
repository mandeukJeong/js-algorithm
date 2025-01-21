function solution(record) {
  const answer = [];
  const hashtable = {};

  for (const rec of record) {
    const [cmd, uid, name] = rec.split(' ');

    if (cmd === 'Enter') {
      hashtable[uid] = name;
      answer.push(`${uid} enter`);
    } else if (cmd === 'Leave') {
      answer.push(`${uid} leave`);
    } else {
      hashtable[uid] = name;
    }
  }

  for (let i = 0; i < answer.length; i++) {
    const [uid, cmd] = answer[i].split(' ');

    answer[i] = `${hashtable[uid]}님이 ${
      cmd === 'enter' ? '들어왔습니다.' : '나갔습니다.'
    }`;
  }

  return answer;
}
