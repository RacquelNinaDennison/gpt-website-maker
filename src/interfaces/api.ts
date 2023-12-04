import { gptPrompt } from "@/types/gptGeneratorTypes";
import { NextApiRequest } from "next";

export interface ExtendedNextApiRequest
	extends NextApiRequest {
	body: {
		data: {
			userData: gptPrompt;
			username: string;
		};
	};
}
