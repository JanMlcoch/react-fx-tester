const trades = (state: any = [], action: any) => {
  switch (action.type) {
    case 'ADD_TRADE':
      return [
        ...state,
        action.newTrade,
      ]
    case 'CLOSE_TRADE':
      return state.map((trade: any) =>
        (trade.id === action.tradeId) ? {...trade, closePrice: 1.555} : trade
      )
    default:
      return state
  }
}

export default trades
