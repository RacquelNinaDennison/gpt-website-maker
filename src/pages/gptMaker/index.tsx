import React, { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import styles from "@/styles/main.module.scss";
import useWindowSize from "react-use/lib/useWindowSize";
import { useMutation } from "@tanstack/react-query";
import {
	gptGeneratorResponse,
	gptGeneratorRequest,
} from "@/types/gptGeneratorTypes";
import Loader from "@/Components/loader";
import Confetti from "react-confetti";

export default function Home() {
	const [url, setUrl] = useState("");
	const [urlGenerated, setUrlGenerated] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [gptPrompt, setGptPrompt] = useState({
		nameOfCompany: "",
		mainColor: "",
		secondaryColor: "",
		theme: "",
		storeDescription: "",
		mainHeading: "Reimagine greatness",
		subHeading: "Greatness",
	});
	const [userName, setUserName] = useState("");
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
			setIsLoading(true);
			try {
				console.log("Sending response");
				console.log(data);
				const response = await axios.post(
					"/api/gptGenerator",
					data
				);
				return response.data;
			} catch (error) {
				console.error("Error in Axios request:", error);
				console.error("Response data:", error);
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
	const onChangeHandler = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const { name, value } = e.target;
		if (name == "userName") {
			setUserName(value);
		} else {
			setGptPrompt((prevValue) => ({
				...prevValue,
				[name]: value,
			}));
		}
	};
	const submitForm = async (
		event: React.MouseEvent<HTMLElement>
	) => {
		event.preventDefault();

		createTemplate.mutate({
			data: {
				userData: gptPrompt,
				username: userName,
			},
		});
	};

	const goBack = async (
		event: React.MouseEvent<HTMLElement>
	) => {
		event.preventDefault();
		setUrlGenerated(false);

		localStorage.removeItem("url");
	};

	return (
		<>
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
							<p className={styles.formText}>
								Fill in the details below to generate your
								webpage
							</p>
							<input
								type='text'
								placeholder='Enter your name'
								onChange={onChangeHandler}
								name='userName'
								value={userName}
							/>
							<br />
							<input
								type='text'
								placeholder='Theme of webpage'
								onChange={onChangeHandler}
								name='theme'
								value={gptPrompt.theme}
							/>
							<br />
							<input
								type='text'
								placeholder='Describe your company a bit'
								onChange={onChangeHandler}
								name='storeDescription'
								value={gptPrompt.storeDescription}
							/>
							<br />

							<input
								type='text'
								placeholder='Name of the company'
								onChange={onChangeHandler}
								name='nameOfCompany'
								value={gptPrompt.nameOfCompany}
							/>
							<br />
							<input
								type='text'
								placeholder='Main color choice '
								onChange={onChangeHandler}
								name='mainColor'
								value={gptPrompt.mainColor}
							/>
							<br />
							<input
								type='text'
								placeholder='Second main color choice'
								name='secondaryColor'
								value={gptPrompt.secondaryColor}
								onChange={onChangeHandler}
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
					<>
						<Confetti width={1500} height={800} />
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
					</>
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
