export type gptGeneratorRequest = {
	data: {
		userData: gptPrompt | gptBlogPrompt | gptBuisnessPrompt;
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

export type gptBuisnessPrompt = {
	nameOfCompany: string;
	mainColor: string;
	secondaryColor: string;
	email: string;
	companyDescription: string;
	mainBlogHeading: string;
	subHeading: string;
	companyStory: string;
	companyServices: string;
	webPageType: string;
};
