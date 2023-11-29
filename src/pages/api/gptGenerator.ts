import type { NextApiRequest, NextApiResponse } from "next";
import { run } from "../../GPT Functions/main";

const handler = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	await run();
	res.json("Success");
};

export default handler;
