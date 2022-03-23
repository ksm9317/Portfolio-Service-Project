import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";

function CommentForm({ portfolioOwnerId }) {
  const [comments, setComments] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user_id = portfolioOwnerId;
    console.log(user_id);
  };
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>댓글</Card.Title>
      </Card.Body>
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="comment" className="mb-3">
            <Form.Control
              type="text"
              placeholder="댓글을 입력해주세요."
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
            <Button
              variant="primary"
              type="submit"
              style={{ margin: "auto", display: "flex" }}
            >
              게시
            </Button>
          </Form.Group>
        </Form>
      </div>
    </Card>
  );
}

export default CommentForm;
