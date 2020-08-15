import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import "@servicenow/now-template-card";
import styles from './styles.scss';
import {cardDatas} from "./data";

const view = () => {
	return (
		<div className="card-list">
		{cardDatas.map(card => (
				<now-template-card-assist
				 	tagline={card.tagline}
				 	actions={card.actions}
				 	heading={card.heading}
				 	content={card.content}
					footer-content={card.footerContent}
					className="card"
				/>
			))}
		</div>
	);
};

createCustomElement('x-523869-card-list', {
	renderer: {type: snabbdom},
	view,
	styles
});
