import React from 'react';

const Card = ({cs, card , onDeletePeople , data , location, setStateChangePeopleModal}) => {

	return (
		<div className={cs.container_card}>

			{
				card?.map((item, index) => (
					<div key={index} className={cs.card}>
						<div className={cs.card_header}>
							<img src={item.url} alt=""/>
						</div>
						<div className={cs.card_body}>
							<p>
								<span>Имя:</span> <span>{item.name}</span>
							</p>
							<p>
								<span>Фамилия:</span> <span>{item.lastName}</span>
							</p>
							<p>
								<span>Возраст:</span> <span>{item.age} годиков</span>
							</p>
							<p>
								<span>Группа:</span> <span>{item.group}</span>
							</p>
							<p>
								<span>Класс:</span> <span>{item.classGroup}</span>
							</p>
						</div>
						<div className={cs.card_footer}>
							<button onClick={() => setStateChangePeopleModal({state: true, storage: item.id})}>изменить</button>
							<button onClick={() => onDeletePeople(data?.uid, location.state, item.id)}>удалить</button>
						</div>
					</div>
				))
			}

		</div>
	);
};

export default React.memo(Card);