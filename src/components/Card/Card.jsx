/* eslint-disable react/prop-types */
import "./Card.css";

export default function Card(props) {
  // console.log(props);

  // eslint-disable-next-line react/prop-types
  const item = props.item; //Definir props como item

  // console.log(item);

  return (
    <div className="card">
      <h1>{item.nome}</h1>
      <img src={item.imagem} />
    </div>
  );
}
