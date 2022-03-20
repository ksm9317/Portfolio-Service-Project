import React, { useState, useEffect } from 'react';
import * as Api from '../../api';
import { Button, Card } from 'react-bootstrap';
import CertificateAddForm from './CertificateAddForm';
import CertificateCard from './CertificateCard';

function Certificate({ portfolioOwnerId, isEditable }) {
  const [isAddCertificate, setIsAddCertificate] = useState(false);
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const res = await Api.get(`certificatelist/${portfolioOwnerId}`);
      setList(res.data);
    };
    fetch();
  }, [portfolioOwnerId]);

  return (
    <Card>
      <Card.Body>
        <Card.Title>자격증</Card.Title>
        {list &&
          list.map((certificate) => (
            <CertificateCard
              portfolioOwnerId={portfolioOwnerId}
              list={certificate}
              isEditable={isEditable}
              setIsEditing={setIsEditing}
              setList={setList}
            />
          ))}

        <div className="mt-3 text-center mb-4 row">
          <div className="col-sm-20">
            <Button onClick={(e) => setIsAddCertificate(true)}>+</Button>
          </div>
        </div>
        {isAddCertificate && (
          <CertificateAddForm
            setIsAddCertificate={setIsAddCertificate}
            portfolioOwnerId={portfolioOwnerId}
            setList={setList}
          />
        )}
      </Card.Body>
    </Card>
  );
}
export default Certificate;
