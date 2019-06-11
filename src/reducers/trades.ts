import {ITrade} from '../components/trader/Trader';

export const trades = (state: any = [], action: any) => {
  switch (action.type) {
    case 'ADD_TRADE':
      return [
        ...state,
        action.newTrade,
      ];
    case 'CLOSE_TRADE':
      return state.map((trade: ITrade) =>
        (trade.id === action.tradeId) ? {...trade, closePrice: action.closePrice} : trade
      );
    default:
      return state
  }
};
