import { gptPrompt } from "@/types/gptGeneratorTypes";
import { NextApiRequest } from "next";
import { gptBlogPrompt } from "../types/gptGeneratorTypes";

export interface ExtendedNextApiRequest
	extends NextApiRequest {
	body: {
		data: {
			userData: gptPrompt | gptBlogPrompt;
			username: string;
		};
	};
}
