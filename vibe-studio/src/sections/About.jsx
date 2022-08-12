import React from "react";
import styled from "styled-components";
import img1 from "../assets/Images/1.webp";
import img2 from "../assets/Images/2.webp";
import img3 from "../assets/Images/3.webp";
const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 80vw;
  display: flex;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontbig};
  font-family: "Kaushan Script";
  font-weight: 300;
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;
`;

const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;
`;
const Right = styled.div`
  width: 50%;
  position: relative;
  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 95%;
    bottom: 10%;
  }
  .small-img-2 {
    width: 40%;
    position: absolute;
    left: 80%;
    bottom: 30%;
  }
`;

const About = () => {
  return (
    <Section id="fixed-target">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About Us
      </Title>

      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus,
        quam sunt? Eius repudiandae, molestias consequuntur modi magnam
        perspiciatis ad est explicabo natus doloribus, dolorem eum laboriosam
        ex, fuga id deserunt?
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        amet eaque soluta debitis tempore? Ratione magnam nam, ex distinctio
        modi quibusdam dignissimos, rerum autem dolorum maiores, corrupti harum
        assumenda atque?
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptas
        enim nesciunt quas recusandae ipsam unde voluptatem facere aliquam
        saepe? Ducimus fugit dolore neque a nemo, autem quisquam.
      </Left>
      <Right>
        <img src={img1} alt="About Us" />
        <img
          data-scroll
          data-scroll-speed="5"
          src={img2}
          className="small-img-1"
          alt="About Us"
        />
        <img
          data-scroll
          data-scroll-speed="-2"
          src={img3}
          className="small-img-2"
          alt="About Us"
        />
      </Right>
    </Section>
  );
};

export default About;
