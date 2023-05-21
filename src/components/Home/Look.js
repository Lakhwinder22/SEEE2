import React from 'react';
import Card from 'react-bootstrap/Card';

const Look = () => {
  return (
    <div className="Look1">
      <div className='LookCard'>
        <h2><strong>What you can look forward to.</strong></h2>
      </div>
      <div className='LookCard'>
        <Card className="LookCardItem" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Text>
              <h4><strong>Find a job</strong></h4>
              <strong>68% of our students are employed before graduation, and 93% find employment within 12 months of graduating. Our career centre will support you every step of the way.</strong>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="LookCardItem" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Text>
              <h4><strong>Opportunity to learn</strong></h4>
              <strong>100% of our creative programmes are taught in English but if you want to learn German anyways, we offer support with a range of language courses.</strong>
            </Card.Text>
          </Card.Body>
        </Card>
        <br/>
        <Card className="LookCardItem" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Text>
              <h4><strong>Use the latest equipment</strong></h4>
              <strong>Our campus is equipped with updated iMacs with high-end design software, photo studios, VR equipment, green screen rooms, sound studios, graphic tabs, game labs, SR cameras and more.</strong>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="LookCardItem" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Text>
              <h4><strong>Enter in start-up scene</strong></h4>
              <strong>500+ new start-ups are being created each year with the potential for you to gain a variety of experience through internships or full-time work.</strong>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Look;
