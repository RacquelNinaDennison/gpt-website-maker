import BlogPostProps from "@/interfaces/components";
import styles from "@/styles/main.module.scss";
import { useState } from "react";
import { toast } from "react-toastify";

export const Business = (props: BlogPostProps) => {
	const [gptPrompt, setGptPrompt] = useState({
		nameOfCompany: "",
		mainColor: "#ffffff",
		secondaryColor: "#ffffff",
		email: "",
		companyDescription: "",
		mainBlogHeading: "",
		subHeading: "",
		companyStory: "",
		companyServices: "",
		webPageType: props.selected,
	});
	const [userName, setUserName] = useState("");
	const isFormValid = () => {
		return (
			userName.trim() !== "" &&
			gptPrompt.email.trim() !== "" &&
			gptPrompt.nameOfCompany.trim() !== "" &&
			gptPrompt.companyDescription.trim() !== "" &&
			gptPrompt.companyStory.trim() !== "" &&
			gptPrompt.mainBlogHeading.trim() !== "" &&
			gptPrompt.subHeading.trim() !== "" &&
			gptPrompt.companyServices.trim() !== ""
		);
	};

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
		if (isFormValid()) {
			props.createTemplate.mutate({
				data: {
					userData: gptPrompt,
					username: userName,
				},
			});
		} else {
			toast.error("All fields need to be completed");
		}
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
					placeholder='Company Name'
					onChange={onChangeHandler}
					name='nameOfCompany'
					value={gptPrompt.nameOfCompany}
					className={styles.inputTag}
				/>
				<br />
				<input
					type='text'
					placeholder='Company Story'
					onChange={onChangeHandler}
					name='companyStory'
					value={gptPrompt.companyStory}
					className={styles.inputTag}
				/>
				<br />
			</div>

			<input
				type='text'
				placeholder='Company Description'
				onChange={onChangeHandler}
				name='companyDescription'
				value={gptPrompt.companyDescription}
				className={styles.inputTag}
			/>

			<br />
			<div className={styles.row1}>
				<input
					type='text'
					placeholder='Company Mission'
					onChange={onChangeHandler}
					name='mainBlogHeading'
					value={gptPrompt.mainBlogHeading}
					className={styles.inputTag}
				/>
				<br />
				<input
					type='text'
					placeholder='Company slogan'
					onChange={onChangeHandler}
					name='subHeading'
					value={gptPrompt.subHeading}
					className={styles.inputTag}
				/>
				<br />
			</div>
			<br />

			<input
				type='text'
				placeholder='What services does your company offer?'
				onChange={onChangeHandler}
				name='companyServices'
				value={gptPrompt.companyServices}
				className={styles.inputTag}
			/>
			<br />

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
