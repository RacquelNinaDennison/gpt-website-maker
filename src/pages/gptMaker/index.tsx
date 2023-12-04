import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "@/styles/main.module.scss";
import { useMutation } from "@tanstack/react-query";
import {
	gptGeneratorResponse,
	gptGeneratorRequest,
} from "@/types/gptGeneratorTypes";

import Confetti from "react-confetti";
import { BlogPost } from "@/Components/BlogPost";
import { Loader } from "@/Components/Loader";

export default function Home() {
	const [url, setUrl] = useState("");
	const [urlGenerated, setUrlGenerated] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [selectedOption, setSelectedOption] = useState("");
	const handleRadioChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setSelectedOption(e.target.value);
		console.log(selectedOption);
	};

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
				setIsLoading(false);
			}
		},
		onError: (err: Error) => {
			console.error("Error: ", err);
		},
		onSuccess: (data) => {
			setUrl(data.data);
			setUrlGenerated(true);
			console.log(isLoading);
		},
	});

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
							<div>
								<p className={styles.formText}>
									Choose the type of webpage
								</p>
							</div>
							<div className={styles.radioContainer}>
								<label className={styles.radLabel}>
									<input
										type='radio'
										className={styles.radInput}
										name='rad'
										value='Blog Post'
										checked={selectedOption === "Blog Post"}
										onChange={handleRadioChange}
									/>
									<div className={styles.radDesign}></div>
									<div className={styles.radText}>
										Blog Post
									</div>
								</label>
								{/* <label className={styles.radLabel}>
									<input
										type='radio'
										className={styles.radInput}
										name='rad'
										value='Market Place'
										checked={
											selectedOption === "Market Place"
										}
										onChange={handleRadioChange}
									/>
									<div className={styles.radDesign}></div>
									<div className={styles.radText}>
										Market Place
									</div>
								</label> */}
							</div>
							<br />

							{selectedOption === "Blog Post" && (
								<BlogPost
									createTemplate={createTemplate}
									selected={selectedOption}
								/>
							)}
							{/* {selectedOption == "Market Place" && (
								<MarketPlace
									createTemplate={createTemplate}
									selected={selectedOption}
								/>
							)} */}
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
