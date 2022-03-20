import { Card, Button } from "react-bootstrap";

function ProjectCard({ project, setIsEditing, isEditable, isEditing }) {
  const title = project?.title;
  const description = project?.description;
  const from_data = project?.from_data;
  const to_data = project?.to_data;

  return (
    <div className="mb-2 ms-3 mr-5">
      <div>
        {isEditing && (
          <Card.Text>
            <div className="justify-content-between align-items-center mb-2 row">
              <div className="col">
                {title} <br />
                <span className="text-muted">{description}</span> <br />
                <span className="text-muted">
                  {from_data}~{to_data}
                </span>
              </div>
              <div className="col - lg - 1 col">
                {isEditable && (
                  <Button
                    variant="outline-info"
                    size="sm"
                    onClick={() => setIsEditing(true)}
                  >
                    편집
                  </Button>
                )}
              </div>
            </div>
          </Card.Text>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
