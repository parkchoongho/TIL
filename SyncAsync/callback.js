console.log("코드 시작!");
const user = getUser(1);
const userCallback = getUserCallback(1, user => {
  getRepo(user.githubID, repo => {
    getCommits(repo.commitID, commit => {
      console.log(commit);
    });
  });
});
console.log(user);
console.log("코드 끝!");

const users = [{ id: 1, githubID: "bin" }, { id: 2, githubID: "ho" }];

function getUser(id) {
  // DB에 접속해서 유저를 찾는 함수
  let user;
  setTimeout(() => {
    user = users.find(user => user.id === id);
  }, 2000);
  return user;
}

function getUserCallback(id, callback) {
  setTimeout(() => {
    const user = users.find(user => user.id === id);
    callback(user);
  }, 2000);
}

function getRepo(githubID, callback) {
  const repos = [
    { githubID: "bing", commitID: 1 },
    { githubID: "kim", commitID: 2 }
  ];
  setTimeout(() => {
    const repo = repos.find(repo => repo.githubID === githubID);
    callback(repo);
  }, 2000);
}

function getCommits(commitID, callback) {
  const commits = [
    { commitID: 1, contents: "안녕하세요" },
    { commitID: 2, contents: "잘있어요" }
  ];
  setTimeout(() => {
    const commit = commits.find(commit => commit.commitID === commitID);
    callback(commit);
  }, 2000);
}
