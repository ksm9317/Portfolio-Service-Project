import React, { useState, useEffect } from "react";
import * as Api from "../../api";
import { Button, Card } from "react-bootstrap";

function Project({ portfolioOwnerId }) {
  const [project, setProject] = useState(null);
  // useEffect(() => {
  // // "users/유저id" 엔드포인트로 GET 요청을 하고, user를 response의 data로 세팅함.
  // Api.get("users", portfolioOwnerId).then((res) => setProject(res.data));
  // }, [portfolioOwnerId]);

  return (
    <Card>
      <Card.Body>
        <Card.Title>프로젝트</Card.Title>
        <div className="mt-3 text-center mb-4 row">
          <div className="col-sm-20">
            <Button>+</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
export default Project;
