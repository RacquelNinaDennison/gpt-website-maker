import BlogPostProps from "@/interfaces/components";
import styles from "@/styles/main.module.scss";
import { useState } from "react";

export const BlogPost = (props: BlogPostProps) => {
	const [gptPrompt, setGptPrompt] = useState({
		nameOfCompany: "",
		mainColor: "",
		secondaryColor: "",
		email: "",
		blogDescription: "",
		mainBlogHeading: "Reimagine greatness",
		subHeading: "Greatness",
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
					placeholder='Main color theme'
					onChange={onChangeHandler}
					name='mainColor'
					value={gptPrompt.mainColor}
					className={styles.inputTag}
				/>
				<br />
				<input
					type='text'
					placeholder='Second color choice'
					onChange={onChangeHandler}
					name='secondaryColor'
					value={gptPrompt.secondaryColor}
				/>
				<br />
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
