import { createAssistant } from "./createAssistant";
import { extractHtmlFromAssistantAndWriteToFile } from "./extractHtml";
import simpleGit, { SimpleGit } from "simple-git";

const repoPath =
	"https://github.com/RacquelNinaDennison/gpt-website-maker.git";
const git: SimpleGit = simpleGit(repoPath);
const commitMessage = "Added the changed index.html file";

const runGit = async () => {
	await git.add("./src/HTML/index.html"); // Stage all changes
	await git.commit(commitMessage);
	console.log("Added to git reposioty");
};
export const run = async () => {
	await createAssistant();
	extractHtmlFromAssistantAndWriteToFile();
};
