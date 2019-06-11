import { connect } from 'react-redux'
import {Profit} from '../components/profit/Profit';

const getProfit = (trades: any) => {
  return trades.reduce((prev: any, curr: any) => {
    return curr + prev.profit;
  }, 0)
};

const mapStateToProps = (state: any) => ({
  profit: getProfit(state.trades)
});

const mapDispatchToProps = (dispatch: any) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profit);
