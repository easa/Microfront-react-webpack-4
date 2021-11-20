export type PV = { volume: number; price: number; };
export type NI = { name: string; id: string; };
export type Order = { orderId: string; type: string } & PV;
export type OrderDepth = { buy: PV; sell: PV };
export type Position = { profit: number } & PV;
