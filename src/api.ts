const BASE_URL = `https://api.coinpaprika.com/v1`;
const COIN_URL = `https://ohlcv-api.nomadcoders.workers.dev`;

export function fetchCoins() {
  // return fetch(`${BASE_URL}`).then((response) => response.json());
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${COIN_URL}/${coinId}`).then((response) => response.json());
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinHistory(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 2;
  return fetch(
    `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
  ).then((response) => response.json());
}