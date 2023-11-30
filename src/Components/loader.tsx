import styles from "../styles/loader.module.scss";
const Loader = () => {
	return (
		<>
			<div className={styles.centered}>
				<h1>Building webpage</h1>
				<div className={styles.blob1}></div>
				<div className={styles.blob2}></div>
			</div>
		</>
	);
};

export default Loader;
