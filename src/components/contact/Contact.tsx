import React from 'react';
import {connectTranslate, WithTranslateProps} from '../../utils/translate';
import ProfitCount from '../../containers/profitCont';

class ContactInternal extends React.Component<WithTranslateProps> {
  render() {
    // console.log(ProfitCount);
    return (
      <div>
        {this.props.t('Contact')}
        <ProfitCount />
      </div>
    )
  }
}

export const Contact = connectTranslate(ContactInternal);
