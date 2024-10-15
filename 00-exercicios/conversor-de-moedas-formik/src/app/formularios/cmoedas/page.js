'use client'

import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import { FaDollarSign, FaEuroSign, FaBitcoin } from 'react-icons/fa';
import { converterMoeda } from './conversorMoedas';
import './styles.css';

const ConversorMoedas = () => {
  const [resultado, setResultado] = useState(null);

  const handleSubmit = (values, { resetForm }) => {
    const resultadoConvertido = converterMoeda(values.valorReal, values.moeda);
    setResultado(resultadoConvertido);
  };

  const handleClear = (resetForm) => {
    setResultado(null);
    resetForm();
  };

  return (
    <Container className="conversor-container">
      <h2 className="text-center mb-4">Conversor de Moedas</h2>
      <Formik
        initialValues={{ valorReal: '', moeda: 'dolar' }}
        onSubmit={handleSubmit}
      >
        {({ resetForm }) => (
          <Form>
            <Form.Group controlId="formValorReal">
              <Form.Label>Valor em Reais (R$):</Form.Label>
              <Field
                name="valorReal"
                type="number"
                placeholder="Insira o valor em R$"
                className="form-control"
              />
            </Form.Group>

            <Form.Group controlId="formMoeda">
              <Form.Label>Selecione a moeda de conversão:</Form.Label>
              <Row>
                <Col xs={3} className="text-center">
                  <FaDollarSign size={30} />
                </Col>
                <Col xs={3} className="text-center">
                  <FaEuroSign size={30} />
                </Col>
                <Col xs={3} className="text-center">
                  <FaBitcoin size={30} />
                </Col>
                <Col xs={3}>
                  <Field as="select" name="moeda" className="form-control">
                    <option value="dolar">Dólar</option>
                    <option value="euro">Euro</option>
                    <option value="bitcoin">Bitcoin</option>
                  </Field>
                </Col>
              </Row>
            </Form.Group>

            <div className="text-center mt-3">
              <Button variant="primary" type="submit">
                Converter
              </Button>{' '}
              <Button
                variant="secondary"
                type="button"
                onClick={() => handleClear(resetForm)}
              >
                Limpar
              </Button>
            </div>

            {resultado !== null && (
              <div className="resultado-container text-center mt-4">
                <h3>Resultado: {resultado}</h3>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default ConversorMoedas;
