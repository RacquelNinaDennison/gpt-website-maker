import type { NextApiRequest, NextApiResponse } from "next";
import { run } from "../../GPT Functions/main";
import { gptGeneratorResponse } from "@/types/gptGeneratorTypes";
const handler = async (
	req: NextApiRequest,
	res: NextApiResponse<gptGeneratorResponse>
) => {
	await run();
	res.json({ success: true });
};

export default handler;
