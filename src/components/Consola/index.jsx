import Footer from "../Footer";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import React, { useState } from "react";
import { evaludateCode } from "../../api/code";
import Button from "react-bootstrap/Button";

const Consola = () => {
  const [result, setResult] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = async () => {
    try {
      const evaluated = await evaludateCode(code);
      setResult(evaluated.result);
    } catch (err) {
      setResult(err.message);
    }
  };

  return (
    <div>
      <FloatingLabel controlId="floatingTextarea2" className="container">
        <Form.Control
          as="textarea"
          onChange={(e) => setCode(e.target.value)}
          placeholder="Insert code here"
          style={{
            height: "250px",
            width: "100%",
            marginTop: "20px",
            marginBottom: "20px",
            backgroundColor: "#1e1e1e",
            color: "white",
            border: "1px solid #1e1e1e",
            borderRadius: "5px",
            fontSize: "20px",
            fontFamily: "monospace",
            fontWeight: "bold",
            padding: "10px",
            resize: "none",
            outline: "none",
            boxShadow: "0 0 10px #1e1e1e",
          }}
        />
      </FloatingLabel>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="primary"
          onClick={handleSubmit}
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            backgroundColor: "#1e1e1e",
            color: "white",
            border: "1px solid #1e1e1e",
            borderRadius: "5px",
            fontSize: "20px",
            fontFamily: "monospace",
            fontWeight: "bold",
            padding: "10px",
            resize: "none",
            outline: "none",
            boxShadow: "0 0 10px #1e1e1e",
          }}
        >
          Ver Resultado
        </Button>
      </div>
      <div
        className="result"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h3>Resultado</h3>
        <p style={{
            marginTop: "20px",
            marginBottom: "20px",
            backgroundColor: "#1e1e1e",
            color: "white",
            border: "1px solid #1e1e1e",
            borderRadius: "5px",
            fontSize: "20px",
            fontFamily: "monospace",
            fontWeight: "bold",
            padding: "10px",
            resize: "none",
            outline: "none",
            boxShadow: "0 0 10px #1e1e1e",
        }}>{result}</p>
      </div>
      <Footer />
    </div>
  );
};

export default Consola;
