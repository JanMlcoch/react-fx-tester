import React from 'react';
import {connectTranslate, WithTranslateProps} from '../../utils/translate';
import {ProfitCont} from '../../containers/profitCont';

class UserInternal extends React.Component<WithTranslateProps> {
  render() {
    return (
      <div>
        <h2>{this.props.t('User profit')}</h2>
        <ProfitCont/>
      </div>
    )
  }
}

export const User = connectTranslate(UserInternal);
