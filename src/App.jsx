import react from 'react';
import './app.css';

import { Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News } from "./components";

import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";


function App() {
  return (
    <>
      <div className="app">

        <div className="navbar">
          <Navbar />
        </div>

        <div className="main">
          <Layout style={{ padding: "0.5rem" }}>
            <Routes>

              <Route exact path="/" element={<Homepage />} />

              <Route exact path="/exchanges" element={<Exchanges />} />

              <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />

              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />

              <Route exact path="/news" element={<News />} />


            </Routes>
          </Layout>

          <div className="footer">
            <Typography.Title level={2} style={{ color: "white", textAlign: "center" }}>
              Cryptoverse <br />
              all rights reserved
            </Typography.Title>

            <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
            </Space>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
