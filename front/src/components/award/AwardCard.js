import { Card, Button, Col } from 'react-bootstrap';
import AwardEditForm from './AwardEditForm';
import { useState } from 'react';

function AwardCard({ portfolioOwnerId, award, setUser, isEditable }) {
  const currentId = award?.id;
  const title = award?.title;
  const description = award?.description;
  const current = { currentId, title, description };
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="mb-2 ms-3 mr-5">
      <div>
        {isEditing ? (
          <AwardEditForm
            portfolioOwnerId={portfolioOwnerId}
            current={current}
            setUser={setUser}
            setIsEditing={setIsEditing}
          />
        ) : (
          <Card.Text>
            <div className="justify-content-between align-items-center mb-2 row">
              <Col>
                <span>{title}</span> <br />
                <span className="text-muted">{description}</span>
              </Col>
              {isEditable && (
                <Col lg="1">
                  <Button
                    variant="outline-info"
                    size="sm"
                    onClick={() => setIsEditing(true)}
                  >
                    편집
                  </Button>
                </Col>
              )}
            </div>
          </Card.Text>
        )}
      </div>
    </div>
  );
}

export default AwardCard;
