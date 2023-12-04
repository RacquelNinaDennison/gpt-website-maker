import BlogPostProps from "@/interfaces/components";
import styles from "@/styles/main.module.scss";
import { useState } from "react";

export const MarketPlace: React.FC<BlogPostProps> = ({
	createTemplate,
}) => {
	const [gptPrompt, setGptPrompt] = useState({
		nameOfCompany: "",
		mainColor: "",
		secondaryColor: "",
		theme: "",
		storeDescription: "",
		mainHeading: "Reimagine greatness",
		subHeading: "Greatness",
		webpageType: "",
	});
	const [userName, setUserName] = useState("");
	const onChangeHandler = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const { name, value } = e.target;
		if (name === "userName") {
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
	return (
		<>
			<div className={styles.row1}>
				<input
					type='text'
					placeholder='Enter your name'
					onChange={onChangeHandler}
					name='userName'
					value={userName}
					className={styles.inputTag}
				/>
				<br />
				<input
					type='email'
					placeholder='Email Address'
					onChange={onChangeHandler}
					name='theme'
					value={gptPrompt.theme}
				/>
				<br />
			</div>
			<div className={styles.row1}>
				<input
					type='text'
					placeholder='Name of the company'
					onChange={onChangeHandler}
					name='userName'
					value={userName}
					className={styles.inputTag}
				/>
				<br />
				<input
					type='text'
					placeholder='Describe your company a bit'
					onChange={onChangeHandler}
					name='theme'
					value={gptPrompt.theme}
				/>
				<br />
			</div>
			<div className={styles.row1}>
				<input
					type='text'
					placeholder='Company Slogan'
					onChange={onChangeHandler}
					name='userName'
					value={userName}
					className={styles.inputTag}
				/>
				<br />
				<input
					type='text'
					placeholder='Company Vision'
					onChange={onChangeHandler}
					name='theme'
					value={gptPrompt.theme}
				/>
				<br />
			</div>
			<div className={styles.row1}>
				<input
					type='text'
					placeholder='Main color theme'
					onChange={onChangeHandler}
					name='userName'
					value={userName}
					className={styles.inputTag}
				/>
				<br />
				<input
					type='text'
					placeholder='Second color choice'
					onChange={onChangeHandler}
					name='theme'
					value={gptPrompt.theme}
				/>
				<br />
			</div>

			<input
				type='text'
				placeholder='What type of products do you sell?'
				onChange={onChangeHandler}
				name='userName'
				value={userName}
				className={styles.inputTag}
			/>
			<br />

			<button
				title='submitForm'
				onClick={submitForm}
				className={styles.button}
			>
				Submit
			</button>
		</>
	);
};
