import React, { useState } from 'react';
import { Button, Form, Card, Col, Row } from 'react-bootstrap';
import * as Api from '../../api';

function CertificateEditForm({ setList, idx, item }) {
  const [certificate, setCertificate] = useState(item.certificate);
  const [description, setDescription] = useState(item.detail);
  const [date, setDate] = useState(item.date);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setList((current) => {
      const newArr = [...current];
      newArr[idx].certificate = certificate;
      newArr[idx].detail = description;
      newArr[idx].date = date;
      newArr[idx].edit = false;
      return newArr;
    });
  };

  const handleCancel = () => {
    setList((current) => {
      const newArr = [...current];
      newArr[idx].edit = false;
      return newArr;
    });
  };

  return (
    <Card className=" mb-2" border="light">
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="certificate" className="mb-3">
            <Form.Control
              type="text"
              value={certificate}
              onChange={(e) => setCertificate(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="description" className="mb-3">
            <Form.Control
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="date">
            <Form.Control
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Row} className="mt-3 text-center">
            <Col sm={{ span: 20 }}>
              <Button variant="primary" type="submit" className="me-3">
                확인
              </Button>
              <Button variant="secondary" onClick={handleCancel}>
                취소
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default CertificateEditForm;
