import { Card, Button } from 'react-bootstrap';

function AwardCard({ user, setIsEditing, isEditable }) {
  const title = user?.title;
  const description = user?.description;
  return (
    <div className="mb-2 ms-3 mr-5">
      <div>
        <Card.Text>
          <div className="justify-content-between align-items-center mb-2 row">
            <div className="col">
              {title} <br />
              <span className="text-muted">{description}</span>
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
      </div>
    </div>
  );
}

export default AwardCard;
