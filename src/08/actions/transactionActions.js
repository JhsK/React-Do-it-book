export const SET_TRANSACTION_LIST = "transaction/SET_TRANSACTION_LIST";

export function setTransactionsList(transactions) {
  return {
    type: SET_TRANSACTION_LIST,
    payload: transactions,
  };
}
