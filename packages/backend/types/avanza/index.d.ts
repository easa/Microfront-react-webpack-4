/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
declare module 'avanza' {
  class avanza {
    constructor();
    // FIXME: fix the datatypes that are unknown
    authenticate(credentials: Credentials): Promise<AuthenticateRespond>;
    disconnect(): Promise<unknown>;
    getPositions(): Promise<GetPositionsResult>;
    getOverview(): Promise<unknown>;
    getAccountOverview(accountId: string): Promise<unknown>;
    getDealsAndOrders(): Promise<GetDealsAndOrdersResult>;
    getTransactions(
      accountOrTransactionType: TransactionType,
      options: TransactionOptions
    ): Promise<unknown>;
    getWatchlists(): Promise<unknown>;
    addToWatchlist(instrumentId: string, watchlistId: string): Promise<unknown>;
    removeFromWatchlist(instrumentId: string, watchlistId: string): Promise<unknown>;
    getInstrument(instrumentType: InstrumentType, instrumentId: string): Promise<unknown>;
    getOrderbook(instrumentType: InstrumentType, orderbookId: string): Promise<GetOrderbookResult>;
    getOrderbooks(orderbookIds: string[]): Promise<unknown>;
    getChartdata(orderbookId: string, period: ChartDataPeriod): Promise<unknown>;
    getInspirationLists(): Promise<unknown>;
    getInspirationList(type: string): Promise<unknown>;

    subscribe(channel: 'quotes', ids: string, callback: Callback<Quote>): () => Unsubscribe;
    subscribe(channel: 'orderdepths', ids: string, callback: Callback<OrderType>): () => Unsubscribe;
    subscribe(channel: 'trades', ids: string, callback: Callback<Trades>): () => Unsubscribe;
    subscribe(channel: 'brokertradesummary', ids: string, callback: Callback<Brokertradesummary>): () => Unsubscribe;
    subscribe(channel: 'positions', ids: string, callback: Callback<unknown>): () => Unsubscribe;
    subscribe(channel: 'accounts', ids: string, callback: Callback<unknown>): () => Unsubscribe;
    subscribe(channel: 'orders', ids: string, callback: Callback<unknown>): () => Unsubscribe;
    subscribe(channel: 'deals', ids: string, callback: Callback<unknown>): () => Unsubscribe;
    placeOrder(options: placeOrderParameters): Promise<orderResult>;
    getOrder(instrumentType: InstrumentType, accountId: string, orderId: string): Promise<GetOrderResult>;
    editOrder(instrumentType: InstrumentType, orderId: string, options: placeOrderParameters): Promise<orderResult>;
    deleteOrder(accountId: string, orderId: string): Promise<orderResult>;
    search(searchQuery: string, type: InstrumentType): Promise<unknown>;
  }
  export = avanza;

  export type Unsubscribe = () => void;
  export interface Quote {
    orderbookId: string; // the id of the stock (number) in string
    buyPrice: number;
    sellPrice: number;
    spread: number;
    closingPrice: number;
    highestPrice: number;
    lowestPrice: number;
    lastPrice: number;
    change: number;
    changePercent: number;
    updated: number; // date
    volumeWeightedAveragePrice: number;
    totalVolumeTraded: number;
    totalValueTraded: number;
    lastUpdated: number; // date
    changePercentNumber: number;
    updatedDisplay: string; // hour:minute 10:03
  }

  export type Trades = {
    orderbookId: string;
    buyer: string;
    buyerName: string;
    seller: string;
    sellerName: string;
    dealTime: number; // date: 1630503001000
    price: number; // 0.178
    volume: number; //  6679
    matchedOnMarket: boolean;
    cancelled: boolean;
  };

  export type Broker = {
    brokerCode: string; // 'SHB'
    brokerName: string; // 'Svenska Handelsbanken AB'
    buyVolume: number;
    buyVolumeWeightedAveragePrice: number; // 0.176
    sellVolume: number; // 0
    sellVolumeWeightedAveragePrice: number; // it seems they also can be null
    netBuyVolume: number;
  };

  export type Brokertradesummary = {
    orderbookId: string;
    brokerTradeSummaries: Broker[];
  };

  export type TradeSide = { price: number; volume: number; volumePercent: number };
  export type Level = {
    buySide: TradeSide;
    sellSide: TradeSide;
  };

  export type OrderType = {
    orderbookId: string;
    receivedTime: string; // date '2021-09-01T15:57:09.427+0200'
    levels: Level[];
    totalLevel: Level;
    marketMakerLevelAsk: Level;
    marketMakerLevelBid: Level;
  };

  export type placeOrderParameters = {
    accountId: String; // ID of the account to trade on.
    orderbookId: String; // ID of the instrument to trade.
    orderType: 'SELL' | 'BUY'; // One of "BUY" or "SELL".
    price: Number; // The price limit of the order.
    validUntil: String; // A date on the form YYYY-MM-DD.
    volume: number; // How many securities to order
  };

  export interface orderResult {
    status: 'ERROR' | 'SUCCESS';
    messages: string[];
    orderId: string;
    requestId: string;
  }

  export type Callback<T> = (quote: T) => void;

  export interface Credentials {
    username: string;
    password: string;
    totp?: string;
    totpSecret: string;
  }

  export interface AuthenticateRespond {
    securityToken: string;
    authenticationSession: string;
    pushSubscriptionId: string;
    customerId: string;
  }
  export interface TwoFactorLoginResponse {
    export twoFactorLogin: {
      transactionId: string;
      method: 'TOTP';
    };
  }

  export interface Position {
    accountName: string;
    accountType: string;
    depositable: boolean;
    accountId: string;
    volume: number;
    averageAcquiredPrice: number;
    profitPercent: number;
    acquiredValue: number;
    profit: number;
    value: number;
    currency: string;
    orderbookId: string;
    tradable: boolean;
    lastPrice: number;
    lastPriceUpdated: string; // date
    change: number;
    changePercent: number;
    flagCode: string;
    name: string;
  }

  export interface InstrumentPosition {
    instrumentType: string;
    positions: Position[];
    totalValue: number;
    totalProfitValue: number;
    totalProfitPercent: number;
    todaysProfitPercent: number;
  }

  export interface GetPositionsResult {
    statusCode: number;
    instrumentPositions: InstrumentPosition[];
    totalBalance: number;
    totalProfitPercent: number;
    totalBuyingPower: number;
    totalOwnCapital: number;
    totalProfit: number;
  }
  export interface TransactionOptions {
    from: string; // YYYY - MM - DD
    to: string; // YYYY - MM - DD
    maxAmount: number;
    minAmount: number;
    orderbookId: string | string[];
  }

  interface GetDealsAndOrdersResult {
    orders: Orders[];
    deals: Deal[];
    accounts: Account[];
    reservedAmount: number;
  }

  interface Orders {
    transactionFees: TransactionFees;
    orderbook: Orderbook;
    account: Account;
    status: 'Inaktiv' | 'Felaktig' | 'Marknaden' | 'Delavslut' | string;
    statusDescription: string; // "Din order befinner sig på marknaden."
    rawStatus: string; // "ACTIVE"
    marketTransaction: boolean;
    validUntil: string; // "2021-09-20"
    openVolume: number | null;
    type: 'SELL' | 'BUY';
    price: number;
    deletable: boolean;
    orderId: string;
    volume: number;
    modifyAllowed: boolean;
    orderDateTime: string; // date
    sum: number;
  }

  interface Deal {
    account: Account;
    orderbook: Orderbook;
    marketTransaction: boolean;
    price: number;
    orderId: string;
    volume: number;
    dealTime: string; // date
    dealId: string;
    sum: number;
    type: 'SELL' | 'BUY';
  }

  interface TransactionFees {
    commission: number;
    marketFees: number;
    totalFees: number;
    totalSum: number;
    totalSumWithoutFees: number;
  }
  interface Orderbook {
    currency: string;
    flagCode: string;
    name: string;
    id: string;
    type: string; // "STOCK"
    marketPlace: string;
  }
  interface Account {
    type: string;
    name: string;
    totalBalance?: number;
    buyingPower?: number;
    id: string;
  }
  interface Customer {
    showCourtageClassInfoOnOrderPage: boolean;
    courtageClass: 'PRO5'
  }
  interface GetOrderResult {
    customer: Customer;
    account: Account;
    orderbook: OrderBookFull;
    firstTradableDate: string;
    lastTradableDate: string;
    untradableDates: string[]; // dates
    orderDepthLevels: Level[];
    marketMakerExpected: boolean;
    orderDepthReceivedTime: string; // date
    latestTrades: LatestTrades[];
    marketTrades: boolean;
    hasShortSellKnowledge: boolean;
    hasInstrumentKnowledge: boolean;
    brokerTradeSummary: {
      orderbookId: string;
      items: BrokerTradeSummaryItem[];
    };
    tickSizeRules: TickSizeRules[];
    hasInvestmentFees: {
      buy: boolean;
      sell: boolean;
    };
    order: {
      orderType: 'SELL' | 'BUY';
      price: number;
      validUntil: string; // date
      volume: number;
      orderCondition: string; // "NORMAL"
    }
  }
  interface OrderBookFull {
    buyPrice: number;
    sellPrice: number;
    spread: number;
    highestPrice: number;
    lowestPrice: number;
    lastPrice: number;
    lastPriceUpdated: string; // date
    change: number;
    changePercent: number;
    totalVolumeTraded: number;
    totalValueTraded: number;
    exchangeRate: number;
    positionVolume: number;
    currency: string;
    tradable: boolean;
    tradingUnit: number;
    volumeFactor: number;
    tickerSymbol: string;
    flagCode: string;
    name: string;
    id: string;
    type: string; // "STOCK"
  }
  interface LatestTrades {

    matchedOnMarket: boolean;
    seller: string;
    buyer: string;
    cancelled: boolean;
    price: number;
    volume: number;
    dealTime: string; // date

  }

  interface BrokerTradeSummaryItem {
    netBuyVolume: number;
    buyVolume: number;
    sellVolume: number;
    brokerCode: string;
  }

  export interface TickSizeRules {
    minPrice: number;
    maxPrice: number;
    tickSize: number;
  }

  interface GetOrderbookResult {
    customer: Customer;
    account: Account;
    orderbook: OrderBookFull;
    firstTradableDate: string; // "2021-09-22"
    lastTradableDate: string; // "2021-09-29"
    untradableDates: string[]; // ["2021-09-29"
    orderDepthLevels: OrderDepthLevel[];
    marketMakerExpected: boolean;
    orderDepthReceivedTime: string; // date "2021-09-22T11:42:53.419+0200"
    latestTrades: LatestTrades[];
    marketTrades: boolean;
    hasShortSellKnowledge: boolean;
    hasInstrumentKnowledge: boolean;
    brokerTradeSummary: {
      orderbookId: string;
      items: BrokerTradeSummaryItem[];
    };
    tickSizeRules: TickSizeRules[];
    hasInvestmentFees: {
      buy: boolean;
      sell: boolean;
    };
  }

  interface OrderDepthLevel {
    buy: {
      percent: number;
      price: number;
      volume: number;
    };
    sell: {
      percent: number;
      price: number;
      volume: number;
    }
  }

  type InstrumentType =
    'stock'
    | 'fund'
    | 'bond'
    | 'option'
    | 'future_forward'
    | 'certificate'
    | 'warrant'
    | 'exchange_traded_fund'
    | 'index'
    | 'premium_bond'
    | 'subscription_option'
    | 'equity_linked_bond'
    | 'convertible';

  type ChartDataPeriod =
    'today'
    | 'month'
    | 'one_month'
    | 'three_months'
    | 'one_week'
    | 'this_year'
    | 'one_year'
    | 'three_years'
    | 'five_years';

  type Marketing =
    'HIGHEST_RATED_FUNDS'
    | 'LOWEST_FEE_INDEX_FUNDS'
    | 'BEST_DEVELOPMENT_FUNDS_LAST_THREE_MONTHS'
    | 'MOST_OWNED_FUNDS';

  type TransactionType =
    'options'
    | 'forex'
    | 'deposit-withdraw'
    | 'buy-sell'
    | 'dividend'
    | 'interest'
    | 'foreign-tax';

  type Channels =
    'accounts'
    | 'quotes'
    | 'orderdepths'
    | 'trades'
    | 'brokertradesummary'
    | 'positions'
    | 'orders'
    | 'deals';

  type OrderType = 'BUY' | 'SELL';

  type ChartResolution =
    'QUARTER'
    | 'MONTH'
    | 'WEEK'
    | 'DAY'
    | 'HOUR'
    | 'THIRTY_MINUTES'
    | 'TEN_MINUTES'
    | 'FIVE_MINUTES'
    | 'TWO_MINUTES'
    | 'MINUTE';

  type ChartType = 'AREA' | 'CANDLESTICK';
}
