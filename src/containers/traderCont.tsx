import {connect} from 'react-redux'
import {addTrade, closeTrade} from '../actions'
import {Trader, TradeType} from '../components/trader/Trader';

const mapStateToProps = (state: any) => ({
  trades: state.trades,
  actualRate: state.rate.rate
});

const mapDispatchToProps = (dispatch: any) => ({
  addTrade: (newTrade: { openPrice: number, type: TradeType }) => dispatch(addTrade(newTrade)),
  closeTrade: (tradeId: number, closePrice: number) => dispatch(closeTrade(tradeId, closePrice)),
});

export const TraderCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(Trader);
