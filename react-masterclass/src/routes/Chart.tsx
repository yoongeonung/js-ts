import {useOutletContext} from "react-router-dom";
import {useQuery} from "react-query";
import {fetchCoinHistory} from "../api";
import AspectChart from "react-apexcharts";
import {useRecoilValue} from "recoil";
import {isDarkAtom} from "../atoms";

interface ChartData {
    close: string;
    high: string;
    low: string;
    market_cap: number;
    open: string;
    time_close: number;
    time_open: number;
    volume: string;
}

interface ChartProp {
    coinId: string
}

function Chart() {
    const isDark = useRecoilValue(isDarkAtom);
    const {coinId} = useOutletContext<ChartProp>()
    const {
        isLoading,
        data
    } = useQuery<ChartData[]>(["chart", coinId], () => fetchCoinHistory(coinId), {refetchInterval: 3000})
    return (
        <>
            {
                isLoading ? "Loading..." :
                    (<AspectChart
                        type={"line"}
                        series={[
                            {
                                name: "sales",
                                data: (data?.map((price) => parseInt(price.close))) as number[],
                            }
                        ]}
                        options={{
                            theme: {
                                mode: isDark ? "dark" : "light"
                            },
                            chart: {
                                width: 500,
                                height: 500,
                                background: "transparent",
                                toolbar: {
                                    show: false,
                                }

                            },
                            grid: {
                                show: false,
                            },
                            xaxis: {
                                labels: {
                                    show: false
                                },
                                axisTicks: {
                                    show: false,
                                },
                                axisBorder: {
                                    show: false
                                }
                            },
                            yaxis: {
                                labels: {
                                    show: false
                                }
                            },

                        }}

                    />)
            }
        </>)
}

export default Chart;