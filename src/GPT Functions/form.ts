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

export const getHtmlTemplate = (
	userName: string,
	urlLink: string
) => {
	return `
	
	<!DOCTYPE html>
<html>
	<head>
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1.0"
		/>
		<meta
			http-equiv="Content-Type"
			content="text/html; charset=UTF-8"
		/>
		<title>Website Wizard</title>
		<style>
			/* -------------------------------------
			               GLOBAL RESETS
			           ------------------------------------- */

			/*All the styling goes here*/

			img {
				border: none;
				-ms-interpolation-mode: bicubic;
				max-width: 100%;
			}

			body {
				background-color: #f6f6f6;
				font-family: sans-serif;
				-webkit-font-smoothing: antialiased;
				font-size: 14px;
				line-height: 1.4;
				margin: 0;
				padding: 0;
				-ms-text-size-adjust: 100%;
				-webkit-text-size-adjust: 100%;
			}

			table {
				border-collapse: separate;
				mso-table-lspace: 0pt;
				mso-table-rspace: 0pt;
				width: 100%;
			}
			table td {
				font-family: sans-serif;
				font-size: 14px;
				vertical-align: top;
			}

			/* -------------------------------------
			               BODY & CONTAINER
			           ------------------------------------- */

			.body {
				background-color: #f6f6f6;
				width: 100%;
			}

			/* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
			.container {
				display: block;
				margin: 0 auto !important;
				/* makes it centered */
				max-width: 580px;
				padding: 10px;
				width: 580px;
			}

			/* This should also be a block element, so that it will fill 100% of the .container */
			.content {
				box-sizing: border-box;
				display: block;
				margin: 0 auto;
				max-width: 580px;
				padding: 10px;
			}

			/* -------------------------------------
			               HEADER, FOOTER, MAIN
			           ------------------------------------- */
			.main {
				background: #ffffff;
				border-radius: 3px;
				width: 100%;
			}

			.wrapper {
				box-sizing: border-box;
				padding: 20px;
			}

			.content-block {
				padding-bottom: 10px;
				padding-top: 10px;
			}

			.footer {
				clear: both;
				margin-top: 10px;
				text-align: center;
				width: 100%;
			}
			.footer td,
			.footer p,
			.footer span,
			.footer a {
				color: #999999;
				font-size: 12px;
				text-align: center;
			}

			/* -------------------------------------
			               TYPOGRAPHY
			           ------------------------------------- */
			h1,
			h2,
			h3,
			h4 {
				color: #000000;
				font-family: sans-serif;
				font-weight: 400;
				line-height: 1.4;
				margin: 0;
				margin-bottom: 30px;
			}

			h1 {
				font-size: 35px;
				font-weight: 300;
				text-align: center;
				text-transform: capitalize;
			}

			p,
			ul,
			ol {
				font-family: sans-serif;
				font-size: 14px;
				font-weight: normal;
				margin: 0;
				margin-bottom: 15px;
			}
			p li,
			ul li,
			ol li {
				list-style-position: inside;
				margin-left: 5px;
			}

			a {
				color: #000000;
				text-decoration: underline;
			}

			/* -------------------------------------
			               BUTTONS
			           ------------------------------------- */
			.btn {
				box-sizing: border-box;
				width: 100%;
			}
			.btn > tbody > tr > td {
				padding-bottom: 15px;
			}
			.btn table {
				width: auto;
			}
			.btn table td {
				text-align: center;
			}

			.btn a {
				border: 1px solid black;
				background: linear-gradient(
					45deg,
					#fc466b,
					#3f5efb
				);
				border-radius: 5px;
				box-sizing: border-box;
				color: black;
				cursor: pointer;
				display: inline-block;
				font-size: 14px;
				font-weight: bold;
				margin: 0;
				padding: 12px 25px;
				text-decoration: none;
				text-transform: capitalize;
				backdrop-filter: blur(10px);
				box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, 0.2);
			}

			.btn a:hover {
				background-color: white;
				border: 1px solid black;
				color: black;
			}

			/* -------------------------------------
			               OTHER STYLES THAT MIGHT BE USEFUL
			           ------------------------------------- */
			.last {
				margin-bottom: 0;
			}

			.first {
				margin-top: 0;
			}

			.align-center {
				text-align: center;
			}

			.align-right {
				text-align: right;
			}

			.align-left {
				text-align: left;
			}

			.clear {
				clear: both;
			}

			.mt0 {
				margin-top: 0;
			}

			.mb0 {
				margin-bottom: 0;
			}

			.preheader {
				color: transparent;
				display: none;
				height: 0;
				max-height: 0;
				max-width: 0;
				opacity: 0;
				overflow: hidden;
				mso-hide: all;
				visibility: hidden;
				width: 0;
			}

			.powered-by a {
				text-decoration: none;
			}

			hr {
				border: 0;
				border-bottom: 1px solid #f6f6f6;
				margin: 20px 0;
			}

			/* -------------------------------------
			               RESPONSIVE AND MOBILE FRIENDLY STYLES
			           ------------------------------------- */
			@media only screen and (max-width: 620px) {
				table.body h1 {
					font-size: 28px !important;
					margin-bottom: 10px !important;
				}
				table.body p,
				table.body ul,
				table.body ol,
				table.body td,
				table.body span,
				table.body a {
					font-size: 16px !important;
				}
				table.body .wrapper,
				table.body .article {
					padding: 10px !important;
				}
				table.body .content {
					padding: 0 !important;
				}
				table.body .container {
					padding: 0 !important;
					width: 100% !important;
				}
				table.body .main {
					border-left-width: 0 !important;
					border-radius: 0 !important;
					border-right-width: 0 !important;
				}
				table.body .btn table {
					width: 100% !important;
				}
				table.body .btn a {
					width: 100% !important;
				}
				table.body .img-responsive {
					height: auto !important;
					max-width: 100% !important;
					width: auto !important;
				}
			}

			/* -------------------------------------
			               PRESERVE THESE STYLES IN THE HEAD
			           ------------------------------------- */
			@media all {
				.ExternalClass {
					width: 100%;
				}
				.ExternalClass,
				.ExternalClass p,
				.ExternalClass span,
				.ExternalClass font,
				.ExternalClass td,
				.ExternalClass div {
					line-height: 100%;
				}
				.apple-link a {
					color: inherit !important;
					font-family: inherit !important;
					font-size: inherit !important;
					font-weight: inherit !important;
					line-height: inherit !important;
					text-decoration: none !important;
				}
				#MessageViewBody a {
					color: inherit;
					text-decoration: none;
					font-size: inherit;
					font-family: inherit;
					font-weight: inherit;
					line-height: inherit;
				}
				.btn-primary table td:hover {
					background-color: linear-gradient(
						45deg,
						#fc466b,
						#3f5efb
					) !important;
				}
				.btn-primary a:hover {
					background-color: white;
					border-color: none;
				}
			}
		</style>
	</head>
	<body>
		<span class="preheader">Site to website </span>
		<table
			role="presentation"
			border="0"
			cellpadding="0"
			cellspacing="0"
			class="body"
		>
			<tr>
				<td>&nbsp;</td>
				<td class="container">
					<div class="content">
						<!-- START CENTERED WHITE CONTAINER -->
						<table role="presentation" class="main">
							<!-- START MAIN CONTENT AREA -->
							<tr>
								<td class="wrapper">
									<table
										role="presentation"
										border="0"
										cellpadding="0"
										cellspacing="0"
									>
										<tr>
											<td>
												<p>Hi ${userName},</p>
												<p>
													Here is the link to your website
													${urlLink}.
												</p>
												<p>
													Thank you for using our service.
												</p>
												<table
													role="presentation"
													border="0"
													cellpadding="0"
													cellspacing="0"
													class="btn btn-primary"
												>
													<tbody>
														<tr>
															<td align="left">
																<table
																	role="presentation"
																	border="0"
																	cellpadding="0"
																	cellspacing="0"
																>
																	<tbody>
																		<tr>
																			<td>
																				<a
																					href=${urlLink}
																					target="_blank"
																					>Go to site</a
																				>
																			</td>
																		</tr>
																	</tbody>
																</table>
															</td>
														</tr>
													</tbody>
												</table>

												<p>Website Wizards</p>
											</td>
										</tr>
									</table>
								</td>
							</tr>

							<!-- END MAIN CONTENT AREA -->
						</table>
						<!-- END CENTERED WHITE CONTAINER -->

						<!-- START FOOTER -->
						<div class="footer">
							<table
								role="presentation"
								border="0"
								cellpadding="0"
								cellspacing="0"
							>
								<tr>
									<td class="content-block">
										<a
											class="apple-link"
											href="https://gpt-website-maker-production.up.railway.app"
											target="_blank"
											>Website Wizards</a
										>
									</td>
								</tr>
								<tr>
									<td class="content-block powered-by">
										Powered by
										<a
											href="https://shortenr.faisaljr.com/"
											target="_blank"
											>Shortenr</a
										>.
									</td>
								</tr>
							</table>
						</div>
						<!-- END FOOTER -->
					</div>
				</td>
				<td>&nbsp;</td>
			</tr>
		</table>
	</body>
</html>

	
	`;
};
