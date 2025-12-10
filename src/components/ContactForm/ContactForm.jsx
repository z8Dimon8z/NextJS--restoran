'use client';
import { useState } from 'react';
import toast from 'react-hot-toast';

import Form from 'next/form';
import styles from './style.module.css';

const ContactForm = () => {
	const [status, setStatus] = useState({ type: 'idle', message: '' });

	// toast('Сообщение успешно отправлено!');
	// toast.success('Successfully created!');
	// toast.error('This is an error!');

	// Функция обработчик отправки формы
	const handleSubmit = async (event) => {
		event.preventDefault();
		setStatus({ type: 'loading', message: 'Отправляем сообщение...' });

		try {
			// Получаем данные из формы
			const form = event.currentTarget;
			const formData = new FormData(form);
			const payload = Object.fromEntries(formData.entries());

			// POST запрос на внутренний API
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			});

			if (!response.ok) {
				const errorData = await response.json().catch(() => null);
				throw new Error(
					errorData?.message ?? 'Не удалось отправить сообщение',
				);
			}

			// Ответ от API
			const data = await response.json();
			console.log(data);

			setStatus({
				type: 'success',
				message: 'Сообщение успешно отправлено!',
			});
			toast.success('Сообщение успешно отправлено!');
			form.reset();

		} catch (error) {
			setStatus({
				type: 'error',
				message:
					error.message || 'Попробуйте отправить сообщение позже.',
			});
			toast.error('Попробуйте отправить сообщение позже.');
		}
	};

	let statusClass = '';
	if (status.type === 'success') {
		statusClass = styles['contact-form__status--success'];
	} else if (status.type === 'error') {
		statusClass = styles['contact-form__status--error'];
	}

	return (

		<div className="container">
			<div className="book">
				<div className="book-form">
					<div className="book-form__header">
						<h1 className="book-form__title">Забронировать столик</h1>
						<p className="book-form__subtitle">
							В нашем ресторане царит непринужденная и уютная атмосфера. Чтобы отразить эту атмосферу, мы
							придерживаемся формального
							стиля одежды.
						</p>

						{/* <div className="book-alert book-alert--success">
							<strong className="book-alert__title">Бронь подтверждена</strong>
							<p className="book-alert__text">Мы закрепили за вами столик и отправили подтверждение на почту и в Telegram.</p>
						</div>

						<div className="book-alert book-alert--error">
							<strong className="book-alert__title">Ошибка бронирования</strong>
							<p className="book-alert__text">Не удалось сохранить запрос. Проверьте данные или позвоните администратору.</p>
						</div> */}
					</div>
					<Form className="book-form__body" onSubmit={handleSubmit}>


						{status.type !== 'idle' && (
							<p
								className={`${styles['contact-form__status']} ${statusClass}`}
							>
								{status.message}
							</p>
						)}

						<label className="book-form__field">
							<span className="book-form__label">Имя</span>
							<input className="book-form__input" type="text" name="name" placeholder="Имя" />
						</label>

						<label className="book-form__field">
							<span className="book-form__label">Телефон / Email / или @никнейм в Telegram</span>
							<input className="book-form__input" type="text" name="contact" placeholder="Контактные данные" />
						</label>

						<label className="book-form__field">
							<span className="book-form__label">Количество гостей</span>
							<input className="book-form__input" type="number" min="1" max="12" name="guests" />
						</label>

						<div className="book-form__row">
							<label className="book-form__field">
								<span className="book-form__label">Дата</span>
								<input className="book-form__input" type="date" name="date" placeholder="19.08.22" />
							</label>
							<label className="book-form__field">
								<span className="book-form__label">Время</span>
								<input className="book-form__input" type="time" name="time" placeholder="6:00pm" />
							</label>
						</div>
						<button
							type="submit"
							disabled={status.type === 'loading'}
							className="book-form__submit"
						>
							{status.type === 'loading' ? 'Отправляем...' : 'Отправить'}
						</button>

					</Form>
				</div>
			</div >
		</div >
	);
};

export default ContactForm;
