import React, { useState, useEffect } from 'react';
import * as Api from '../../api';
import { Button, Card } from 'react-bootstrap';
import CertificateAddForm from './CertificateAddForm';
import CertificateCard from './CertificateCard';

function Certificate({ portfolioOwnerId, isEditable }) {
  const [isAddCertificate, setIsAddCertificate] = useState(false);
  const [user, setUser] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // "users/유저id" 엔드포인트로 GET 요청을 하고, user를 response의 data로 세팅함.
    Api.get(`certificates`, portfolioOwnerId).then((res) => setUser(res.data));
  }, [portfolioOwnerId]);

  return (
    <Card>
      <Card.Body>
        <Card.Title>자격증</Card.Title>

        {user !== null ? (
          <CertificateCard
            user={user}
            setIsEditing={setIsEditing}
            isEditable={isEditable}
          />
        ) : (
          <></>
        )}

        <div className="mt-3 text-center mb-4 row">
          <div className="col-sm-20">
            <Button onClick={(e) => setIsAddCertificate(true)}>+</Button>
          </div>
        </div>
        {isAddCertificate ? (
          <CertificateAddForm
            setIsAddCertificate={setIsAddCertificate}
            portfolioOwnerId={portfolioOwnerId}
            setUser={setUser}
          />
        ) : (
          <></>
        )}
      </Card.Body>
    </Card>
  );
}
export default Certificate;
