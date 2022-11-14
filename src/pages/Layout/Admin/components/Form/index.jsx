import React from 'react';
import {useForm} from "react-hook-form";
import cs from './style.module.scss'

const ModalForm = ({setStateModal}) => {
	const {register, setError, handleSubmit, formState: {errors}, reset} = useForm();

	const onSubmit = (data, e) => {
		e.preventDefault()

	}

	return (
		<div onClick={() => setStateModal(false)} className={cs.form}>
			<form
				onClick={e => e.stopPropagation()}
				onSubmit={handleSubmit(onSubmit)}
				className={cs.form_container}
			>

				<div className={cs.container_title}>
					<h2>Создать класс</h2>
				</div>

				<div className={cs.container_input}>
					<input
						type={'text'}
						placeholder={'Name class'}
						name={'class'}
						{...register("class", {required: 'Ошибка! заполните поле !'})}
					/>
					<p>{errors?.class?.message}</p>
				</div>

				<button className={cs.submit} type={"submit"}>submit</button>
			</form>
		</div>
	);
};

export default ModalForm;