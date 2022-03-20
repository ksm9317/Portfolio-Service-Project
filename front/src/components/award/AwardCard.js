import { Card, Button, Col } from 'react-bootstrap';

function AwardCard({
  list,
  setIsEditing,
  isEditable,
  setList,
  portfolioOwnerId,
}) {
  const title = list?.title;
  const description = list?.description;
  return (
    <div className="mb-2 ms-3 mr-5">
      <div>
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
      </div>
    </div>
  );
}

export default AwardCard;
