import React, { useContext } from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPizzaSlice } from "@fortawesome/free-solid-svg-icons"; // Importa el ícono de pizza
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { formatearNumeroConMiles } from "../utils/format";
import { capitalizarPrimeraLetra } from "../utils/mayuscula";
import { CardContext } from "../context/CardContext";

const Pizza = () => {
  // // guarda los datos traidos de la API[
  // const [info, setInfo] = useState({
  //   ingredients: [],
  // });

  // Obtener las pizzas del contexto
  const { infopizza } = useContext(CardContext);

  // const [pizzasMenu, setPizasMenu] = useState(pizzas);

  return (
    <div key={infopizza.id} className="Pizza_jsx">
      <Card className="estilo_pizza_zoom">
        <Card.Img src={infopizza.img} />
        <Card.Body>
          <Card.Title className="Titulo_card">
            {capitalizarPrimeraLetra(infopizza.name)}
          </Card.Title>

          <ListGroup.Item
            className="Inrgedientes_text"
            style={{ textAlign: "left" }}
          >
            {infopizza.desc}
          </ListGroup.Item>

          <ListGroup.Item className="Inrgedientes_text4">
            <FontAwesomeIcon
              icon={faPizzaSlice}
              style={{
                marginRight: "5px",
                color: "rgb(82, 26, 17)",
                fontSize: "20px",
                rotate: "-45deg",
                margin: "10px",
              }}
            />
            Ingredientes:
          </ListGroup.Item>

          <ListGroup.Item className="Inrgedientes_text">
            <ul style={{ textAlign: "left" }}>
              {infopizza.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </ListGroup.Item>

          <ListGroup.Item>
            <ListGroup.Item className="Precio_card">
              Precio: ${formatearNumeroConMiles(infopizza.precio)}
            </ListGroup.Item>
          </ListGroup.Item>

          <div className="botones_card">
            <Button className="boton_compra1" variant="primary">
              Ver Más
              <FontAwesomeIcon
                icon={faEye}
                style={{
                  marginLeft: "5px",
                  color: "rgb(33, 37, 41)",
                }}
              />
            </Button>
            <Button
              className="boton_compra2"
              variant="primary"
              style={{ marginLeft: "5px" }}
            >
              Añadir
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ marginLeft: "5px", color: "white" }}
              />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Pizza;