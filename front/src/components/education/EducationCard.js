import { Card, Button } from "react-bootstrap";
import EducationEditForm from "./EducationEditForm";
import { useState } from "react";
import * as Api from "../../api";

function EducationCard({
  portfolioOwnerId,
  education,
  setEducationList,
  isEditable,
}) {
  const currentId = education?.id;
  const school = education?.school;
  const major = education?.major;
  const position = education?.position;
  const current = { currentId, school, major, position };
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user_id = portfolioOwnerId;
    await Api.delete(`educationDelete/${current?.currentId}`);
    // 유저 정보는 response의 data임.
    // 해당 유저 정보로 user을 세팅함.
    const res = await Api.get("educationlist", user_id);
    setEducationList(res.data);
    console.log(res.data);
    // isEditing을 false로 세팅함.
  };

  return (
    <div className="mb-2 ms-3 mr-5">
      <div>
        {isEditing ? (
          <EducationEditForm
            portfolioOwnerId={portfolioOwnerId}
            current={current}
            setEducationList={setEducationList}
            setIsEditing={setIsEditing}
          />
        ) : (
          <Card.Text>
            <div className="justify-content-between align-items-center mb-2 row">
              <div className="col">
                {school} <br />
                <span className="text-muted">{major}</span> <br />
                <span className="text-muted">{position}</span>
              </div>
              <div className="col - lg - 1 col">
                {isEditable && (
                  <div style={{ display: "flex" }}>
                    <Button
                      style={{ margin: "auto" }}
                      variant="outline-info"
                      size="sm"
                      onClick={() => {
                        setIsEditing(true);
                      }}
                    >
                      편집
                    </Button>
                    <Button
                      style={{ margin: "auto" }}
                      variant="outline-info"
                      size="sm"
                      onClick={(e) => {
                        handleSubmit(e);
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

export default EducationCard;
