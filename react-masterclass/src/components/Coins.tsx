import styled from "styled-components";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.accentColor};
`;

const CoinsList = styled.ul`
`;

const Coin = styled.li`
  background-color: white;
  margin-bottom: 10px;
  border-radius: 15px;
  color: ${props => props.theme.bgColor};

  a {
    padding: 20px;
    transition: color .2s ease-in;
    display: flex;
    align-items: center;
  }

  &:hover {
    a {
      color: ${props => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

interface CoinObj {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
}

function Coins() {
    const [coins, setCoins] = useState<CoinObj[]>([]); //초기값을 항상 주는 습관
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        (async () => {
            const response = await fetch("https://api.coinpaprika.com/v1/coins");
            const json = await response.json();
            setCoins(json.slice(0, 100))
            setLoading(false)
        })()
    }, [])
    return (
        <Container>
            <Header>
                <Title>Coins</Title>
            </Header>
            {loading ? (
                <Loader>Loading...</Loader>
            ) : <CoinsList>
                {coins.map((coin) => (
                    <Coin key={coin.id}>
                        <Link to={`/${coin.id}`} state={{name:coin.name}}>
                            <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} />
                            {coin.name} &rarr;
                        </Link>
                    </Coin>
                ))}
            </CoinsList>}
        </Container>
    )
}

export default Coins;