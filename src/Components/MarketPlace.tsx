import BlogPostProps from "@/interfaces/components";
import styles from "@/styles/main.module.scss";
import { useState } from "react";

export const MarketPlace: React.FC<BlogPostProps> = ({
	createTemplate,
	selected,
}) => {
	const [gptPrompt, setGptPrompt] = useState({
		nameOfCompany: "",
		mainColor: "",
		secondaryColor: "",
		theme: "",
		storeDescription: "",
		mainHeading: "",
		subHeading: "",
		webPageType: selected,
		email: "",
		companySolgan: "",
		companyVision: "",
		product: "",
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
					name='email'
					value={gptPrompt.email}
				/>
				<br />
			</div>
			<div className={styles.row1}>
				<input
					type='text'
					placeholder='Name of the company'
					onChange={onChangeHandler}
					name='nameOfCompany'
					value={gptPrompt.nameOfCompany}
					className={styles.inputTag}
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
			</div>
			<div className={styles.row1}>
				<input
					type='text'
					placeholder='Company Slogan'
					onChange={onChangeHandler}
					name='companySlogan'
					value={gptPrompt.companySolgan}
					className={styles.inputTag}
				/>
				<br />
				<input
					type='text'
					placeholder='Company Vision'
					onChange={onChangeHandler}
					name='companyVision'
					value={gptPrompt.companyVision}
				/>
				<br />
			</div>
			<div className={styles.row1}>
				<input
					type='text'
					placeholder='Main color theme'
					onChange={onChangeHandler}
					name='userName'
					value={gptPrompt.mainColor}
					className={styles.inputTag}
				/>
				<br />
				<input
					type='text'
					placeholder='Second color choice'
					onChange={onChangeHandler}
					name='theme'
					value={gptPrompt.secondaryColor}
				/>
				<br />
			</div>
			<div className={styles.row1}>
				<input
					type='text'
					placeholder='Main heading on webpage'
					onChange={onChangeHandler}
					name='mainHeading'
					value={gptPrompt.mainHeading}
					className={styles.inputTag}
				/>
				<br />
				<input
					type='text'
					placeholder='Subheading on webpage'
					onChange={onChangeHandler}
					name='subHeading'
					value={gptPrompt.subHeading}
				/>
				<br />
			</div>
			<input
				type='text'
				placeholder='What type of products do you sell?'
				onChange={onChangeHandler}
				name='product'
				value={gptPrompt.product}
				className={styles.inputTag}
			/>
			<br />
			<div className={styles.radioContainer}>
				<label className={styles.radLabel}>
					<div className={styles.radText}>Main Color</div>
					<input
						type='color'
						className={styles.colorInput}
						name='mainColor'
						value={gptPrompt.mainColor}
						onChange={onChangeHandler}
					/>
				</label>
				<label className={styles.radLabel}>
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
