import Footer from "../Footer";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import React, { useState } from 'react';
import { evaludateCode } from "../../api/code";
import Button from 'react-bootstrap/Button';

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
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                    as="textarea"
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Insert code here"
                    style={{ height: '100px' }}
                />
            </FloatingLabel>
            <Button variant="primary" onClick={handleSubmit}>Primary</Button>
            <div className="result">
                <h3>Result</h3>
                <p>{result}</p>
            </div>
            <Footer />
        </div>
    )
}

export default Consola;
