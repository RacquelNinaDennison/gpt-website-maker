import Head from "next/head";
import styles from "@/styles/main.module.scss";
import { useQuery } from "@tanstack/react-query";
import { MouseEvent } from "react";
import axios, { AxiosResponse } from "axios";

export default function Home() {
	const { data, isSuccess } = useQuery({
		queryKey: [`gptResponse`],
		queryFn: async () => {
			return await axios.post(`/api/gptGenerator`);
		},
	});
	const submitForm = (event: MouseEvent<HTMLElement>) => {
		event.preventDefault();
		console.log(data);
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
						<p>Website Maker</p>
						<input
							type='text'
							placeholder='Placeholder text one '
						/>
						<br />
						<input
							type='text'
							placeholder='Placeholder text two'
						/>
						<br />
						<input
							type='text'
							placeholder='Placeholder text two'
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
			</main>
		</>
	);
}
