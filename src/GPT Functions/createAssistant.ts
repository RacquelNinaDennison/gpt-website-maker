import OpenAI from "openai";
import { extractHtmlFromAssistantAsAVariable } from "./extractHtml";
import userDescriptionText from "./form";
import dotenv from "dotenv";
import sleep from "@/utils/utils";
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.API_KEY });

export const createAssistant = async () => {
	try {
		const myWebpageAssistant =
			await openai.beta.assistants.retrieve(
				"asst_FAafr8Epv5OiUu8DJwvZ5923"
			);

		const thread = await openai.beta.threads.create();
		console.log(userDescriptionText);

		await openai.beta.threads.messages.create(thread.id, {
			role: "user",
			content: userDescriptionText,
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
