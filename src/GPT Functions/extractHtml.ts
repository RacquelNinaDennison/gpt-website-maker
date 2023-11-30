export const extractHtmlFromAssistantAsAVariable = (
	responseText: any
): string => {
	const responseTextValue = responseText.text.value;
	const htmlRegex = /```html([\s\S]*?)```/;
	const htmlMatch = responseTextValue.match(htmlRegex);

	if (htmlMatch && htmlMatch[1]) {
		const htmlContent = htmlMatch[1].trim();
		return htmlContent;
	} else {
		console.log("No HTML content found. The GPT Sucks :(");
		return "";
	}
};
