import { NextApiRequest } from "next";

export interface ExtendedNextApiRequest extends NextApiRequest {
	body: {
		username: string;
	};
}
