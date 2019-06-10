import React from "react";
import {connectTranslate, WithTranslateProps} from '../../utils/translate';

class ContactInternal extends React.Component<WithTranslateProps> {
  render() {
    return (
      <div>
        {this.props.t('Contact')}
      </div>
    )
  }
}

export const Contact = connectTranslate(ContactInternal);
