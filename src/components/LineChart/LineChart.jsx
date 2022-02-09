import React from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title as ChartTitle,
    Tooltip,
    Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

import { Row, Col, Typography } from "antd";

const { Title } = Typography;

function LineChart(props) {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        ChartTitle,
        Tooltip,
        Legend
    );

    const coinPrice = [];
    const coinTimestamp = [];


    for (let i = 0; i < props.coinHistory?.data?.history?.length; i++) {
        coinPrice.push(props.coinHistory.data.history[i].price);
        coinTimestamp.push(new Date(props.coinHistory.data.history[i].timestamp * 1000).toLocaleDateString());
        if (i == 0)
            console.log("timestamp: " + props.coinHistory.data.history[i].timestamp);
    }

    console.log(coinTimestamp);

    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price in USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd'
            }
        ]
    }

    const options = {
        scales: {
            y: {
                ticks: {
                    beginAtZero: true
                }
            }
        }
    }

    return (
        <>
            <Row className="chart-header">
                <Title level={2} className="chart-title">{props.coinName} Price Chart</Title>
                <Col className="price-container">
                    <Title level={5} className="price-change">{props.coinHistory?.data?.change}%</Title>
                    <Title level={5} className="current-price">Current {props.coinName} Price: {props.coinPrice}</Title>
                </Col>
            </Row>

            <Line data={data} options={options} />
        </>
    )
}

export default LineChart;
