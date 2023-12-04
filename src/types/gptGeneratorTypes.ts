export type gptGeneratorRequest = {
	data: {
		userData: gptPrompt;
		username: string;
	};
};

export type gptGeneratorResponse = {
	success: boolean;
	data: string;
};

export type gptPrompt = {
	nameOfCompany: string;
	mainColor: string;
	secondaryColor: string;
	theme: string;
	storeDescription: string;
	mainHeading: string;
	subHeading: string;
	webpageType: string;
};
