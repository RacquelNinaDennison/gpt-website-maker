import type { NextApiResponse } from "next";
import { run } from "../../GPT Functions/main";
import { gptGeneratorResponse } from "@/types/gptGeneratorTypes";
import { ExtendedNextApiRequest } from "@/interfaces/api";
import axios, { AxiosResponse } from "axios";
import { Shorten } from "@/types/apiShorten";
import { sendMail } from "../../utils/utils";
import { use } from "react";

const handler = async (
	req: ExtendedNextApiRequest,
	res: NextApiResponse<gptGeneratorResponse>
) => {
	const { username, userData } = req.body.data;
	const { url, contentHtml } = await run(
		userData,
		username
	);
	const urlShorten: AxiosResponse = await axios.post(
		"https://shortenr-steel.vercel.app/api/shorten",
		{ url: url }
	);

	const urlShort: Shorten = urlShorten.data;
	const response = `The link to your webpage is ${urlShort.shortUrl}. Thank you for making use of our service :)`;
	await sendMail(
		"Link to website",
		`${userData.email}`,
		`Website maker link`,
		response
	);
	res.json({ success: true, data: urlShort.shortUrl });
};

export default handler;
