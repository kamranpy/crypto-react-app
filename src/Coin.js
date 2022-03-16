import React from "react";
import "./Coin.css";

const Coin = ({ name, image, symbol, price, volume, price_change, market_cap }) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
            <img src={image} alt='Crypto' />
            <h1>{name}</h1>
            <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
            <p className="coin-price">${price}</p>
            <p className="coin-volume">Vol: ${volume.toLocaleString()}</p>
            {price_change < 0 ? (
                <p className="price-change red">{price_change.toFixed(2)}%</p>
            ) : (<p className="price-change green">{price_change.toFixed(2)}%</p>)
            }

        <p className="coin-marketcap">
            Mkt Cap: ${market_cap.toLocaleString()}
        </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
