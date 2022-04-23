import { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((resp) => resp.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins!({coins.length})</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select>
            {coins.map((coin) => {
              return (
                <option key={coin.id}>
                  {coin.name}({coin.symbol}) : ${coin.quotes.USD.price} USD
                </option>
              );
            })}
          </select>
        </div>
      )}
    </div>
  );
};

export default App;
