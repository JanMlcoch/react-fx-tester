import {ITrade, TradeType} from '../components/trader/Trader';

export const changeRate = (rate: number) => ({
  type: 'CHANGE_RATE',
  rate: rate
});

let _tradeIdIterator = 0;

const getNewTrade = ({openPrice, type}: { openPrice: number, type: TradeType }) => {
  const newTrade: ITrade = {
    id: _tradeIdIterator++,
    openPrice: openPrice,
    closePrice: undefined,
    type: type,
    time: new Date()
  };
  return newTrade
};

export const addTrade = (tradeData: { openPrice: number, type: TradeType }) => ({
  type: 'ADD_TRADE',
  newTrade: getNewTrade(tradeData)
});

export const closeTrade = (tradeId: number, closePrice: number) => ({
  type: 'CLOSE_TRADE',
  tradeId,
  closePrice
});
