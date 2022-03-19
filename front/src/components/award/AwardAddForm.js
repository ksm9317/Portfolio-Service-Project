import React, { useState } from 'react';
import { Button, Form, Card, Col, Row } from 'react-bootstrap';
import * as Api from '../../api';

function AwardAddFrom({ setIsAddAward, award, setAward }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // "user/register" 엔드포인트로 post요청함.
      const res = await Api.post('award/create', {
        title,
        description,
      });
      // 유저 정보는 response의 data임.
      const award = res.data;
      // 해당 유저 정보로 user을 세팅함.
      setAward(award);
      console.log(award);
      // isEditing을 false로 세팅함.
      setIsAddAward(false);
    } catch (err) {
      console.log('post 실패하였습니다.', err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="awardAddTitle" className="mb-3">
        <Form.Control
          type="text"
          placeholder="수상내역"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="awardAddDescription">
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
          <Button variant="secondary" onClick={() => setIsAddAward(false)}>
            취소
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default AwardAddFrom;
