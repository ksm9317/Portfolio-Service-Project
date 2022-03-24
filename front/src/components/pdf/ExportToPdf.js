import React, { useState } from 'react';
import { Button, Form, Col, Row, Card } from 'react-bootstrap';
import * as Api from '../../api';

function ExportToPdf({ setIsPdf, portfolioOwnerId }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user_id = portfolioOwnerId;

    await Api.post(`pdf/create`, {
      user_id,
      name,
      email,
      tel,
      description,
    })
    setIsPdf(false);
  };

  return (
    <Card className="mb-2">
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Control
              type="text"
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Control
              type="text"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="tel">
            <Form.Control
              type="text"
              placeholder="핸드폰"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Control
              type="text"
              placeholder="상세내역"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Row} className="mt-3 text-center">
            <Col sm={{ span: 20 }}>
              <Button variant="primary" type="submit" className="me-3">
                확인
              </Button>
              <Button variant="secondary" onClick={() => setIsPdf(false)}>
                취소
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default ExportToPdf;
