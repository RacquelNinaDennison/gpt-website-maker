const storeType = "Nature blog";
const storeDescription =
	"https://www.faithful-to-nature.co.za/blog/ - I want you to develop a nature blog that has the exact same layout as this page. The color theme should be the same.";
const mainColor = "5F6F52";
const secondColor = "FAEED1";
const mainHeading = "Nature blog";
const subHeading = "Nature revealed";
const userDescriptionText = `
Design a landing page for a ${storeType}. Provide the HTML code and CSS code as per the description below. The code should all be in one file, using the style tag in the HTML file for the CSS. The main colour theme is #${mainColor} with accents of # ${secondColor}.
 
For any images that need to be added, please use the unsplash link to generate them. This will act as place holders and will make the webpage look nice. Also use CSS to size the images, they should not be too large. 
 
Below is a bit of context of the site. This should better guide you as to how the company landing page should be designed
 
${storeDescription}
 
The landing page should have the following on it. There should be a distinct divide between the sections on the webpage.
 
There should be a nav bar at the top of the page with a background colour of the main theme, the links should be a contrasting colour that will make the text stand out. Include links to ABOUT US, CONTACT US and STORE. When you hover over the links, make a circular boarder appear around them. The boarder should be white and should have a soft radius. The boarder radius should not be too circular, instead these should be a button like style with rounded edges.
 
The hero section should have a main heading that says ${mainHeading}. With a description underneath that says, ${subHeading}. This should be placed on the right hand side with some margins and paddings around it. There should be an image of the theme or the type of company the webpage is being designed for to the left hand side.  There should be spacing between the main heading and the image. The heading should be large with the description being of a smaller font to the heading.
 
In the section below, this will be a summary section of the business. This should say about us in large text. The text should be placed in the middle of this section. Underneath the text should be lorem Isom place holders just to fill up the space. There should be 3 lines filling up the description section.
 
Under this section will be the product section. I want cards that are placed in a row where each card has an image of a product with a price of the product underneath and a small button that says go to store. There should be 4 cards placed here side by side, with some margin and padding. When you hover over each, there should be an on hover effect. There should also be some shadows around the cards. The cards should have soft rounded edges. Write the code for all 4 cards.
 
Under this, is the form section. Create a heading that says contact us with a form underneath. The heading “Contact Us” should be placed directly above the form. The form needs to be styled. When clicking on each input box, add a shadow around the boarder. Place this on the right hand side with an image to suit the theme on the left hand side. The image should be sized correctly to fit the space with the right amount of padding.
 
Under all of this should be a footer. With social media posts links, you can make up fake ones.
 
Make the code as extensive as possible with minimal additions and inputs needed from the user. The code should be able to be deployed without needing the user to adjust it and make changes. All images that are used can be generated from the unsplash link with the right dimensions needed. Add all the product cards, write the code for each product card that is to be displayed. Instead of placing only one product card, place the amount that is specified in the description. Write out all the code needed
 
Make sure that this follows the Material design principles and the principles that were provided. This should be a website that stands out. If extra colors are needed, add them, however, they should completement the colors already provided.


`;

export default userDescriptionText;
