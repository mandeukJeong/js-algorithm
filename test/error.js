function solution(user_id, banned_id) {
  const possibleSets = new Set();

  function isMatch(user, ban) {
    if (user.length !== ban.length) return false;
    for (let i = 0; i < user.length; i++) {
      if (ban[i] !== '*' && user[i] !== ban[i]) return false;
    }
    return true;
  }

  function findCombinations(currentIndex, selectedUsers) {
    if (currentIndex === banned_id.length) {
      const sortedSelected = [...selectedUsers].sort().join(',');
      possibleSets.add(sortedSelected);
      return;
    }

    user_id.forEach((user) => {
      if (
        !selectedUsers.includes(user) &&
        isMatch(user, banned_id[currentIndex])
      ) {
        selectedUsers.push(user);
        findCombinations(currentIndex + 1, selectedUsers);
        selectedUsers.pop();
      }
    });
  }

  findCombinations(0, []);

  return possibleSets.size;
}
