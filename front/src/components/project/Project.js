import React, { useState, useEffect } from "react";
import * as Api from "../../api";
import { Button, Card } from "react-bootstrap";
import ProjectAddFrom from "./ProjectAddForm";
import ProjectCard from "./ProjectCard";

function Project({ portfolioOwnerId, isEditable }) {
  const [isAddProject, setIsAddProject] = useState(false);
  const [user, setUser] = useState(portfolioOwnerId);
  const [isEditing, setIsEditing] = useState(false);

  // useEffect(() => {
  //   // "users/유저id" 엔드포인트로 GET 요청을 하고, user를 response의 data로 세팅함.
  //   Api.get("project", portfolioOwnerId).then((res) => setUser(res.data));
  // }, [portfolioOwnerId]);
  useEffect(() => {
    setUser({
      title: "123",
      description: "123",
      from_data: "2022-03-18T01:26:59.343Z",
      to_data: "2022-03-18T01:26:59.343Z",
    });
  }, []);

  return (
    <Card>
      <Card.Body>
        <Card.Title>프로젝트</Card.Title>
        {user !== null ? (
          <ProjectCard
            user={user}
            setIsEditing={setIsEditing}
            isEditable={isEditable}
          />
        ) : (
          <></>
        )}
        <div className="mt-3 text-center mb-4 row">
          <div className="col-sm-20">
            <Button onClick={(e) => setIsAddProject(true)}>+</Button>
          </div>
        </div>
        {isAddProject ? (
          <ProjectAddFrom
            setIsAddProject={setIsAddProject}
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
export default Project;
