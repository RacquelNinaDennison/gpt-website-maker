import { createAssistant } from "./createAssistant";
import { extractHtmlFromAssistantAndWriteToFile } from "./extractHtml";

export const run = async () => {
	await createAssistant();
	extractHtmlFromAssistantAndWriteToFile();
};
