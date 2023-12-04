export type gptGeneratorRequest = {
	data: {
		userData: gptPrompt | gptBlogPrompt;
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
	webPageType: string;
	email: string;
};

export type gptBlogPrompt = {
	nameOfCompany: string;
	mainColor: string;
	secondaryColor: string;
	email: string;
	blogDescription: string;
	mainBlogHeading: string;
	subHeading: string;
	postType: string;
	blogName: string;
	webPageType: string;
};
