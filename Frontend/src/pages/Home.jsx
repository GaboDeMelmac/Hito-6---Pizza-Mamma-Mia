import React, { useContext } from "react";
import { CardContext } from "../context/CardContext";
import CardPizza from "../components/CardPizza";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import "../assets/CSS/styles.css";

const Home = () => {
  // Obtener las pizzas del contexto
  const { info } = useContext(CardContext);

  return (
    <>
      <Header />
      <div className="Home_page">
        <Row>
          {info.map((pizza) => (
            <Col key={pizza.id} md={4}>
              <CardPizza pizza={pizza} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Home;