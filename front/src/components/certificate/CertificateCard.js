import { Card, Button } from 'react-bootstrap';

function CertificateCard({
  list,
  setIsEditing,
  isEditable,
  serList,
  portfolioOwnerId,
}) {
  const title = list?.title;
  const description = list?.description;
  const date = list?.date;
  return (
    <div className="mb-2 ms-3 mr-5">
      <div>
        <Card.Text>
          <div className="justify-content-between align-items-center mb-2 row">
            <div className="col">
              {title} <br />
              <span className="text-muted">{description}</span> <br />
              <span className="text-muted">{date}</span>
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

export default CertificateCard;
