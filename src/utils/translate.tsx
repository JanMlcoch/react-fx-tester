import React, {Component} from 'react'

export interface WithTranslateProps {
  t: (term: string) => string;
}

const en: {[key: string]: string} = {
  ['Zavřít']: 'Close'
};

const cz: {[key: string]: string} = {
  ['Zavřít']: 'Zavřít'
};

const lang = 'en';
// const lang = 'cz';

export const connectTranslate = <P extends WithTranslateProps>(
  Component: React.ComponentType<P>
): React.ComponentType<Pick<P, Exclude<keyof P, keyof WithTranslateProps>>> => (props: Pick<P, Exclude<keyof P, keyof WithTranslateProps>>) => {

  const translate = (term: string) => {
    const lib = lang.toString() === 'cz' ? cz : en;
    return lib[term] ? lib[term] : term;
  };

  return <Component {...props as P} t={translate} />;
};
