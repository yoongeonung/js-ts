import {Link, Outlet, Route, Routes, useLocation, useParams} from "react-router-dom";
import styled from "styled-components";
import {useEffect, useState} from "react";
import Price from "./Price";
import Chart from "./Chart";

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

const Title = styled.h1`
  font-size: 48px;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

interface RouteState {
    name: string;
}

interface InfoData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    description: string;
    message: string;
    open_source: boolean;
    started_at: string;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    first_data_at: string;
    last_data_a: string;
}

interface PriceData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
        "USD": {
            price: number;
            volume_24h: number;
            volume_24h_change_24h: number;
            market_cap: number;
            market_cap_change_24h: number;
            percent_change_15m: number;
            percent_change_30m: number;
            percent_change_1h: number;
            percent_change_6h: number;
            percent_change_12h: number;
            percent_change_24h: number;
            percent_change_7d: number;
            percent_change_30d: number;
            percent_change_1y: number;
            ath_price: number;
            ath_date: string;
            percent_from_price_ath: number;
        }
    };
}

const OverView = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

const OverViewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
  margin: 20px 0px;
`;

function Coin() {
    const [loading, setLoading] = useState(true)
    const [info, setInfo] = useState<InfoData>()
    const [priceInfo, setPriceInfo] = useState<PriceData>()
    const {coinId} = useParams();
    const location = useLocation();
    const state = location.state as RouteState;
    useEffect(() => {
        (async () => {
            const infoData = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();
            const priceData = await (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json();
            setInfo(infoData);
            setPriceInfo(priceData);
            setLoading(false)
        })()
    }, [coinId])
    return (
        <Container>
            <Header>
                <Title>{state?.name ? state?.name : (loading ? "Loading..." : info?.name)}</Title>
            </Header>
            {loading ? <Loader>Loading...</Loader> : (
                <>
                    <OverView>
                        <OverViewItem>
                            <span>Rank</span>
                            <span>{info?.rank}</span>
                        </OverViewItem>
                        <OverViewItem>
                            <span>Symbol</span>
                            <span>{info?.symbol}</span>
                        </OverViewItem>
                        <OverViewItem>
                            <span>OpenSource</span>
                            <span>{info?.open_source ? "YES" : "NO"}</span>
                        </OverViewItem>
                    </OverView>
                    <Description>
                        {info?.description}
                    </Description>
                    <OverView>
                        <OverViewItem>
                            <span>Total Suply:</span>
                            <span>{priceInfo?.total_supply}</span>
                        </OverViewItem>
                        <OverViewItem>
                            <span>Max Supply:</span>
                            <span>{priceInfo?.max_supply}</span>
                        </OverViewItem>
                    </OverView>
                    <Link to={`/${coinId}/price`} >PRICE</Link>
                    <Link to={`/${coinId}/chart`} >CHART</Link>
                    <Outlet />
                </>
            )}
        </Container>
    );
}

export default Coin;