import React, { useState, useEffect } from "react";
import * as Api from "../../api";
import { Button, Card } from "react-bootstrap";
import ProjectAddFrom from "./ProjectAddForm";

function Project({ portfolioOwnerId }) {
  const [isAddProject, setIsAddProject] = useState(false);
  const [user, setUser] = useState(portfolioOwnerId);

  return (
    <Card>
      <Card.Body>
        <Card.Title>프로젝트</Card.Title>
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
