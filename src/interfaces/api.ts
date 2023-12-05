import { NextApiRequest } from "next";
import {
	gptBlogPrompt,
	gptBuisnessPrompt,
	gptPrompt,
} from "../types/gptGeneratorTypes";

export interface ExtendedNextApiRequest
	extends NextApiRequest {
	body: {
		data: {
			userData:
				| gptPrompt
				| gptBlogPrompt
				| gptBuisnessPrompt;
			username: string;
		};
	};
}
