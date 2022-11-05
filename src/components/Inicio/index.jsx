import Carousel from "react-bootstrap/Carousel";
import Footer from "../Footer";

const Inicio = () => {
  return (
    <>
      <Carousel className="container">
        <Carousel.Item>
          <img
            style={{ width: "100%", height: "100%" }}
            className="d-block"
            src="https://fondosmil.com/fondo/54336.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%", height: "100%" }}
            className="d-block"
            src="https://fondosmil.com/fondo/54336.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%", height: "100%" }}
            className="d-block"
            src="https://fondosmil.com/fondo/54336.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Footer/>
    </>
  );
};

export default Inicio;
