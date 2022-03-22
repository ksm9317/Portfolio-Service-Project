import { Card, Button, Col } from 'react-bootstrap';
import CertificateEditForm from './CertificateEditForm';
import { useState } from 'react';

function CertificateCard({
  portfolioOwnerId,
  certificate,
  setUser,
  isEditable,
}) {
  const currentId = certificate?.id;
  const title = certificate?.title;
  const description = certificate?.description;
  const date = certificate?.date;
  const current = { currentId, title, description, date };
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="mb-2 ms-3 mr-5">
      <div>
        {isEditing ? (
          <CertificateEditForm
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
                <span className="text-muted">{description}</span> <br />
                <span className="text-muted">{date.substring(0, 10)}</span>
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

export default CertificateCard;
