import React, { useState, useEffect } from "react";
import * as Api from "../../api";
import { Button, Card } from "react-bootstrap";
import ProjectAddFrom from "./ProjectAddForm";
import ProjectCard from "./ProjectCard";

function Project({ portfolioOwnerId, isEditable }) {
  const [isAddProject, setIsAddProject] = useState(false);
  const [user, setUser] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // "users/유저id" 엔드포인트로 GET 요청을 하고, user를 response의 data로 세팅함.
    Api.get("project", portfolioOwnerId).then((res) => setUser(res.data));
  }, [portfolioOwnerId]);

  return (
    <Card>
      <Card.Body>
        <Card.Title>프로젝트</Card.Title>
        {user !== null ? (
          user.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              setIsEditing={setIsEditing}
              isEditable={isEditable}
            />
          ))
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
export default Project;
