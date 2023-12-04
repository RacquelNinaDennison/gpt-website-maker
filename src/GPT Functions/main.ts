import {
	BlobServiceClient,
	StorageSharedKeyCredential,
} from "@azure/storage-blob";
import { createAssistant } from "./createAssistant";
import { gptPrompt } from "@/types/gptGeneratorTypes";

const runGit = async (
	username: string,
	contentHtml: string | undefined
): Promise<string> => {
	try {
		if (contentHtml) {
			const account = process.env.ACCOUNT_NAME as string;
			const accountKey = process.env.ACCOUNT_KEY as string;
			const containerName = "$web";

			const sharedKeyCredential =
				new StorageSharedKeyCredential(account, accountKey);
			const blobServiceClient = new BlobServiceClient(
				`https://${account}.blob.core.windows.net`,
				sharedKeyCredential
			);
			const containerClient =
				blobServiceClient.getContainerClient(containerName);

			const content = contentHtml;
			const blobName = `${username}+${new Date().getTime()}/${new Date().getTime()}+index.html`;
			const blockBlobClient =
				containerClient.getBlockBlobClient(blobName);
			const blobOptions = {
				blobHTTPHeaders: { blobContentType: "text/html" },
			};
			const uploadBlobResponse =
				await blockBlobClient.upload(
					content,
					content.length,
					blobOptions
				);

			console.log(
				`Upload block blob ${blobName} successfully. Client request id ${uploadBlobResponse.clientRequestId}`,
				uploadBlobResponse.requestId
			);
			const blobUrl = blockBlobClient.url;
			console.log(`Blob URL: ${blobUrl}`);
			return blobUrl;
		} else {
			throw new Error("contentHtml is undefined");
		}
	} catch (error) {
		console.error("Error in runGit:", error);
		throw error;
	}
};

export const run = async (
	input: gptPrompt,
	username: string
) => {
	try {
		const contentHtml = await createAssistant(input);
		const url = await runGit(username, contentHtml);
		return url;
	} catch (error) {
		console.error("Error in run:", error);

		throw error;
	}
};
