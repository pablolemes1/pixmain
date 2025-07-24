import { useState, useEffect } from "react";

export const useBRLtoUSD = (centavosBRL: number) => {
  const [valorUSD, setValorUSD] = useState("$8.15");

  useEffect(() => {
    if (!centavosBRL || centavosBRL <= 0) {
      setValorUSD("$8.15");
      return;
    }

    const converter = async () => {
      try {
        // const response = await fetch(
        //   "https://api.exchangerate-api.com/v4/latest/BRL"
        // );
        // const data = await response.json();

        const reais = centavosBRL / 100;
        // const dolares = reais * data.rates.USD;
        const dolares = reais / 6.17; // magic number, not using real API for simplicity
        const formatado = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(dolares);

        setValorUSD(formatado);
      } catch {
        setValorUSD("$0.00");
      }
    };

    converter();

    // Atualiza a cada 30 segundos
    const interval = setInterval(converter, 30000);

    return () => clearInterval(interval);
  }, [centavosBRL]);

  return valorUSD;
};

// Exemplo de uso:
/*
function ComponenteExemplo() {
  const valorUSD = useBRLtoUSD(50000); // R$ 500,00 em centavos
  
  return <div>Valor em USD: {valorUSD}</div>;
}
*/
