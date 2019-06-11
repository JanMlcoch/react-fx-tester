import { connect } from 'react-redux'
import {addTrade, closeTrade} from '../actions'
import {Trader} from '../components/trader/Trader';

const mapStateToProps = (state: any) => ({
  trades: state.trades
})

const mapDispatchToProps = (dispatch: any) => ({
  addTrade: (newTrade: any) => dispatch(addTrade(newTrade)),
  closeTrade: (tradeId: any) => dispatch(closeTrade(tradeId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trader);
