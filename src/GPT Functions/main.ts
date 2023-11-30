import {
	BlobServiceClient,
	StorageSharedKeyCredential,
} from "@azure/storage-blob";
import { createAssistant } from "./createAssistant";

const runGit = async (
	username: string,
	contentHtml: string
): Promise<string> => {
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
	const uploadBlobResponse = await blockBlobClient.upload(
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
};

export const run = async (username: string) => {
	const contentHtml = await createAssistant();
	const url = await runGit(username, contentHtml);
	return url;
};
