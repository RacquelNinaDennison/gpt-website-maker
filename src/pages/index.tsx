import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "@/styles/main.module.scss";
import { useRouter } from "next/navigation";
export default function Home() {
	const router = useRouter();

	const nextPage = async (
		event: React.MouseEvent<HTMLElement>
	) => {
		event.preventDefault();
		router.push("/gptMaker");
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
				<div className={styles.container}>
					<form>
						<h1 className={styles.text}>
							Welcome to the Website Wizard generator
						</h1>
						<p className={styles.text1}>
							Creating websites powered by GPT
						</p>

						<button
							title='submitForm'
							onClick={nextPage}
							className={`${styles.button}
${styles.button2}`}
						>
							Start Making
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
