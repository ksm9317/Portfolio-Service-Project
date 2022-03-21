import React, { useState, useEffect } from "react";
import * as Api from "../../api";
import { Button, Card } from "react-bootstrap";
import EducationAddFrom from "./EducationAddForm";
import EducationCard from "./EducationCard";

function Education({ portfolioOwnerId, isEditable }) {
  const [isAddEducation, setIsAddEducation] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    // "users/유저id" 엔드포인트로 GET 요청을 하고, user를 response의 data로 세팅함.
    Api.get("educationlist", portfolioOwnerId).then((res) => setUser(res.data));
  }, [portfolioOwnerId]);

  return (
    <Card>
      <Card.Body>
        <Card.Title>학력</Card.Title>

        {user !== null ? (
          user.map((education) => (
            <EducationCard
              key={education.id}
              portfolioOwnerId={portfolioOwnerId}
              education={education}
              setUser={setUser}
              isEditable={isEditable}
            />
          ))
        ) : (
          <></>
        )}
        {isEditable && (
          <div className="mt-3 text-center mb-4 row">
            <div className="col-sm-20">
              <Button onClick={(e) => setIsAddEducation(true)}>+</Button>
            </div>
          </div>
        )}

        {isAddEducation ? (
          <EducationAddFrom
            setIsAddEducation={setIsAddEducation}
            portfolioOwnerId={portfolioOwnerId}
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
