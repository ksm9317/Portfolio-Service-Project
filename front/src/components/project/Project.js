import React, { useState, useEffect } from "react";
import * as Api from "../../api";
import { Button, Card } from "react-bootstrap";
import ProjectAddFrom from "./ProjectAddForm";
import ProjectCard from "./ProjectCard";

function Project({ portfolioOwnerId, isEditable }) {
  const [isAddProject, setIsAddProject] = useState(false);
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    // "projectlist/유저id" 엔드포인트로 GET 요청을 하고, projectlist를 response의 data로 세팅함.
    Api.get("projectlist", portfolioOwnerId).then((res) =>
      setProjectList(res.data)
    );
  }, [portfolioOwnerId]);

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>프로젝트</Card.Title>
        {projectList !== null ? (
          projectList.map((project) => (
            <ProjectCard
              key={project._id}
              portfolioOwnerId={portfolioOwnerId}
              project={project}
              setProjectList={setProjectList}
              isEditable={isEditable}
            />
          ))
        ) : (
          <></>
        )}
        {isEditable && (
          <div className="mt-3 text-center mb-4 row">
            <div className="col-sm-20">
              <Button onClick={(e) => setIsAddProject(true)}>+</Button>
            </div>
          </div>
        )}
        {isAddProject ? (
          <ProjectAddFrom
            setIsAddProject={setIsAddProject}
            portfolioOwnerId={portfolioOwnerId}
            setProjectList={setProjectList}
          />
        ) : (
          <></>
        )}
      </Card.Body>
    </Card>
  );
}
export default Project;
