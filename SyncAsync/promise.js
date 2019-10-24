const promise = new Promise((resolve, reject) => {
  resolve("성공했어요");
  // 성공시 resolve 함수
  reject("실패했어요");
  // 실패시 reject 함수
});

// promise.then(result => console.log(result)).catch(err => console.log(err));

// const getAccount = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const number = Math.floor(Math.random() * 100);
//     if (number % 2 === 1) resolve({ id: 1, balance: 1000 });
//     else reject(new Error("계좌에 접근할 수 없습니다."));
//   }, 2000);
// });

// getAccount.then(result => console.log(result)).catch(err => console.log(err));

function getUser(id) {
  console.log("Finding User....");
  const users = [{ id: 1, githubID: "park" }, { id: 2, githubID: "kim" }];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(user => user.id === id);
      if (user) resolve(user);
      else reject(new Error("유저를 찾을 수 없습니다."));
    }, 2000);
  });
}

function getRepo(githubID) {
  console.log("Finding Github Repo...");
  const repos = [
    { githubID: "park", commitID: 1 },
    { githubID: "kim", commitID: 2 }
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const repo = repos.find(repo => repo.githubID === githubID);
      if (repo) resolve(repo);
      else reject(new Error("리포지토리를 찾을 수 없습니다."));
    }, 2000);
  });
}

function getCommit(commitID) {
  console.log("Finding Commit ID...");
  const commits = [
    { commitID: 1, contents: "첫번째 커밋" },
    { commitID: 2, contents: "두번째 커밋" }
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const commit = commits.find(commit => commit.commitID === commitID);
      if (commit) resolve(commit);
      else reject(new Error("Commit를 찾을 수 없습니다."));
    }, 2000);
  });
}

getUser(2)
  .then(user => getRepo(user.githubID))
  .then(repo => getCommit(repo.commitID))
  .then(commit => console.log(commit))
  .catch(err => console.error(err));

// console.log(getUser(1));
