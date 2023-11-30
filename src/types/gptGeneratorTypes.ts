export type gptGeneratorRequest = {
	data: {
		username: string;
	};
};

export type gptGeneratorResponse = {
	success: boolean;
	data: string;
};
