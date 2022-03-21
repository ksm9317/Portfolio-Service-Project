import React, { useState } from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap';
import * as Api from '../../api';

function AwardEditForm({ setIsEditing, portfolioOwnerId, list, setList }) {
  const [title, setTitle] = useState(list.title);
  const [description, setDescription] = useState(list.description);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await Api.put(`awards/${list.id}`, {
      title,
      description,
    });
    // "awardlist"에서 awards 목록 다시 받아옴
    await Api.get('awardlist', portfolioOwnerId).then((res) =>
      setList(res.data)
    );
    // isEditing을 false로 세팅함.
    setIsEditing(false);
    console.log(setIsEditing);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="title" className="mb-3">
        <Form.Control
          type="text"
          //   placeholder="수상내역"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Control
          type="text"
          //   placeholder="상세내역"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group as={Row} className="mt-3 text-center">
        <Col sm={{ span: 20 }}>
          <Button variant="primary" type="submit" className="me-3">
            확인
          </Button>
          <Button variant="secondary" onClick={() => setIsEditing(false)}>
            취소
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default AwardEditForm;
