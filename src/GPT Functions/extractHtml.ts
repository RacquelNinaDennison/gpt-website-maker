import { writeFileSync } from "fs";
import { join } from "path";
import assistantResponse from "./assistantResponse.json";

export const extractHtmlFromAssistantAndWriteToFile =
	async () => {
		const responseText = assistantResponse[0].text.value;
		const htmlRegex = /```html([\s\S]*?)```/;
		const htmlMatch = responseText.match(htmlRegex);

		if (htmlMatch && htmlMatch[1]) {
			const htmlContent = htmlMatch[1].trim();
			console.log(htmlContent);
			// const filePath = join(
			// 	__dirname,
			// 	"src",
			// 	"HTML",
			// 	"index.html"
			// );
			const filePath = join(
				__dirname,
				"../../../../src/HTML/index.html"
			);
			console.log(filePath);
			writeFileSync(filePath, htmlContent);
			console.log(`HTML content written to ${filePath}`);
		} else {
			console.log(
				"No HTML content found. The GPT Sucks :("
			);
		}
	};
