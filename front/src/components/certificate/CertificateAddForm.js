import React, { useState } from 'react';
import { Button, Form, Card, Col, Row } from 'react-bootstrap';
import * as Api from '../../api';

function CertificateAddForm({ setAdd, setList }) {
  const [certificate, setCertificate] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setList((current) => {
      const newArr = [...current];
      const newList = {
        certificate: certificate,
        detail: description,
        date: date,
        edit: false,
      };
      newArr.push(newList);
      return newArr;
    });
    setAdd(false);
  };
  return (
    <>
      <Card className="mt-2 mb-2" border="light">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="certificate" className="mb-3">
              <Form.Control
                type="text"
                placeholder="자격증"
                value={certificate}
                onChange={(e) => setCertificate(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="description" className="mb-3">
              <Form.Control
                type="text"
                placeholder="부가설명"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="description" className="mb-3">
              <Form.Control
                type="text"
                placeholder="취득일"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 text-center">
              <Col sm={{ span: 20 }}>
                <Button variant="primary" type="submit" className="me-3">
                  확인
                </Button>
                <Button variant="secondary" onClick={() => setAdd(false)}>
                  취소
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default CertificateAddForm;
