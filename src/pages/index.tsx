import React, { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import styles from "@/styles/main.module.scss";
import { useMutation } from "@tanstack/react-query";
import {
	gptGeneratorResponse,
	gptGeneratorRequest,
} from "../types/gptGeneratorTypes";
import Loader from "@/Components/loader";

export default function Home() {
	const [url, setUrl] = useState("");
	const [urlGenerated, setUrlGenerated] = useState(false);
	const [isLoading, setIsLoading] = useState(false); // Initialize isLoading to false

	useEffect(() => {
		const savedUrl = localStorage.getItem("url");
		if (savedUrl) {
			setUrl(savedUrl);
			setUrlGenerated(true);
		}
	}, []);

	useEffect(() => {
		if (urlGenerated) {
			localStorage.setItem("url", url);
		}
	}, [url, urlGenerated]);

	const createTemplate = useMutation({
		mutationFn: async (
			data: gptGeneratorRequest
		): Promise<gptGeneratorResponse> => {
			setIsLoading(true); // Set loading state to true when mutation starts
			try {
				const response = await axios.post(
					"/api/gptGenerator",
					data
				);
				return response.data;
			} catch (error) {
				console.error("Error in mutation: ", error);
				throw error;
			} finally {
				setIsLoading(false); // Set loading state to false after mutation ends
			}
		},
		onError: (err: Error) => {
			console.error("Error: ", err);
		},
		onSuccess: (data) => {
			setUrl(data.data);
			setUrlGenerated(true);
		},
	});

	const submitForm = async (
		event: React.MouseEvent<HTMLElement>
	) => {
		event.preventDefault();
		createTemplate.mutate({
			data: { username: "racquel" },
		});
	};

	const goBack = async (
		event: React.MouseEvent<HTMLElement>
	) => {
		event.preventDefault();
		setUrlGenerated(false);
		setUrl("");
		localStorage.removeItem("url");
	};

	return (
		<>
			<Head>
				<title>Website Maker</title>
				<meta
					name='description'
					content='Website maker app'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link rel='icon' href='/favicon.ico' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<main>
				{isLoading ? (
					<div className={styles.container}>
						<h1>Loading Webpage</h1>
						<Loader />
					</div>
				) : !urlGenerated ? (
					<div className={styles.container}>
						<form>
							<p>Website Maker</p>
							<input
								type='text'
								placeholder='Placeholder text one'
							/>
							<br />
							<input
								type='text'
								placeholder='Placeholder text two'
							/>
							<br />
							<input
								type='text'
								placeholder='Placeholder text three'
							/>
							<br />
							<button
								title='submitForm'
								onClick={submitForm}
								className={styles.button}
							>
								Submit
							</button>
						</form>
						<div className={styles.drops}>
							<div className={styles.drops}>
								<div
									className={`${styles.drop} ${styles.drop1}`}
								></div>
								<div
									className={`${styles.drop} ${styles.drop2}`}
								></div>
								<div
									className={`${styles.drop} ${styles.drop3}`}
								></div>
								<div
									className={`${styles.drop} ${styles.drop4}`}
								></div>
								<div
									className={`${styles.drop} ${styles.drop5}`}
								></div>
							</div>
						</div>
					</div>
				) : (
					<div
						className={`${styles.container} ${styles.container1}`}
					>
						<div className={styles.blur}>
							<p>Hosted Webpage</p>
							<a
								className={styles.url}
								href={url}
								target='_blank'
								rel='noopener noreferrer'
							>
								{url}
							</a>
							<button
								title='backButton'
								onClick={goBack}
								className={`${styles.button} ${styles.button1}`}
							>
								Back
							</button>
						</div>
						<div className={styles.drops}>
							<div className={styles.drops}>
								<div className={styles.drops}>
									<div
										className={`${styles.drop} ${styles.drop1}`}
									></div>
									<div
										className={`${styles.drop} ${styles.drop2}`}
									></div>
									<div
										className={`${styles.drop} ${styles.drop3}`}
									></div>
									<div
										className={`${styles.drop} ${styles.drop4}`}
									></div>
									<div
										className={`${styles.drop} ${styles.drop5}`}
									></div>
								</div>
							</div>
						</div>
					</div>
				)}
			</main>
			<footer>
				<div>
					<a
						href='https://shortenr.faisaljr.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						Powered by Shortenr
					</a>
					🦄
				</div>
			</footer>
		</>
	);
}
