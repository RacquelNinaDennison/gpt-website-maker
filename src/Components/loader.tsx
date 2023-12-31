import styles from "../styles/loader.module.scss";
export const Loader = () => {
	return (
		<>
			<div className={styles.centered}>
				<span className={styles.spanClass}></span>
				<div className={styles.blob1}></div>
				<div className={styles.blob2}></div>
			</div>
		</>
	);
};
