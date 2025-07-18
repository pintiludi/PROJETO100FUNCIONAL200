
export default async function handler(req, res) {
  const { valor } = req.query;
  const token = "APP_USR-3292758186398540-071212-2fd4b8a392a9c7fb4de3b7b44416ee04-1809350050";

  const body = {
    transaction_amount: parseInt(valor),
    description: "Depósito Cassino Pix",
    payment_method_id: "pix",
    payer: { email: "comprador@mail.com" }
  };

  const mpRes = await fetch("https://api.mercadopago.com/v1/payments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(body)
  });

  const data = await mpRes.json();
  res.status(200).json(data);
}
