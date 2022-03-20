import React, { useState } from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap';
import * as Api from '../../api';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function CertificateAddForm({
  setIsAddCertificate,
  portfolioOwnerId,
  setUser,
}) {
  const [certificate, setCertificate] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState(new Date());

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user_id = portfolioOwnerId;
    const res = await Api.post(`certificate/create`, {
      user_id,
      certificate,
      description,
      date,
    });
    // 유저 정보는 response의 data임.
    const updatedUser = res.data;
    // 해당 유저 정보로 user을 세팅함.
    setUser(updatedUser);
    console.log(updatedUser);
    // isEditing을 false로 세팅함.
    setIsAddCertificate(false);
    console.log(setIsAddCertificate);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="certificate">
        <Form.Control
          type="text"
          placeholder="자격증"
          value={certificate}
          onChange={(e) => setCertificate(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="description" className="mt-3">
        <Form.Control
          type="text"
          placeholder="상세내역"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="date" className="mt-3">
        {/* <Form.Control
          type="text"
          placeholder="취득일"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        /> */}
        <DatePicker selected={date} onChange={(e) => setDate(e)} />
      </Form.Group>

      <Form.Group as={Row} className="mt-3 text-center">
        <Col sm={{ span: 20 }}>
          <Button variant="primary" type="submit" className="me-3">
            확인
          </Button>
          <Button
            variant="secondary"
            onClick={() => setIsAddCertificate(false)}
          >
            취소
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default CertificateAddForm;
