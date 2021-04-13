#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const colors = require('colors');
const repoName = require('git-repo-name');
const confirm = require('prompt-confirm');

const baseDir = process.cwd();
const hooksGitPath = path.join(baseDir, '.git', 'hooks');

/**
 * Write the hook
 */
writeFile = () => {
  fs.readFile(path.join(__dirname, '..', 'template/prepare-commit-msg'), 'utf-8', (err, data) => {
    if (err) throw 'Template file not found.';
    
    fs.writeFile(path.join(hooksGitPath, 'prepare-commit-msg'), data, (err) => {
      if (err) throw err;
      console.log(colors.green('Done! Your next commit message will contain the branch name.'));
    });
  });
};

if (fs.existsSync(hooksGitPath)) {
  console.log(
    colors.brightCyan.bold('GIT Project found:'),
    colors.green.bold(repoName.sync())
  );
  const prompt = new confirm(colors.brightCyan('Do you want to apply prepare-commit-msg on this project?'));
  prompt.ask(answer => {
    if (answer) {
      writeFile();
    } else {
      console.log(colors.red('Abort the mission!'));
    }
  });
} else {
  console.log(colors.red("I couldn't find any git project here. Are you on the root path of the project?"));
}
