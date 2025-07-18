export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("Recebeu webhook do Mercado Pago:", req.body);
    // Você pode salvar ou processar os dados aqui depois
    return res.status(200).send("Webhook recebido com sucesso");
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
