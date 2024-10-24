'use client'

import Pagina from '@/components/Pagina'
import { Formik } from 'formik'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { FaCheck, FaTrash } from 'react-icons/fa'
import ReactInputMask from 'react-input-mask'
import * as Yup from "yup"

export default function CadastroImovel() {

  function cadastrar(imovel) {
    console.log(imovel)
    const imoveis = JSON.parse(localStorage.getItem('imoveis')) || []
    imoveis.push(imovel)
    localStorage.setItem('imoveis', JSON.stringify(imoveis))
    alert("Imóvel cadastrado com sucesso!")
  }

  const initialValues = {
    tipo: '',
    finalidade: '',
    valor: '',
    area: '',
    quartos: '',
    banheiros: '',
    descricao: '',
    foto: '',
    vagasGaragem: '',
    endereco: {
      cep: '',
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      UF: ''
    },
    proprietario: {
      nome: '',
      CPF: '',
      telefone: '',
      email: ''
    }
  }

  const validationSchema = Yup.object().shape({
    tipo: Yup.string().required("Campo obrigatório"),
    finalidade: Yup.string().required("Campo obrigatório"),
    valor: Yup.number().required("Campo obrigatório"),
    area: Yup.number().required("Campo obrigatório"),
    quartos: Yup.number().required("Campo obrigatório"),
    banheiros: Yup.number().required("Campo obrigatório"),
    descricao: Yup.string(),
    foto: Yup.string(),
    vagasGaragem: Yup.number().required("Campo obrigatório"),
    endereco: Yup.object().shape({
      cep: Yup.string().required("Campo obrigatório"),
      logradouro: Yup.string().required("Campo obrigatório"),
      numero: Yup.string().required("Campo obrigatório"),
      complemento: Yup.string(),
      bairro: Yup.string().required("Campo obrigatório"),
      cidade: Yup.string().required("Campo obrigatório"),
      UF: Yup.string().required("Campo obrigatório"),
    }),
    proprietario: Yup.object().shape({
      nome: Yup.string().required("Campo obrigatório"),
      CPF: Yup.string().required("Campo obrigatório"),
      telefone: Yup.string().required("Campo obrigatório"),
      email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
    })
  })

  return (
    <Pagina titulo={"Cadastro de Imóveis"}>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={cadastrar}
      >
        {({ values, errors, touched, handleBlur, handleSubmit, handleReset, handleChange }) => (
          <Form onSubmit={handleSubmit}>
            {/* Informações do Imóvel */}
            <div className='text-center'>
              <h3>Informações do Imóvel</h3>
              <hr />
            </div>

            <Row className='mb-2'>
              <Form.Group as={Col}>
                <Form.Label>Tipo:</Form.Label>
                <Form.Control
                  name='tipo'
                  type='text'
                  value={values.tipo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.tipo && !errors.tipo}
                  isInvalid={touched.tipo && !!errors.tipo}
                />
                <Form.Control.Feedback type='invalid'>{errors.tipo}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Finalidade:</Form.Label>
                <Form.Control
                  name='finalidade'
                  type='text'
                  value={values.finalidade}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.finalidade && !errors.finalidade}
                  isInvalid={touched.finalidade && !!errors.finalidade}
                />
                <Form.Control.Feedback type='invalid'>{errors.finalidade}</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className='mb-2'>
              <Form.Group as={Col}>
                <Form.Label>Valor:</Form.Label>
                <Form.Control
                  name='valor'
                  type='number'
                  value={values.valor}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.valor && !errors.valor}
                  isInvalid={touched.valor && !!errors.valor}
                />
                <Form.Control.Feedback type='invalid'>{errors.valor}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Área (m²):</Form.Label>
                <Form.Control
                  name='area'
                  type='number'
                  value={values.area}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.area && !errors.area}
                  isInvalid={touched.area && !!errors.area}
                />
                <Form.Control.Feedback type='invalid'>{errors.area}</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className='mb-2'>
              <Form.Group as={Col}>
                <Form.Label>Quartos:</Form.Label>
                <Form.Control
                  name='quartos'
                  type='number'
                  value={values.quartos}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.quartos && !errors.quartos}
                  isInvalid={touched.quartos && !!errors.quartos}
                />
                <Form.Control.Feedback type='invalid'>{errors.quartos}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Banheiros:</Form.Label>
                <Form.Control
                  name='banheiros'
                  type='number'
                  value={values.banheiros}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.banheiros && !errors.banheiros}
                  isInvalid={touched.banheiros && !!errors.banheiros}
                />
                <Form.Control.Feedback type='invalid'>{errors.banheiros}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Vagas de Garagem:</Form.Label>
                <Form.Control
                  name='vagasGaragem'
                  type='number'
                  value={values.vagasGaragem}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.vagasGaragem && !errors.vagasGaragem}
                  isInvalid={touched.vagasGaragem && !!errors.vagasGaragem}
                />
                <Form.Control.Feedback type='invalid'>{errors.vagasGaragem}</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className='mb-2'>
              <Form.Group as={Col}>
                <Form.Label>Descrição:</Form.Label>
                <Form.Control
                  name='descricao'
                  as='textarea'
                  rows={3}
                  value={values.descricao}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.descricao && !errors.descricao}
                  isInvalid={touched.descricao && !!errors.descricao}
                />
                <Form.Control.Feedback type='invalid'>{errors.descricao}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Link da Foto:</Form.Label>
                <Form.Control
                  name='foto'
                  type='text'
                  value={values.foto}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.foto && !errors.foto}
                  isInvalid={touched.foto && !!errors.foto}
                />
                <Form.Control.Feedback type='invalid'>{errors.foto}</Form.Control.Feedback>
              </Form.Group>
            </Row>

            {/* Endereço */}
            <div className='text-center'>
              <h3>Endereço do Imóvel</h3>
              <hr />
            </div>

            <Row className='mb-2'>
              <Form.Group as={Col} md={3}>
                <Form.Label>Cep:</Form.Label>
                <Form.Control as={ReactInputMask}
                  mask={"99999-999"}
                  placeholder="99999-999"
                  name='endereco.cep'
                  type='text'
                  value={values?.endereco?.cep}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched?.endereco?.cep && !errors?.endereco?.cep}
                  isInvalid={touched?.endereco?.cep && !!errors?.endereco?.cep}
                />
                <Form.Control.Feedback type='invalid'>{errors?.endereco?.cep}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Logradouro:</Form.Label>
                <Form.Control
                  name='endereco.logradouro'
                  type='text'
                  value={values?.endereco?.logradouro}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched?.endereco?.logradouro && !errors?.endereco?.logradouro}
                  isInvalid={touched?.endereco?.logradouro && !!errors?.endereco?.logradouro}
              />
                <Form.Control.Feedback type='invalid'>{errors?.endereco?.logradouro}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md={2}>
                <Form.Label>Número:</Form.Label>
                <Form.Control
                  name='endereco.numero'
                  type='text'
                  value={values?.endereco?.numero}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched?.endereco?.numero && !errors?.endereco?.numero}
                  isInvalid={touched?.endereco?.numero && !!errors?.endereco?.numero}
              />
                <Form.Control.Feedback type='invalid'>{errors?.endereco?.numero}</Form.Control.Feedback>
              </Form.Group>


              <Form.Group as={Col}>
                <Form.Label>Complemento:</Form.Label>
                <Form.Control
                  name='endereco.complemento'
                  type='text'
                  value={values?.endereco?.complemento}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched?.endereco?.complemento && !errors?.endereco?.complemento}
                  isInvalid={touched?.endereco?.complemento && !!errors?.endereco?.complemento}
              />
              <Form.Control.Feedback type='invalid'>{errors?.endereco?.complemento}</Form.Control.Feedback>
              </Form.Group>
              </Row>

              <Row className='mb-2'>
                <Form.Group as={Col}>
                  <Form.Label>Bairro:</Form.Label>
                  <Form.Control
                    name='endereco.bairro'
                    type='text'
                    value={values?.endereco?.bairro}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched?.endereco?.bairro && !errors?.endereco?.bairro}
                    isInvalid={touched?.endereco?.bairro && !!errors?.endereco?.bairro}
              />
              <Form.Control.Feedback type='invalid'>{errors?.endereco?.bairro}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Cidade:</Form.Label>
                <Form.Control
                  name='endereco.cidade'
                  type='text'
                  value={values?.endereco?.cidade}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched?.endereco?.cidade && !errors?.endereco?.cidade}
                  isInvalid={touched?.endereco?.cidade && !!errors?.endereco?.cidade}
              />
              <Form.Control.Feedback type='invalid'>{errors?.endereco?.cidade}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md={2}>
                <Form.Label>UF:</Form.Label>
                <Form.Control
                  name='endereco.UF'
                  type='text'
                  maxLength={2}
                  value={values?.endereco?.UF}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched?.endereco?.UF && !errors?.endereco?.UF}
                  isInvalid={touched?.endereco?.UF && !!errors?.endereco?.UF}
              />
              <Form.Control.Feedback type='invalid'>{errors?.endereco?.UF}</Form.Control.Feedback>
              </Form.Group>
              </Row>

              {/* Proprietário */}
              <div className='text-center'>
                <h3>Dados do Proprietário</h3>
                <hr />
              </div>

              <Row className='mb-2'>
                <Form.Group as={Col}>
                  <Form.Label>Nome:</Form.Label>
                  <Form.Control
                    name='proprietario.nome'
                    type='text'
                    value={values?.proprietario?.nome}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched?.proprietario?.nome && !errors?.proprietario?.nome}
                    isInvalid={touched?.proprietario?.nome && !!errors?.proprietario?.nome}
              />
              <Form.Control.Feedback type='invalid'>{errors?.proprietario?.nome}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>CPF:</Form.Label>
                <Form.Control as={ReactInputMask}
                  mask={"999.999.999-99"}
                  placeholder="999.999.999-99"
                  name='proprietario.CPF'
                  type='text'
                  value={values?.proprietario?.CPF}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched?.proprietario?.CPF && !errors?.proprietario?.CPF}
                  isInvalid={touched?.proprietario?.CPF && !!errors?.proprietario?.CPF}
              />
              <Form.Control.Feedback type='invalid'>{errors?.proprietario?.CPF}</Form.Control.Feedback>
              </Form.Group>
              </Row>

              <Row className='mb-2'>
                <Form.Group as={Col}>
                  <Form.Label>Telefone:</Form.Label>
                  <Form.Control as={ReactInputMask}
                    mask={"(99) 99999-9999"}
                    placeholder="(99) 99999-9999"
                    name='proprietario.telefone'
                    type='text'
                    value={values?.proprietario?.telefone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched?.proprietario?.telefone && !errors?.proprietario?.telefone}
                    isInvalid={touched?.proprietario?.telefone && !!errors?.proprietario?.telefone}
              />
              <Form.Control.Feedback type='invalid'>{errors?.proprietario?.telefone}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>E-mail:</Form.Label>
                <Form.Control
                  name='proprietario.email'
                  type='email'
                  value={values?.proprietario?.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched?.proprietario?.email && !errors?.proprietario?.email}
                  isInvalid={touched?.proprietario?.email && !!errors?.proprietario?.email}
              />
              <Form.Control.Feedback type='invalid'>{errors?.proprietario?.email}</Form.Control.Feedback>
              </Form.Group>
              </Row>

              {/* Botões */}
              <div className='text-center'>
                <Button type='submit' variant='success' className='me-2'>
                  <FaCheck className='me-1' />Salvar
                </Button>
                <Button type='reset' variant='danger' onClick={handleReset}>
                  <FaTrash className='me-1' />Limpar
                </Button>
              </div>
              </Form>
              )}
              </Formik>
              </Pagina>
              )
              }

