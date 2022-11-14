import React from 'react';
import {useForm} from "react-hook-form";
import {changePeopleInfo, createPeople} from "../../../../../API";
import {useLogin} from "../../../../../hooks/useLogin";
import {useLocation} from "react-router-dom";
import cs from './style.module.scss'

const ModalForm = ({setStateChangePeopleModal, stateChangePeopleModal}) => {
	const {data, setUpdate} = useLogin()
	const location = useLocation()
	const {register, setError, handleSubmit, formState: {errors}, reset} = useForm();

	const groupList = ['A', 'B', 'C', 'D']

	const onSubmit = (value, e) => {
		e.preventDefault()

		if (groupList.includes(value.group.toUpperCase())) {
			if (value.class >= 1 && value.class <= 11) {
				changePeopleInfo(data?.uid, location.state, stateChangePeopleModal.storage, {
					name: value.name,
					lastName: value.lastName,
					age: value.age,
					classGroup: value.class,
					group: value.group.toUpperCase(),
					url: value.URL,
					id: stateChangePeopleModal.storage
				})
					.then(res => setUpdate(state => !state))
				reset()
			} else {
				setError('class', {type: 'custom', message: 'есть классы с 1 до 11'});
			}
		} else {
			setError('group', {type: 'custom', message: 'есть группы только (A , B , C ,D)'});
		}

	}

	return (
		<div onClick={() => setStateChangePeopleModal(false)} className={cs.form}>
			<form
				onClick={e => e.stopPropagation()}
				onSubmit={handleSubmit(onSubmit)}
				className={cs.form_container}
			>

				<div className={cs.container_title}>
					<h2>Изменить данные</h2>
				</div>

				<div className={cs.container_input}>
					<input
						placeholder={'name'}
						name={'name'}
						{...register("name", {required: 'Ошибка! заполните поле !'})}
					/>
					<p>{errors?.name?.message}</p>
				</div>

				<div className={cs.container_input}>
					<input
						placeholder={'lastName'}
						name={'lastName'}
						{...register("lastName", {required: 'Ошибка! заполните поле !'})}
					/>
					<p>{errors?.lastName?.message}</p>
				</div>

				<div className={cs.container_input}>
					<input
						placeholder={'URL'}
						name={'URL'}
						{...register("URL", {required: 'Ошибка! заполните поле !'})}
					/>
					<p>{errors?.URL?.message}</p>
				</div>

				<div className={cs.container_input}>
					<input
						type={'number'}
						placeholder={'age'}
						name={'age'}
						{...register("age", {required: 'Ошибка! заполните поле !'})}
					/>
					<p>{errors?.age?.message}</p>
				</div>

				<div className={cs.container_input}>
					<input
						placeholder={'group'}
						name={'group'}
						{...register("group", {required: 'Ошибка! заполните поле !'})}
					/>
					<p>{errors?.group?.message}</p>
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

				<button className={cs.submit} type={"submit"}>submit</button>
			</form>
		</div>
	);
};

export default ModalForm;