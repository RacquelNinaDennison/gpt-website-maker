import BlogPostProps from "@/interfaces/components";
import styles from "@/styles/main.module.scss";
import { useState } from "react";

export const Business = (props: BlogPostProps) => {
	const [gptPrompt, setGptPrompt] = useState({
		nameOfCompany: "",
		mainColor: "#ffffff",
		secondaryColor: "#ffffff",
		email: "",
		blogDescription: "",
		mainBlogHeading: "",
		subHeading: "",
		postType: "",
		blogName: "",
		webPageType: props.selected,
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
		props.createTemplate.mutate({
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
					name='email'
					value={gptPrompt.email}
					className={styles.inputTag}
				/>
				<br />
			</div>
			<div className={styles.row1}>
				<input
					type='text'
					placeholder='Name of the blog'
					onChange={onChangeHandler}
					name='blogName'
					value={gptPrompt.blogName}
					className={styles.inputTag}
				/>
				<br />
				<input
					type='text'
					placeholder='Describe your blog a bit'
					onChange={onChangeHandler}
					name='blogDescription'
					value={gptPrompt.blogDescription}
					className={styles.inputTag}
				/>
				<br />
			</div>

			<input
				type='text'
				placeholder='What types of posts do you write about'
				onChange={onChangeHandler}
				name='postType'
				value={gptPrompt.postType}
				className={styles.inputTag}
			/>

			<br />
			<div className={styles.row1}>
				<input
					type='text'
					placeholder='Blog headline'
					onChange={onChangeHandler}
					name='mainBlogHeading'
					value={gptPrompt.mainBlogHeading}
					className={styles.inputTag}
				/>
				<br />
				<input
					type='text'
					placeholder='Subheading'
					onChange={onChangeHandler}
					name='subHeading'
					value={gptPrompt.subHeading}
					className={styles.inputTag}
				/>
				<br />
			</div>

			<div className={styles.radioContainer}>
				<label className={styles.radLabel1}>
					<div className={styles.radText}>Main Color</div>
					<input
						type='color'
						className={styles.colorInput}
						name='mainColor'
						value={gptPrompt.mainColor}
						onChange={onChangeHandler}
					/>
				</label>
				<label className={styles.radLabel1}>
					<div className={styles.radText}>
						Secondary Color
					</div>
					<input
						type='color'
						className={styles.colorInput}
						name='secondaryColor'
						value={gptPrompt.secondaryColor}
						onChange={onChangeHandler}
					/>
				</label>
			</div>

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
