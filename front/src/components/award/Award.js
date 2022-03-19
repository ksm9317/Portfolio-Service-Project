import React, { useState, useEffect } from 'react';
import * as Api from '../../api';
import { Button, Card } from 'react-bootstrap';
import AwardAddFrom from './AwardAddForm';
import AwardCard from './AwardCard';

function Award({ portfolioOwnerId, isEditable }) {
  const [isAddAward, setIsAddAward] = useState(false);
  const [award, setAward] = useState(portfolioOwnerId);
  const [isEditing, setIsEditing] = useState(false);

  // useEffect(() => {
  //   // "users/유저id" 엔드포인트로 GET 요청을 하고, user를 response의 data로 세팅함.
  //   Api.get('awards', portfolioOwnerId).then((res) => setAward(res.data));
  // }, [portfolioOwnerId]);
  useEffect(() => {
    setAward({
      title: '123',
      description: '123',
    });
  }, []);

  return (
    <Card>
      <Card.Body>
        <Card.Title>수상이력</Card.Title>
        {award !== null ? (
          <AwardCard
            award={award}
            setIsEditing={setIsEditing}
            isEditable={isEditable}
          />
        ) : (
          <></>
        )}
        <div className="mt-3 text-center mb-4 row">
          <div className="col-sm-20">
            <Button onClick={(e) => setIsAddAward(true)}>+</Button>
          </div>
        </div>
        {isAddAward ? (
          <AwardAddFrom
            setIsAddAward={setIsAddAward}
            award={award}
            setUser={setAward}
          />
        ) : (
          <></>
        )}
      </Card.Body>
    </Card>
  );
}
export default Award;
