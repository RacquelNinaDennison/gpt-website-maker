import OpenAI from "openai";
import { writeFileSync } from "fs";
import { join } from "path";
import userDescriptionText from "./form";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.API_KEY });

export const createAssistant = async () => {
	// Retrieve assistant
	const myWebpageAssistant =
		await openai.beta.assistants.retrieve(
			"asst_FAafr8Epv5OiUu8DJwvZ5923"
		);

	const thread = await openai.beta.threads.create();
	console.log(userDescriptionText);
	// adding the users messages to the thread
	await openai.beta.threads.messages.create(thread.id, {
		role: "user",
		content: userDescriptionText,
	});
	// creating a thread to start an interaction
	const run = await openai.beta.threads.runs.create(
		thread.id,
		{
			assistant_id: myWebpageAssistant.id,
		}
	);

	while (true) {
		const runMessages =
			await openai.beta.threads.runs.retrieve(
				thread.id,
				run.id
			);
		if (runMessages.status == "completed") {
			console.log("Completed");
			break;
		}
		console.log("Waiting for the assistant");
	}

	const messages = await openai.beta.threads.messages.list(
		thread.id
	);

	writeFileSync(
		join(__dirname, "../assistantResponse.json"),
		JSON.stringify(messages.data[0].content, null, 2)
	);
};
