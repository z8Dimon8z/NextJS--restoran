const TELEGRAM_API_URL = 'https://api.telegram.org';

export default async function sendContactTelegram({ name, email, messenger, message }) {
	const botToken = process.env.TELEGRAM_BOT_TOKEN;
	const chatId = process.env.TELEGRAM_CHAT_ID;

	if (!botToken || !chatId) {
		throw new Error('TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID не заданы.');
	}

	const text = [
		'<b>Новая заявка с сайта</b>',
		'',
		`<b>Имя:</b> ${escapeHtml(name)}`,
		`<b>Email:</b> ${escapeHtml(email)}`,
		`<b>Telegram / WhatsApp:</b> ${escapeHtml(messenger || 'не указано')}`,
		'',
		`<b>Сообщение:</b>`,
		escapeHtml(message),
	].join('\n');

	const response = await fetch(
		`${TELEGRAM_API_URL}/bot${botToken}/sendMessage`,
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				chat_id: chatId,
				text: text,
				parse_mode: 'HTML',
			}),
		},
	);

	if (!response.ok) {
		const details = await response.json().catch(() => null);
		throw new Error(
			details?.description || 'Ошибка отправки сообщения в Telegram.',
		);
	}
}


function escapeHtml(value) {
	return String(value)
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#039;');
}
