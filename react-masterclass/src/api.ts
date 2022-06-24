const BASE_URL = `https://api.coinpaprika.com/v1`

export function fetchCoins() {
    return fetch(`${BASE_URL}/coins`).then(resp => resp.json());
}

export function fetchCoinInfo(coinId: string) {
    return fetch(`${BASE_URL}/coins/${coinId}`).then(resp => resp.json());
}

export function fetchTickers(coinId: string) {
    return fetch(`${BASE_URL}/tickers/${coinId}`).then(resp => resp.json());
}

export function fetchCoinHistory(coinId: string) {
    const endDate = Date.now() / 1000 // mil to sec
    const startDate = endDate - (60 * 60 * 24 * 7)
    return fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`)
        .then(resp => resp.json());
}