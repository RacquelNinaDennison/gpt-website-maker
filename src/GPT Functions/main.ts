import { createAssistant } from "./createAssistant";
import { extractHtmlFromAssistantAndWriteToFile } from "./extractHtml";
import simpleGit, { SimpleGit } from "simple-git";
// this needs to be changed
const repoPath =
	"/Users/racqueldennison/Documents/elucidate/GPT Stuff/automated_stuff/website_maker";
const git: SimpleGit = simpleGit(repoPath);
const branchName = "websiteTest";
const filePath = "src/HTML/index.html";
const commitMessage = "Added the changed index.html file";

const runGit = async () => {
	const isBranchExists = (await git.branch()).all.includes(
		branchName
	);

	if (!isBranchExists) {
		await git.checkoutLocalBranch(branchName);
	} else {
		await git.checkout(branchName);
	}

	await git.add(filePath);
	console.log("added git files");
	await git.commit(commitMessage);
	console.log("committed");
	await git.push("origin", branchName);
	await git.checkout("main");

	console.log("Added to git repository");
};

export const run = async () => {
	await createAssistant();
	extractHtmlFromAssistantAndWriteToFile();
	await runGit();
};
