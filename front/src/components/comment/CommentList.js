import React, { useState, useEffect } from "react";
import * as Api from "../../api";
import { Button, Card, Form } from "react-bootstrap";
import CommentCard from "./CommentCard";

function CommentList({ portfolioOwnerId, currentUserId, isEditable }) {
  const [commentList, setCommentList] = useState(null);
  const [content, setContent] = useState("");
  const [commenterName, setCommenterName] = useState(null);

  useEffect(() => {
    // "commentList/유저id" 엔드포인트로 GET 요청을 하고, commentList response의 data로 세팅함.
    Api.get("commentList", portfolioOwnerId).then((res) =>
      setCommentList(res.data)
    );
    Api.get("users", currentUserId).then((res) =>
      setCommenterName(res.data.name)
    );
  }, [portfolioOwnerId, currentUserId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user_id = portfolioOwnerId;
    await Api.post(`comment/create/${user_id}`, {
      commentTo: user_id,
      commenter: currentUserId,
      commenterName,
      content,
    });

    const res = await Api.get("commentList", user_id);
    setCommentList(res.data);
    console.log(res.data);
    setContent("");
  };
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>댓글</Card.Title>

        {commentList !== null ? (
          commentList.map((comment) => (
            <CommentCard
              key={comment.id}
              portfolioOwnerId={portfolioOwnerId}
              currentUserId={currentUserId}
              comment={comment}
              setCommentList={setCommentList}
              isEditable={isEditable}
            />
          ))
        ) : (
          <></>
        )}

        <div>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="comment" className="mb-3">
              <Form.Control
                type="text"
                placeholder="댓글을 입력해주세요."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <Button
                variant="outline-primary"
                type="submit"
                style={{ margin: "10px auto", display: "flex" }}
              >
                게시
              </Button>
            </Form.Group>
          </Form>
        </div>
      </Card.Body>
    </Card>
  );
}
export default CommentList;
