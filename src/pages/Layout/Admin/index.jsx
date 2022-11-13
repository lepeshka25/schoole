import React from 'react';
import {BsPlusLg} from "react-icons/bs";
import cs from './style.module.scss'

const Admin = () => {
	return (
		<div className={cs.admin}>
			<div className={cs.container_table}>
				<table className={cs.table}>
					<thead>
						<tr>
							<th>Класс</th>
							<th>кол-во</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Alfreds Futterkiste</td>
							<td>Maria Anders</td>
						</tr>
					</tbody>
				</table>
			</div>

			<BsPlusLg className={cs.icon}/>
		</div>
	);
};

export default Admin;