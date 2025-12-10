import nodemailer from 'nodemailer';

let transportOptions = {};

if (process.env.EMAIL_SERVICE === "YANDEX") {
	transportOptions = {
		host: 'smtp.yandex.ru',
		port: 465,
		secure: true,
		auth: {
			user: process.env.YANDEX_SMTP_USER,
			pass: process.env.YANDEX_SMTP_PASSWORD,
		},
	};
}

if (process.env.EMAIL_SERVICE === "GMAIL") {
	transportOptions = {
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: process.env.GMAIL_SMTP_USER,
			pass: process.env.GMAIL_SMTP_PASSWORD,
		},
	};
}

const transporter = nodemailer.createTransport(transportOptions);

export default async function sendContactEmail({  name, contact, guests, date, time }) {
	const mailOptions = {
		from: `"${name}" <${process.env.YANDEX_SMTP_USER}>`,
		to: process.env.CONTACT_RECIPIENT ?? process.env.YANDEX_SMTP_USER,
		subject: 'Новая заявка с контактной формы',
		text: [
			`Имя: ${name}`,
			`Contact: ${contact}`,
			`Guests: ${guests || 'не указано'}`,
			`Date: ${date}`,
			`TIME: ${time}`,
			''
		].join('\n'),
		html: `
			<table style="width:100%;max-width:520px;font-family:Arial,sans-serif;border-collapse:collapse;">
				<tr>
					<td style="padding:16px 20px;background-color:#02141a;color:#d7f2eb;border-bottom:1px solid rgba(255,255,255,0.08);">
						<h2 style="margin:0;font-size:20px;">Новая заявка с сайта</h2>
					</td>
				</tr>
				<tr>
					<td style="padding:20px;background-color:#031d24;color:#f1f9f6;">
						<p style="margin:0 0 12px;"><strong>Имя:</strong> ${name}</p>
						<p style="margin:0 0 12px;"><strong>Контакты:</strong> ${contact}</p>
						<p style="margin:0 0 12px;"><strong>Гости:</strong> ${guests}</p>
						<p style="margin:0 0 12px;"><strong>Дата:</strong> ${date}</p>
						<p style="margin:0 0 12px;"><strong>Время:</strong> ${time}</p>
					</td>
				</tr>
			</table>
		`,
	};

	const info = await transporter.sendMail(mailOptions);
	console.log(info);
}
