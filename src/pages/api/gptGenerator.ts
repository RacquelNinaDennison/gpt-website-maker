import type { NextApiResponse } from "next";
import { run } from "../../GPT Functions/main";
import { gptGeneratorResponse } from "@/types/gptGeneratorTypes";
import { ExtendedNextApiRequest } from "@/interfaces/api";
import axios, { AxiosResponse } from "axios";
import { Shorten } from "@/types/apiShorten";

const handler = async (
	req: ExtendedNextApiRequest,
	res: NextApiResponse<gptGeneratorResponse>
) => {
	const { username, userData } = req.body.data;
	console.log(req.body);
	console.log("in the request");
	console.log(username, userData);
	const url = await run(userData, username);
	const urlShorten: AxiosResponse = await axios.post(
		"https://shortenr-steel.vercel.app/api/shorten",
		{ url: url }
	);
	const urlShort: Shorten = urlShorten.data;
	res.json({ success: true, data: urlShort.shortUrl });
};

export default handler;
