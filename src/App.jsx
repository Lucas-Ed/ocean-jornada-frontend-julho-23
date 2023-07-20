
import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import "./App.css";

function App() {
  const [itens, setItens] = useState([]);

  async function carregarDadosApi() {
    // console.log("Iniciei a função carregarDadosApi");
    const apiUrl = "https://ocean-api-itens.onrender.com/itens";

    const response = await fetch(apiUrl);
    const body = await response.json();

    setItens(body);
      // carregarDadosApi(); 
  }

  useEffect(function () {
    carregarDadosApi();
             // itens.push(...body);
    // console.log("body", body);
    // console.log("itens atualizados", itens);
  }, []);
  // console.log("Iniciei o componente App");

  // console.log("itens", itens);
  return (
    <>
      <div className="cards-list">
        {itens.map(function (item, index) {
          return <Card key={index} item={item} />;
        })}
                {/* <Card item={item1} />
        <Card item={item2} />
        <Card item={item3} /> */}
      </div>
    </>
  );
}

export default App;