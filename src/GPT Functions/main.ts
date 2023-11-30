import {
	BlobServiceClient,
	StorageSharedKeyCredential,
} from "@azure/storage-blob";

const runGit = async () => {
	const account = process.env.ACCOUNT_NAME as string;
	const accountKey = process.env.ACCOUNT_KEY as string;

	const sharedKeyCredential =
		new StorageSharedKeyCredential(account, accountKey);
	const blobServiceClient = new BlobServiceClient(
		`https://${account}.blob.core.windows.net`,
		sharedKeyCredential
	);
	const containerName = "$web";

	const containerClient =
		blobServiceClient.getContainerClient(containerName);

	const content = `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Modern Landing Page</title>
		<link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet">
		<style>
			body {
				font-family: 'Roboto', sans-serif;
				margin: 0;
				padding: 0;
				color: #333;
			}
			header {
				background: #fff;
				padding: 10px 0;
				box-shadow: 0 2px 4px rgba(0,0,0,0.1);
			}
			nav {
				width: 90%;
				margin: 0 auto;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
			.logo a {
				text-decoration: none;
				color: #333;
				font-weight: 700;
			}
			.navigation {
				list-style: none;
				padding: 0;
			}
			.navigation li {
				display: inline;
				margin-left: 20px;
			}
			.navigation a {
				text-decoration: none;
				color: #333;
			}
			.cta-button {
				text-decoration: none;
				background-color: #007bff;
				color: #fff;
				padding: 10px 20px;
				border-radius: 5px;
				transition: background-color 0.3s;
			}
			.cta-button:hover {
				background-color: #0056b3;
			}
			.hero-section {
				background-image: url('https://source.unsplash.com/random/1920x1080/?modern,architecture');
				background-size: cover;
				background-position: center;
				color: #fff;
				text-align: center;
				padding: 100px 0;
			}
			.service {
				text-align: center;
				padding: 50px 20px;
			}
			.testimonial {
				background-color: #f8f9fa;
				padding: 20px;
				margin: 20px 0;
				border-left: 5px solid #007bff;
			}
			footer {
				background: #333;
				color: #fff;
				text-align: center;
				padding: 20px 0;
			}
			footer a {
				color: #fff;
				text-decoration: none;
			}
		</style>
	</head>
	<body>
		<header>
			<nav>
				<div class="logo"><a href="#">Logo</a></div>
				<ul class="navigation">
					<li><a href="#home">Home</a></li>
					<li><a href="#services">Services</a></li>
					<li><a href="#testimonials">Testimonials</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
				<a href="#" class="cta-button">Get Started</a>
			</nav>
		</header>
		<section id="home" class="hero-section">
			<h1>Find Your New Modern Apartment</h1>
			<p>Explore top-rated properties with premium amenities.</p>
			<a href="#" class="cta-button">Learn More</a>
		</section>
		<section id="services">
			<div class="service">
				<img src="https://source.unsplash.com/random/300x200/?office" alt="Service Icon">
				<h3>Service 1</h3>
				<p>Description of service 1.</p>
			</div>
			<!-- Repeat for other services -->
		</section>
		<section id="testimonials">
			<div class="testimonial">
				<p>"This is a great service!" - John Doe</p>
			</div>
			<!-- Repeat for other testimonials -->
		</section>
		<section id="contact" class="cta-section">
			<h2>Interested? Get in touch!</h2>
			<a href="#" class="cta-button">Contact Us</a>
		</section>
		<footer>
			<p>&copy; 2023 Modern Landing Page. All rights reserved.</p>
			<ul class="footer-links">
				<li><a href="#">Privacy Policy</a></li>
				<li><a href="#">Terms of Service</a></li>
			</ul>
		</footer>
	</body>
	</html>
	`;
	const blobName = "index.html";
	const blockBlobClient =
		containerClient.getBlockBlobClient(blobName);
	const blobOptions = {
		blobHTTPHeaders: { blobContentType: "text/html" },
	};
	const uploadBlobResponse = await blockBlobClient.upload(
		content,
		content.length,
		blobOptions
	);

	console.log(
		`Upload block blob ${blobName} successfully. Client request id ${uploadBlobResponse.clientRequestId}`,
		uploadBlobResponse.requestId
	);

	const blobUrl = blockBlobClient.url;
	console.log(`Blob URL: ${blobUrl}`);
};

export const run = async () => {
	// await createAssistant();
	// extractHtmlFromAssistantAndWriteToFile();
	await runGit();
};
