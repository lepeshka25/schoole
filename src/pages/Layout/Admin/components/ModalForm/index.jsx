// import React from 'react';
// import cs from './style.module.scss'
// import {useForm} from "react-hook-form";
//
// const ModalForm = () => {
// 	const {register, setError, handleSubmit, formState: {errors}, reset} = useForm();
//
// 	const groupList = ['A', 'B', 'C', 'D']
// 	console.log(errors)
//
// 	const onSubmit = (data, e) => {
// 		e.preventDefault()
// 		console.log(data)
// 		if (groupList.includes(data.group.toUpperCase())) {
// 			if (data.class >= 1 && data.class <= 11) {
// 				// addNewStudent(state.Register.uid , id , data)
// 				// 	.then(() => {
// 				// 		let send = {...state.Register.class[id].student}
// 				// 		send[Math.floor(Math.random() * 100)] = data
// 				// 		dispatch(updateStudent(send, id))
// 				// 	})
// 				reset()
// 			} else {
// 				setError('class', {type: 'custom', message: 'есть классы с 1 до 11'});
// 			}
// 		} else {
// 			setError('group', {type: 'custom', message: 'есть группы только (A , B , C ,D)'});
// 		}
// 	}
//
// 	return (
// 		<div onClick={() => console.log('close modal')} className={cs.form}>
// 			<form
// 				onClick={e => e.stopPropagation()}
// 				onSubmit={handleSubmit(onSubmit)}
// 				className={cs.form_container}
// 			>
//
// 				<div className={cs.container_title}>
// 					<h2>Создать класс</h2>
// 				</div>
//
// 				<div className={cs.container_input}>
// 					<input
// 						placeholder={'name'}
// 						name={'name'}
// 						{...register("name", {required: 'Ошибка! заполните поле !'})}
// 					/>
// 					<p>{errors?.name?.message}</p>
// 				</div>
//
// 				<div className={cs.container_input}>
// 					<input
// 						placeholder={'lastName'}
// 						name={'lastName'}
// 						{...register("lastName", {required: 'Ошибка! заполните поле !'})}
// 					/>
// 					<p>{errors?.lastName?.message}</p>
// 				</div>
//
// 				<div className={cs.container_input}>
// 					<input
// 						placeholder={'URL'}
// 						name={'URL'}
// 						{...register("URL", {required: 'Ошибка! заполните поле !'})}
// 					/>
// 					<p>{errors?.URL?.message}</p>
// 				</div>
//
// 				<div className={cs.container_input}>
// 					<input
// 						type={'number'}
// 						placeholder={'age'}
// 						name={'age'}
// 						{...register("age", {required: 'Ошибка! заполните поле !'})}
// 					/>
// 					<p>{errors?.age?.message}</p>
// 				</div>
//
// 				<div className={cs.container_input}>
// 					<input
// 						placeholder={'group'}
// 						name={'group'}
// 						{...register("group", {required: 'Ошибка! заполните поле !'})}
// 					/>
// 					<p>{errors?.group?.message}</p>
// 				</div>
//
// 				<div className={cs.container_input}>
// 					<input
// 						type={'number'}
// 						placeholder={'class'}
// 						name={'class'}
// 						{...register("class", {required: 'Ошибка! заполните поле !'})}
// 					/>
// 					<p>{errors?.class?.message}</p>
// 				</div>
//
// 				<button className={cs.submit} type={"submit"}>submit</button>
// 			</form>
// 		</div>
// 	);
// };
//
// export default ModalForm;