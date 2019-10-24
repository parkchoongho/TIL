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

async function getInfo() {
  const user = await getUser(1);
  const repo = await getRepo(user.githubID);
  const commit = await getCommit(repo.commitID);
  console.log(commit);
}

// getInfo();
// IIFE: 함수를 만든 다음에 즉시 실행하는 것을 의미합니다.
(async function() {
  try {
    const user = await getUser(1);
    const repo = await getRepo(user.githubID);
    const commit = await getCommit(repo.commitID);
    console.log(commit);
  } catch (error) {
    console.error(error);
  } finally {
    // 무조건 실행되어야 하는 코드를 이 안에 넣는다.
    unconnectDB();
  }
})();
