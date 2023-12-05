import nodemailer from "nodemailer";

const sleep = (ms: number) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};
export const sendMail = async (
	subject: string,
	toEmail: string,
	otpText: string,
	htmlOrder: any
) => {
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.NODEMAILER_EMAIL,
			pass: process.env.NODEMAILER_PW,
		},
	});

	const mailOptions = {
		from: process.env.NODEMAILER_EMAIL,
		to: toEmail,
		subject: subject,
		text: otpText,
		html: htmlOrder,
	};

	await new Promise((resolve, reject) => {
		// send mail
		transporter.sendMail(
			mailOptions,
			(err: unknown, info: unknown) => {
				if (err) {
					console.error(err);
					reject(err);
				} else {
					console.log(info);
					resolve(info);
				}
			}
		);
	});
	return {};
};

export default sleep;
