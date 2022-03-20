import React, { useState, useEffect } from 'react';
import * as Api from '../../api';
import { Button, Card } from 'react-bootstrap';
import AwardAddForm from './AwardAddForm';
import AwardCard from './AwardCard';

function Award({ portfolioOwnerId, isEditable }) {
  const [isAddAward, setIsAddAward] = useState(false);
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const res = await Api.get(`awardlist/${portfolioOwnerId}`);
      setList(res.data);
    };
    fetch();
  }, [portfolioOwnerId]);
  return (
    <Card>
      <Card.Body>
        <Card.Title>수상이력</Card.Title>
        {list &&
          list.map((award) => (
            <AwardCard
              portfolioOwnerId={portfolioOwnerId}
              list={award}
              isEditable={isEditable}
              setIsEditing={setIsEditing}
              setList={setList}
            />
          ))}

        <div className="mt-3 text-center mb-4 row">
          <div className="col-sm-20">
            <Button onClick={(e) => setIsAddAward(true)}> + </Button>
          </div>
        </div>
        {isAddAward && (
          <AwardAddForm
            setIsAddAward={setIsAddAward}
            portfolioOwnerId={portfolioOwnerId}
            setList={setList}
          />
        )}
      </Card.Body>
    </Card>
  );
}
export default Award;
