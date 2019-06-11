const rate = (state: any = {rate: 0}, action: any) => {
  switch (action.type) {
    case 'CHANGE_RATE':
      return {
        rate: action.rate,
      }
    default:
      return state
  }
}

export default rate
