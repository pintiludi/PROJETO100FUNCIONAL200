
export default function Home() {
  const comprar = async (valor) => {
    const simbolo = localStorage.getItem("token") || "TESTE123";
    const resposta = await fetch("/api/gerar-pagamento", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ valencia: valor, simbolo }),
    });
    const json = await resposta.json();
    if (json.link) {
      window.open(json.link, "_blank");
    } else {
      alert("Erro ao gerar pagamento: " + json.error);
    }
  };

  return (
    <div style={{ background: "#111", color: "#fff", padding: "2rem", fontFamily: "Arial" }}>
      <h1>🎰 Cassino Pix FIXO</h1>
      <p><strong>Seu Token:</strong> TESTE123</p>
      <p><strong>Saldo:</strong> 0 pontos</p>
      <p>Escolha um valor para comprar pontos:</p>
      {[1, 2, 5, 10, 20, 50, 100].map(v => (
        <button key={v} style={{ margin: "5px", padding: "10px" }} onClick={() => comprar(v)}>
          💵 R${v}
        </button>
      ))}
    </div>
  );
            }
