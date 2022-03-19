import { Card, Button, Col } from 'react-bootstrap';

function AwardCard({ award, setIsEditing, isEditable }) {
  return (
    <div className="mb-2 ms-3 mr-5">
      <div>
        <Card.Text>
          <div className="justify-content-between align-items-center mb-2 row">
            <Col>
              <span>{award?.title}</span> <br />
              <span className="text-muted">{award?.description}</span> <br />
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
      </div>
    </div>
  );
}

export default AwardCard;
