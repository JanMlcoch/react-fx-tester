import React from 'react'

const en = {
	['Zavřít']: 'Close'
};

const cz = {
	['Zavřít']: 'Zavřít'
};

const lang = 'en';
// const lang = 'cz';

export function connectTranslate(Component) {
	const translate = (term) => {
		const lib = lang.toString() === 'cz' ? cz : en;
		return lib[term] ? lib[term] : term;
	}

	return function(props) {
		return <Component t={translate} {...props} />
	}
}
