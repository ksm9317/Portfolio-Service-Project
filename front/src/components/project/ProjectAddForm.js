import React, { useState } from "react";
import { Button, Form, Card, Col, Row } from "react-bootstrap";
import * as Api from "../../api";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ProjectAddFrom({ setIsAddProject, user, setUser }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectStart, setProjectStart] = useState(new Date());
  const [projectEnd, setProjectEnd] = useState(new Date());

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await Api.post(`project/create`, {
      user_id: user.id,
      title,
      description,
      from_data: projectStart,
      to_data: projectEnd,
    });
    // 유저 정보는 response의 data임.
    const updatedUser = res.data;
    // 해당 유저 정보로 user을 세팅함.
    setUser(updatedUser);
    console.log(updatedUser);
    // isEditing을 false로 세팅함.
    setIsAddProject(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="title" className="mb-3">
        <Form.Control
          type="text"
          placeholder="프로젝트 제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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

      <Form.Group controlId="projectBody" className="mt-3 row">
        <Form.Group className="col-auto">
          <DatePicker
            selected={projectStart}
            onChange={(date: Date) => setProjectStart(date)}
          />
        </Form.Group>
        <Form.Group className="col-auto">
          <DatePicker
            selected={projectEnd}
            onChange={(date: Date) => setProjectEnd(date)}
          />
        </Form.Group>
      </Form.Group>

      <Form.Group as={Row} className="mt-3 text-center">
        <Col sm={{ span: 20 }}>
          <Button variant="primary" type="submit" className="me-3">
            확인
          </Button>
          <Button variant="secondary" onClick={() => setIsAddProject(false)}>
            취소
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default ProjectAddFrom;
