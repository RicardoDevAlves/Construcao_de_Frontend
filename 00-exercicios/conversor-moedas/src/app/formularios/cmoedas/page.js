'use client'

import React, { useState } from 'react';
import { Button, Form, Row, Col, Image, Container } from 'react-bootstrap';
import { converterMoeda } from './conversorMoedas';
import './styles.css';

const ConversorMoedas = () => {
  const [valorReal, setValorReal] = useState('');
  const [moeda, setMoeda] = useState('dolar');
  const [resultado, setResultado] = useState(null);

  const handleConvert = () => {
    let taxa = 0;
    if (moeda === 'dolar') taxa = 0.20;
    else if (moeda === 'euro') taxa = 0.18;
    else if (moeda === 'bitcoin') taxa = 0.00003;

    setResultado(converterMoeda(valorReal, taxa));
  };

  const handleClear = () => {
    setValorReal('');
    setResultado(null);
    setMoeda('dolar');
  };

  return (
    <Container className="conversor-container">
      <h2 className="text-center mb-4">Conversor de Moedas</h2>
      <Form>
        <Form.Group controlId="formValorReal">
          <Form.Label>Valor em Reais (R$):</Form.Label>
          <Form.Control
            type="number"
            placeholder="Insira o valor em R$"
            value={valorReal}
            onChange={(e) => setValorReal(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formMoeda">
          <Form.Label>Selecione a moeda de conversão:</Form.Label>
          <Row>
            <Col xs={3}>
              <Image src="/símbol-dollar.png" className="moeda-img" />
            </Col>
            <Col xs={3}>
              <Image src="/símbol-euro.jpg" className="moeda-img" />
            </Col>
            <Col xs={3}>
              <Image src="/símbol-bitcoin.jpg" className="moeda-img" />
            </Col>
            <Col xs={3}>
              <Form.Control
                as="select"
                value={moeda}
                onChange={(e) => setMoeda(e.target.value)}
              >
                <option value="dolar">Dólar</option>
                <option value="euro">Euro</option>
                <option value="bitcoin">Bitcoin</option>
              </Form.Control>
            </Col>
          </Row>
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" onClick={handleConvert}>
            Converter
          </Button>{' '}
          <Button variant="secondary" onClick={handleClear}>
            Limpar
          </Button>
        </div>

        {resultado !== null && (
          <div className="resultado-container text-center">
            <h3>Resultado: {resultado}</h3>
          </div>
        )}
      </Form>
    </Container>
  );
};

export default ConversorMoedas;
