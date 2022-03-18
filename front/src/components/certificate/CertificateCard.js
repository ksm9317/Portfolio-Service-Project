import { Card, Row, Button, Col } from 'react-bootstrap';
import { useState } from 'react';
import CertificateAddForm from './CertificateAddForm';
import CertificateList from './CertificateList';

function CertificateCard({ isEditable }) {
  const [add, setAdd] = useState(false);
  const [list, setList] = useState([]);

  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>자격증</Card.Title>
          <CertificateList list={list} setList={setList}></CertificateList>
          {isEditable && (
            <Row className="mt-3 mb-4 text-center text-info">
              <Col sm={{ span: 20 }}>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => setAdd(true)}
                >
                  +
                </Button>
                {add ? (
                  <CertificateAddForm
                    setList={setList}
                    setAdd={setAdd}
                  ></CertificateAddForm>
                ) : (
                  ''
                )}
              </Col>
            </Row>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CertificateCard;
