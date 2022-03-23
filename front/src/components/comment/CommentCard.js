import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import CommentEditForm from "./CommentEditForm";

function CommentCard({
  portfolioOwnerId,
  comment,
  setEducationList,
  isEditable,
}) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="mb-2 ms-3 mr-5">
      <div>
        {isEditing ? (
          <CommentEditForm
            portfolioOwnerId={portfolioOwnerId}
            comment={comment}
            setEducationList={setEducationList}
            setIsEditing={setIsEditing}
          />
        ) : (
          <Card.Text>
            <div className="justify-content-between align-items-center mb-2 row">
              <div className="col">
                {comment} <br />
              </div>
              <div className="col - lg - 1 col">
                {isEditable && (
                  <div>
                    <Button
                      variant="outline-info"
                      size="sm"
                      onClick={() => {
                        setIsEditing(true);
                      }}
                    >
                      편집
                    </Button>

                    <Button
                      variant="outline-info"
                      size="sm"
                      onClick={() => {
                        console.log("삭제");
                      }}
                    >
                      삭제
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </Card.Text>
        )}
      </div>
    </div>
  );
}

export default CommentCard;
