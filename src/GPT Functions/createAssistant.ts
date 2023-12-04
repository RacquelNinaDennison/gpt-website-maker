import OpenAI from "openai";
import { extractHtmlFromAssistantAsAVariable } from "./extractHtml";

import dotenv from "dotenv";
import sleep from "@/utils/utils";
import { generateGPTPrompt } from "./form";
import { gptPrompt } from "@/types/gptGeneratorTypes";
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.API_KEY });

export const createAssistant = async (input: gptPrompt) => {
	try {
		const myWebpageAssistant =
			await openai.beta.assistants.retrieve(
				"asst_FAafr8Epv5OiUu8DJwvZ5923"
			);

		const thread = await openai.beta.threads.create();
		const userText = generateGPTPrompt(input);
		await openai.beta.threads.messages.create(thread.id, {
			role: "user",
			content: userText,
		});

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
			sleep(3000);
		}

		const messages =
			await openai.beta.threads.messages.list(thread.id);
		const message = messages.data[0].content[0];
		console.log(message);

		const htmlFile =
			extractHtmlFromAssistantAsAVariable(message);
		return htmlFile;
	} catch (error) {
		console.log(error);
	}
};
