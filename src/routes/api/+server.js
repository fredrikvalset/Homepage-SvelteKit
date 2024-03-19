import nodemailer from "nodemailer";
import { json } from "@sveltejs/kit";

import { EMAIL_USER, EMAIL_PASSWORD } from "$env/static/private";

export async function POST({ request }) {
	const { name, email, message } = await request.json();

	const transporter = nodemailer.createTransport({
		host: "smtp.zoho.eu",
		port: 587,
		secure: false,
		auth: {
			user: EMAIL_USER,
			pass: EMAIL_PASSWORD
		}
	});

	const mailOptions = {
		from: "form-submission@freval.no",
		to: "post@freval.no",
		subject: "FreVal: Contact Form Submission",
		text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
	};

	try {
		await transporter.sendMail(mailOptions);
		console.log("OK");
		return json({
			status: 200,
			body: "Email sent successfully!"
		});
	} catch (error) {
		console.log("NOT OK");
		return json({
			status: 500,
			body: "Error sending email."
		});
	}
}
