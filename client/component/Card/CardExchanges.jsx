
import React from 'react';

import Card from './Card';

const CardExchanges = () => (
  //@todo move this to config to avoid conflicts
  <Card title="Exchanges">
    <a href="https://tradeogre.com/exchange/BTC-XGS" target="_blank" rel="nofollow noopener">TradeOgre</a><br />
    <a href="https://trade.birake.com/market/BIRAKE.XGS_BIRAKE.BTC" target="_blank" rel="nofollow noopener">Birake</a><br />
  </Card>
);

export default CardExchanges;
