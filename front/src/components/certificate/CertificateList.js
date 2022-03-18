import { Card, Button, Row, Col } from 'react-bootstrap';
import CertificateEditForm from './CertificateEditForm';

function CertificateList({ list, setList }) {
  const handleEdit = (idx) => {
    setList((current) => {
      const newArr = [...current];
      newArr.map((item, id) => {
        if (id === idx) {
          item.edit = true;
        }
      });
      return newArr;
    });
  };
  return (
    <>
      {list.map((item, idx) =>
        item.edit ? (
          <CertificateEditForm
            setList={setList}
            idx={idx}
            item={item}
          ></CertificateEditForm>
        ) : (
          <Card.Text>
            <Row className="align-items-center">
              <Col>
                <span>{item.certificate}</span>
                <br />
                <span className="text-muted">{item.detail}</span>
                <br />
                <span className="text-muted">{item.date}</span>
              </Col>
              <Col lg="1">
                <Button
                  onClick={() => handleEdit(idx)}
                  className="mr-3"
                  variant="outline-info"
                  size="sm"
                >
                  편집
                </Button>
              </Col>
            </Row>
          </Card.Text>
        )
      )}
    </>
  );
}

export default CertificateList;
