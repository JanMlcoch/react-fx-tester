import React, {ReactElement} from 'react'
import './Trade.css'
import {connectTranslate, WithTranslateProps} from '../../utils/translate'
import {ITrade} from '../trader/Trader';

interface TradeProps extends WithTranslateProps {
  onClose: (id: number) => void;
  trade: ITrade
}

class TradeInternal extends React.Component<TradeProps> {

	closeTrade = (): void => {
		this.props.onClose(this.props.trade.id)
	};

	render(): ReactElement {
		const {trade, t} = this.props;
		return (
			<div className={`row ${trade.closePrice && 'trade--closed'}`}>
				<div className="col">{trade.type}</div>
				<div className="col">{trade.openPrice && trade.openPrice.toFixed(4)}</div>
				<div className="col">
					{trade.closePrice && `-> ${trade.closePrice.toFixed(4)}`}
					{!trade.closePrice && <button onClick={this.closeTrade}>{t('Zavřít')}</button>}
				</div>
			</div>
		)
	}
}

export const Trade = connectTranslate(TradeInternal);
