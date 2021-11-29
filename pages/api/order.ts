import type { NextApiHandler } from 'next';

type OrderResponseData = {
  [key: string]: any;
}

const OrderAPI : NextApiHandler<OrderResponseData> = (req, res) => {
  res.status(200).json(req.body)
}

export default OrderAPI;