# git-precommit-branch-name
Put automatically your branch name in your git commit message.

If you want to put the branch name to each commit message, this tool is exactly what you need. Why do you need this? In general, when we work with git, we name the branch the same as the ticket id from the task / ticket manager (Jira, Trello, etc.)

If we don't put the name of the branch inside each commit message, when we do the merge all commits will be merged too and after a while, we will not know what was the reason for each change, despite we have the commit message. If we have also the name of the ticket (as the branch name), we will deep

## Installation
```
npm i -g git-precommit-branch-name
```

## Usage
Go to the git project folder
```
$ cd ~/Work/my-proj
```
Run git-precommit-branch-name
```
$ git-precommit-branch-name
```

That's all!
