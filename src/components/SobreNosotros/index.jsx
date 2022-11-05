//import Card from "react-bootstrap/Card";
//import Col from "react-bootstrap/Col";
//import Row from "react-bootstrap/Row";
import styled from "styled-components";
import Footer from "../Footer";
import "../../App.css";

const SobreNosotros = () => {
  return (
    <>
      <CardFlex>
        <div class="card-group container">
          <div class="card">
            <img src="https://previews.123rf.com/images/yupiramos/yupiramos1705/yupiramos170514531/77987158-dise%C3%B1o-gr%C3%A1fico-del-ejemplo-del-vector-del-icono-del-perfil-del-hombre-joven.jpg" class="card-img-top" alt="USUARIO" />
            <div class="card-body">
              <h5 class="card-title">Daniel Marcel</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                ipsam, dicta hic tempora delectus rem veritatis non et, illo
                quibusdam, aspernatur reiciendis corrupti nam assumenda.
              </p>
              <p class="card-text">
                <small class="text-muted">Front-End Developer</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img src="https://previews.123rf.com/images/yupiramos/yupiramos1705/yupiramos170514531/77987158-dise%C3%B1o-gr%C3%A1fico-del-ejemplo-del-vector-del-icono-del-perfil-del-hombre-joven.jpg" class="card-img-top" alt="USUARIO" />
            <div class="card-body">
              <h5 class="card-title">Dario Roman</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                ipsam, dicta hic tempora delectus rem veritatis non et, illo
                quibusdam, aspernatur reiciendis corrupti nam assumenda.
              </p>
              <p class="card-text">
                <small class="text-muted">Back-End Developer</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img src="https://previews.123rf.com/images/yupiramos/yupiramos1705/yupiramos170514531/77987158-dise%C3%B1o-gr%C3%A1fico-del-ejemplo-del-vector-del-icono-del-perfil-del-hombre-joven.jpg" class="card-img-top" alt="USUARIO" />
            <div class="card-body">
              <h5 class="card-title">Felipe Cid</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                ipsam, dicta hic tempora delectus rem veritatis non et, illo
                quibusdam, aspernatur reiciendis corrupti nam assumenda.
              </p>
              <p class="card-text">
                <small class="text-muted">Front-End Developer</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img src="https://previews.123rf.com/images/yupiramos/yupiramos1705/yupiramos170514531/77987158-dise%C3%B1o-gr%C3%A1fico-del-ejemplo-del-vector-del-icono-del-perfil-del-hombre-joven.jpg" class="card-img-top" alt="USUARIO" />
            <div class="card-body">
              <h5 class="card-title">Joaquin Correa</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                ipsam, dicta hic tempora delectus rem veritatis non et, illo
                quibusdam, aspernatur reiciendis corrupti nam assumenda.
              </p>
              <p class="card-text">
                <small class="text-muted">UX/UI</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img src="https://previews.123rf.com/images/jemastock/jemastock1712/jemastock171209574/91945368-dise%C3%B1o-gr%C3%A1fico-del-ejemplo-del-vector-del-icono-del-avatar-del-perfil-de-la-mujer-de-negocios.jpg" class="card-img-top" alt="USUARIO" />
            <div class="card-body">
              <h5 class="card-title">Javiera Tello</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                ipsam, dicta hic tempora delectus rem veritatis non et, illo
                quibusdam, aspernatur reiciendis corrupti nam assumenda.
              </p>
              <p class="card-text">
                <small class="text-muted">UX/UI</small>
              </p>
            </div>
          </div>
        </div>
      </CardFlex>
      <Footer />
    </>
  );
};

export default SobreNosotros;

const CardFlex = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;

  p{
    font-size: 1.2rem;
    color: black;
  }
`;
