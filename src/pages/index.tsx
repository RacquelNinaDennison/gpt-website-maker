import React, { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import styles from "@/styles/main.module.scss";
import { useMutation } from "@tanstack/react-query";
import { Shorten } from "../types/apiShorten";
import {
	gptGeneratorResponse,
	gptGeneratorRequest,
} from "../types/gptGeneratorTypes";

export default function Home() {
	const [url, setUrl] = useState("");
	const [urlGenerated, setUrlGenerated] = useState(false);

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

	const createdLogistic = useMutation({
		mutationFn: async (
			data: gptGeneratorRequest
		): Promise<gptGeneratorResponse> => {
			const response = await axios.post(
				"/api/gptGenerator",
				data
			);
			return response.data;
		},
		onMutate: () => {},
		onError: (err: Error) => {
			console.log(err);
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
		createdLogistic.mutate({
			data: { username: "racquel" },
		});
	};
	const goBack = async (
		event: React.MouseEvent<HTMLElement>
	) => {
		event.preventDefault();
		setUrlGenerated(false);
		setUrl("");
		localStorage.setItem("url", "");
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
				{!urlGenerated ? (
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
				) : (
					<div
						className={`${styles.container} ${styles.conatiner1}`}
					>
						<div className={styles.blur}>
							<p>Hosted Webpage</p>
							<a
								className={styles.url}
								href={url}
								target='_blank'
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
				)}
			</main>
			<footer>
				<div>
					<a
						href='https://shortenr.faisaljr.com/'
						target='_blank'
					>
						Powered by Shortenr
					</a>
					🦄
				</div>
			</footer>
		</>
	);
}
