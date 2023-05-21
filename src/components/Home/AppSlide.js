import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function AppSlide() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://thehill.com/wp-content/uploads/sites/2/2022/03/ca_collegeenrollment_istock.jpg?w=1280&h=720&crop=1"
          alt=""
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images8.alphacoders.com/389/thumb-1920-389899.jpg"
          alt=""
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.ctfassets.net/2htm8llflwdx/2dVrBgr2lq60lTuIvfAyy0/e2ff379f50588b0fbcb5f8fb3ad4ea2c/GettyImages-539444770.jpg"
          alt=""
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://loyalistcollege.com/wp-content/uploads/2021/08/New-Student-Checklist-Header.jpg"
          alt=""
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default AppSlide;
