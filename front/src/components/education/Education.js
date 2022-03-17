import React, { useState, useEffect } from "react";
import * as Api from "../../api";
import { Button, Card } from "react-bootstrap";
import EducationAddFrom from "./EducationAddForm";
import EducationCard from "./EducationCard";

function Education({ portfolioOwnerId }) {
  const [isAddEducation, setIsAddEducation] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // "users/유저id" 엔드포인트로 GET 요청을 하고, user를 response의 data로 세팅함.
    Api.get("users", portfolioOwnerId).then((res) => setUser(res.data));
  }, [portfolioOwnerId]);

  return (
    <Card>
      <Card.Body>
        <Card.Title>학력</Card.Title>
        <div className="mt-3 text-center mb-4 row">
          <div className="col-sm-20">
            <Button onClick={(e) => setIsAddEducation(true)}>+</Button>
          </div>
        </div>
        {isAddEducation ? (
          <EducationAddFrom
            setIsAddEducation={setIsAddEducation}
            user={user}
            setUser={setUser}
          />
        ) : (
          <></>
        )}
      </Card.Body>
    </Card>
  );
}
export default Education;
