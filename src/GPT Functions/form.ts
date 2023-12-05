import {
	gptPrompt,
	gptBlogPrompt,
} from "@/types/gptGeneratorTypes";

export const generateGPTPrompt = (
	input: gptPrompt | gptBlogPrompt
): string => {
	let userDescriptionText = "";
	if (input.webPageType === "Blog Post") {
		const userInput = input as gptBlogPrompt;
		userDescriptionText = `
	Design a landing page for a blog. This needs to be a webpage that looks like a modern blog post. This is a webpage that you can use as a refernece of what the user is looking for https://cupofjo.com/. 
	
	Provide the HTML code and CSS code as per the description below. The code should all be in one file, using the style tag in the HTML file for the CSS. The main colour theme is #${userInput.mainColor} with accents of # ${userInput.secondaryColor}.

	For any images that need to be added, please use the unsplash link to generate them. This will act as place holders and will make the webpage look nice. Also use CSS to size the images, they should not be too large.

	Below is a bit of context of the site. This should better guide you as to how the blog landing page should be designed

	${userInput.blogDescription}.

	The landing page should have the following on it. There should be a distinct divide between the sections on the webpage.

	There should be a nav bar at the top of the page with a background colour of the main theme, the links should be a contrasting colour that will make the text stand out. Include links to ABOUT ME, BLOGS and CONTACT. When you hover over the links, make a circular boarder appear around them. The boarder should be complementing the theme of the page and should have a soft radius. The boarder radius should not be too circular, instead these should be a button like style with rounded edges.

	The hero section should have a main heading that says ${userInput.mainBlogHeading}. With a description underneath that says, ${userInput.subHeading}. This should be placed on the right hand side with some margins and paddings around it. There should be an image of the theme or the type of company the webpage is being designed for to the left hand side.  There should be spacing between the main heading and the image. The heading should be large with the description being of a smaller font to the heading.

	The about us section should be followed by a featured posts area. Here, display three blog post previews in a grid layout. Each post preview should consist of a thumbnail image on the left, with a brief summary and a 'Read More' button on the right. The thumbnail images should be uniformly sized and the summary should be concise, with a character limit to ensure visual uniformity. The 'Read More' button should match the main theme color. The images can be generated from unsplash.

	Next, integrate a testimonials section. The testimonals can be dummy ones. This section will have a carousel feature, allowing users to click through different testimonials. Each testimonial should include a short quote, the name of the person, and their designation or relation to the blog. The background of this section should be a lighter shade of the main theme color, providing a subtle contrast.
	
	Following the testimonials, add a subscription section. This should have a brief inviting text asking visitors to subscribe to the blog, followed by an input field for the email address and a submit button. The button should be prominently styled, making it clear and easy for users to subscribe.
	
	The footer of the page should contain links to social media profiles, a brief copyright notice, and a sitemap for easy navigation. The footer's background should be slightly darker than the main theme color, with text in a contrasting color for readability.
	
	Throughout the page, ensure that the typography is consistent and legible. Use a combination of serif for headings and sans-serif for body text. The font sizes should be responsive, adjusting gracefully for mobile and tablet views.
	
	Lastly, make sure that the entire webpage is responsive. It should render well on devices of all sizes, from large desktop monitors to small mobile screens. Use media queries in CSS to adjust layout elements and font sizes according to the screen size.
	
	End of description for the blog post landing page layout. The main theme of the webpage is ${userInput.postType}. For all of the images, add a rounded boarder to them and a shadow. 

	`;
	}
	if (input.webPageType === "Market Place") {
		const userInput = input as gptPrompt;
		userDescriptionText = `
        Design a landing page for an e-commerce site. This needs to be a webpage that showcases a modern, user-friendly online store. The main colour theme is #${userInput.mainColor} with accents of #${userInput.secondaryColor}.

        Provide the HTML and CSS code as per the description below. The code should be in one file, with the CSS in a style tag within the HTML. For placeholder images, use links to unsplash. Size the images appropriately with CSS, ensuring they complement the layout without overwhelming it.

        Below is a bit of context for the site:

        ${userInput.storeDescription}.

        The landing page should include:

        - A navigation bar at the top with the main theme color. Include links to CATEGORIES, ABOUT US, and CONTACT. Make the text stand out with a contrasting color. On hover, add a circular border with a soft radius, complementing the page theme.
        
        - A hero section with the main heading: ${userInput.mainHeading}, and a subheading: ${userInput.subHeading}. Place these to the right with appropriate margins. Include an image representing the business to the left, ensuring balanced spacing. Make sure that there is a spacing between the image and the headings given. 

        - A product showcase area featuring top-selling or featured items. Use a grid layout with each product displayed with an image, brief description, and a 'Buy Now' button. Ensure the images are uniform in size, and the descriptions are concise.

        - Customer testimonials section with a carousel feature. Include short quotes, names, and designations. Use a lighter shade of the main theme for the background.

        - A subscription section for newsletters or updates. Include an inviting text, email input field, and a styled submit button.

        - The footer should contain social media links, a copyright notice, and a sitemap. Use a slightly darker background than the main theme with contrasting text for readability.

        Throughout, maintain consistent and legible typography. Use serif for headings and sans-serif for body text, ensuring responsiveness for different devices.

        Finally, ensure the webpage is fully responsive, rendering well across various devices. Use media queries in CSS to adjust elements and font sizes.

        End of description for the e-commerce landing page. The theme of the webpage is ${userInput.theme}. Add rounded borders and shadows to all images to enhance the visual appeal.
        `;
	}
	return userDescriptionText;
};
