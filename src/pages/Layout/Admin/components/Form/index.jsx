import React from 'react';
import {useForm} from "react-hook-form";
import {changeClassInfo, createClass} from "../../../../../API";
import {useLogin} from "../../../../../hooks/useLogin";
import cs from './style.module.scss'

const ModalForm = ({setStateModal}) => {
	const {data, setUpdate} = useLogin()
	const {register, handleSubmit, formState: {errors}, reset} = useForm();

	const onSubmit = (value, e) => {
		e.preventDefault()
		createClass(data?.uid, {name: value.class, num: 0})
			.then(res => {
				changeClassInfo(data?.uid, res?.data?.name, {name: value.class, num: 0, id: res?.data?.name})
					.then(res => setUpdate(state => !state))
			})
		reset()
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