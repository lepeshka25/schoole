import React from 'react';
import cs from './style.module.scss'

const InfoScholl = () => {
	return (
		<div className={cs.info}>
			<h1 className={cs.title}>Наша школа</h1>
			<div className={cs.frame1}>
				<div className={cs.left}>
					<img src="https://phonoteka.org/uploads/posts/2021-05/1620653291_19-phonoteka_org-p-amerikanskaya-shkola-fon-31.jpg" alt=""/>
				</div>
				<div className={cs.right}>
					<div className={cs.container}>
						<h1>А так же:</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore doloribus dolorum eos hic illo ipsam molestiae mollitia neque nulla odio perspiciatis, quasi quia ratione rerum saepe tenetur veniam voluptatum.
						</p>
					</div>
				</div>
			</div>
			<div className={cs.frame2}>
				<div className={cs.left}>
					<div className={cs.container}>
						<h1>А так же:</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore doloribus dolorum eos hic illo ipsam molestiae mollitia neque nulla odio perspiciatis, quasi quia ratione rerum saepe tenetur veniam voluptatum.
						</p>
					</div>
				</div>
				<div className={cs.right}>
					<img src="https://abrakadabra.fun/uploads/posts/2022-01/1642712857_7-abrakadabra-fun-p-shkolnii-koridor-estetika-19.jpg" alt=""/>
				</div>
			</div>
			<div className={cs.frame1}>
				<div className={cs.left}>
					<img src="https://celes.club/uploads/posts/2022-05/1653498404_49-celes-club-p-amerikanskaya-shkola-fon-krasivie-54.jpg" alt=""/>
				</div>
				<div className={cs.right}>
					<div className={cs.container}>
						<h1>А так же:</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore doloribus dolorum eos hic illo ipsam molestiae mollitia neque nulla odio perspiciatis, quasi quia ratione rerum saepe tenetur veniam voluptatum.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InfoScholl;