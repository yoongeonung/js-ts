import styled from "styled-components";
import {Link} from "react-router-dom";
import {useQuery} from "react-query";
import {fetchCoins} from "../api";
import {Helmet} from "react-helmet";
import {useSetRecoilState} from "recoil";
import {isDarkAtom} from "../atoms";

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
  background-color: ${props => props.theme.cardBgColor};
  color: ${props => props.theme.textColor};
  margin-bottom: 10px;
  border-radius: 15px;
  border: 1px solid white;
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
    const {isLoading, data} = useQuery<CoinObj[]>(["allCoins"], fetchCoins);
    const setDarkAtom = useSetRecoilState(isDarkAtom);
    const toggleDarkAtom = () => setDarkAtom(current => !current)
    return (
        <Container>
            <Helmet>
                <title>Coins</title>
            </Helmet>
            <Header>
                <Title>Coins</Title>
                <button onClick={toggleDarkAtom}>Toggle button</button>
            </Header>
            {isLoading ? (
                <Loader>Loading...</Loader>
            ) : <CoinsList>
                {data?.slice(0, 50).map((coin) => (
                    <Coin key={coin.id}>
                        <Link to={`/${coin.id}`} state={{name: coin.name}}>
                            <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}/>
                            {coin.name} &rarr;
                        </Link>
                    </Coin>
                ))}
            </CoinsList>}
        </Container>
    )
}

export default Coins;