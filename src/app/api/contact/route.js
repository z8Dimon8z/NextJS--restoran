import sendContactEmail from '@lib/mail/sendContactEmail';
// import sendContactTelegram from '@lib/telegram/sendContactTelegram';
import { NextResponse } from 'next/server';

export async function POST(request) {
	try {
		// Получение данных
		const body = await request.json();
		const { name, contact, guests, date, time } = body ?? {};

		// Проверка данных
		if (!name || !contact) {
			return NextResponse.json(
				{
					success: false,
					message: 'Пожалуйста, заполните обязательные поля.',
				},
				{
					status: 400,
				},
			);
		}

		// Отправка email и telegram
		await Promise.all([
			sendContactEmail({ name, contact, guests, date, time }),
			// sendContactTelegram({ name, contact, guests, date, time }),
		]);

		// Ответ
		return NextResponse.json({ success: true });
	} catch (error) {
		console.error('Contact form error:', error);
		return NextResponse.json(
			{
				success: false,
				message: 'Не удалось отправить сообщение. Попробуйте позже.',
			},
			{ status: 500 },
		);
	}
}

export async function GET(request) {
	const { searchParams } = new URL(request.url);

	const name = searchParams.get('name') || 'Guest';
	const age = searchParams.get('age') || 'unknown';

	return NextResponse.json({
		message: `Hello, ${name}! Your age is ${age}.`,
	});
}
