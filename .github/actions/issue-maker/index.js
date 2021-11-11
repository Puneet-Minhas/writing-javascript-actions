const core = require("@actions/core");
const github = require("@actions/github");


async function run() {
    try {
      const issueTitle = core.getInput("issue-title");
      const jokeBody = core.getInput("joke");
      const token = core.getInput("repo-token");
  
      const octokit = github.getOctokit(token);
      const repoName = github.context.repo.repo

      const newIssue = await octokit.rest.issues.create({
          repo: github.context.repo.repo,
          owner: github.context.repo.owner,
          title: issueTitle,
          body: jokeBody
      });
      console.log(`Issue created successfully in your repo, ${repoName} `);
      
    } catch (err) {
        core.setFailed(err.message);
    }
  }
  
  run()
  