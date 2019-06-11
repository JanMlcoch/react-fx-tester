export const changeRate = (rate: any) => ({
  type: 'CHANGE_RATE',
  rate: rate
});

export const addTrade = (newTrade: any) => ({
  type: 'ADD_TRADE',
  newTrade
});

export const closeTrade = (tradeId: any) => ({
  type: 'CLOSE_TRADE',
  tradeId
});
