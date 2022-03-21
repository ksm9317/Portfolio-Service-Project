import React, { useState, useEffect } from 'react';
import * as Api from '../../api';
import { Button, Card } from 'react-bootstrap';
import CertificateAddForm from './CertificateAddForm';
import CertificateCard from './CertificateCard';
import CertificateEditForm from './CertificateEditForm';

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
        {isEditing ? (
          <>
            {list &&
              list.map((certificate) => (
                <CertificateEditForm
                  key={certificate.id}
                  portfolioOwnerId={portfolioOwnerId}
                  setIsEditing={setIsEditing}
                  list={certificate}
                  setList={setList}
                />
              ))}
          </>
        ) : (
          <>
            {list &&
              list.map((certificate) => (
                <CertificateCard
                  portfolioOwnerId={portfolioOwnerId}
                  isEditable={isEditable}
                  setIsEditing={setIsEditing}
                  list={certificate}
                  setList={setList}
                />
              ))}
          </>
        )}

        <div className="mt-3 text-center mb-4 row">
          <div className="col-sm-20">
            {isEditable && (
              <Button onClick={(e) => setIsAddCertificate(true)}> + </Button>
            )}
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
