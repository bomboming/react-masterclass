const BASE_URL = `https://api.coinpaprika.com/v1`;
const COIN_URL = `https://ohlcv-api.nomadcoders.workers.dev?coinId=`;

export async function fetchCoins() {
  const response = await fetch(`${BASE_URL}/coins`);
  const json = await response.json();
  return json.slice(0, 20);
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinHistory(coinId: string) {
  // const endDate = Math.floor(Date.now() / 1000); 현재날짜
  // const startDate = endDate - 60 * 60 * 24 * 7 * 2;
  return fetch(
    `${COIN_URL}${coinId}`
    // `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
  ).then((response) => response.json());
}
