import React, { useState } from 'react';

import { Row, Col, Typography, Avatar, Card, Select } from "antd";
import moment from "moment";

import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../../services/cryptoApi";

import Loader from "../Loader/Loader";

const { Text, Title } = Typography;
const { Option } = Select;

const defaultNewsImageUrl = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';


function News({ simplified }) {

    const [newsCategory, setNewsCategory] = useState("Cryptocurrency");

    const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery(
        {
            newsCategory: newsCategory,
            count: simplified ? 6 : 30
        }
    );

    const { data: cryptosList } = useGetCryptosQuery(100);

    if (isFetching) return <Loader />;


    return (
        <Row gutter={[24, 24]}>
            {!simplified && (
                <Col span={24}>
                    <Select
                        showSearch
                        className="select-news"
                        placeholder="Select a crypto"
                        optionFilterPop="children"
                        onChange={(value) => setNewsCategory(value)}
                        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Option value="cryptocurrency">Cryptocurrency</Option>
                        {cryptosList?.data?.coins?.map((currency) => (
                            <Option value={currency.name}>{currency.name}</Option>
                        ))}
                    </Select>
                </Col>
            )}
            {cryptoNews.value.map((news, index) => (
                <Col sm={24} md={12} lg={8} key={index}>
                    <Card className="news-card" hoverable>
                        <a href={news.url} target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                                <Title className="news-title" level={4}>{news.name}</Title>
                                <img src={news.image?.thumbnail?.contentUrl || defaultNewsImageUrl} alt="news" />
                            </div>
                            <p>
                                {news.description > 100 ? news.description.substring(0, 100) + '...' : news.description}
                            </p>
                            <div className="provider-container">
                                <Avatar src={news?.provider[0]?.image?.thumbnail?.contentUrl || defaultNewsImageUrl} />
                                <Text className="provider-name">{news.provider[0]?.name}</Text>
                            </div>
                            <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default News;
