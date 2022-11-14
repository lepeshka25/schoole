import React from 'react';
import {useForm} from "react-hook-form";
import {changeClassInfo, createClass} from "../../../../../API";
import {useLogin} from "../../../../../hooks/useLogin";
import cs from './style.module.scss'

const ModalForm = ({setStateModal}) => {
	const {data, setUpdate} = useLogin()
	const {register, setError ,handleSubmit, formState: {errors} , reset} = useForm();

	const groupList = ['A', 'B', 'C', 'D']

	const onSubmit = (value, e) => {
		e.preventDefault()

		if(groupList.includes(value.group.toUpperCase())){
			if(value.class >= 1 && value.class <= 11){
				createClass(data?.uid)
					.then(res => {
						changeClassInfo(data?.uid, res?.data?.name, {
							className: value.className,
							classGroup: value.class,
							group: value.group.toUpperCase(),
							num: 0,
							id: res?.data?.name
						})
							.then(res => setUpdate(state => !state))
					})
				reset()
			}else {
				setError('class', { type: 'custom', message: 'есть классы с 1 до 11' });
			}
		}else {
			setError('group', { type: 'custom', message: 'есть группы только (A , B , C ,D)' });
		}
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
						name={'className'}
						{...register("className", {required: 'Ошибка! заполните поле !'})}
					/>
					<p>{errors?.className?.message}</p>
				</div>

				<div className={cs.container_input}>
					<input
						type={'number'}
						placeholder={'class'}
						name={'class'}
						{...register("class", {required: 'Ошибка! заполните поле !'})}
					/>
					<p>{errors?.class?.message}</p>
				</div>

				<div className={cs.container_input}>
					<input
						type={'text'}
						placeholder={'group'}
						name={'group'}
						{...register("group", {required: 'Ошибка! заполните поле !'})}
					/>
					<p>{errors?.group?.message}</p>
				</div>

				<button className={cs.submit} type={"submit"}>submit</button>
			</form>
		</div>
	);
};

export default ModalForm;