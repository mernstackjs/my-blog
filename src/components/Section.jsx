import React, { useState } from "react";
import styled from "styled-components";
import { usePost } from "../context/PostContext";
const SectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 20px;

  @media (max-width: 750px) {
    width: 100%;
  }
`;
const Card = styled.div`
  background-color: white;
  width: 100%;
`;
const CardTop = styled.div`
  display: flex;
  flex-direction: column;
`;
const CardImage = styled.div`
  width: 100%;
`;
const CardDetails = styled.div`
  padding: 0 16px;
  margin-bottom: 20px;
`;
const CardImageInfo = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const CardInfo = styled.div`
  padding: 7px 16px;
  display: flex;
  gap: 10px;
  border-bottom: 1px solid black;
`;
const CardLeft = styled.div`
  width: 80%;
`;
const CardRight = styled.div`
  width: 20%;
`;
const CatStatus = styled.div`
  margin: 0;
  padding: 0;
  padding: 13px 30px;
`;

const Section = () => {
  const { Posts } = usePost();
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <SectionStyled>
      <Card>
        {Posts.filter((post) => post.cat === "Sport")
          .slice(0, 1)
          ?.map((post) => {
            return (
              <CardTop key={post.id}>
                <CatStatus>{post.cat}</CatStatus>
                <CardImage>
                  <img src={post.image} alt={post.id} />
                </CardImage>
                <CardDetails>
                  <div onClick={handleOpen}>
                    <h2>
                      {isOpen ? `${post.titel.slice(0, 50)}` : post.titel}
                    </h2>
                    <p>{isOpen ? `${post.disc.slice(0, 70)}...` : post.disc}</p>
                  </div>
                  <h5>{post.time}</h5>
                </CardDetails>
              </CardTop>
            );
          })}

        <hr />
        {Posts.filter((post) => post.cat === "Sport")
          .slice(1, 4)
          ?.map((post) => {
            return (
              <CardInfo key={post.id}>
                <CardLeft>
                  <div onClick={handleOpen}>
                    <h2>
                      {isOpen ? `${post.titel.slice(0, 50)}` : post.titel}
                    </h2>
                    <p>{isOpen ? `${post.disc.slice(0, 70)}...` : post.disc}</p>
                  </div>
                  <p>{post.time}</p>
                </CardLeft>
                <CardRight>
                  <CardImageInfo>
                    <img src={post.image} alt={post.id} />
                  </CardImageInfo>
                </CardRight>
              </CardInfo>
            );
          })}
        {Posts.filter((post) => post.cat === "Boorama")
          .slice(0, 1)
          ?.map((post) => {
            return (
              <CardTop key={post.id}>
                <CatStatus>{post.cat}</CatStatus>
                <CardImage>
                  <img src={post.image} alt={post.id} />
                </CardImage>
                <CardDetails>
                  <div onClick={handleOpen}>
                    <h2>
                      {isOpen ? `${post.titel.slice(0, 50)}` : post.titel}
                    </h2>
                    <p>{isOpen ? `${post.disc.slice(0, 70)}...` : post.disc}</p>
                  </div>
                  <h5>{post.time}</h5>
                </CardDetails>
              </CardTop>
            );
          })}

        <hr />
        {Posts.filter((post) => post.cat === "Boorama")
          .slice(1, 4)
          ?.map((post) => {
            return (
              <CardInfo key={post.id}>
                <CardLeft>
                  <h2>
                    {post.titel ? `${post.titel.slice(0, 50)}` : post.titel}
                  </h2>

                  <p>
                    {post.disc ? `${post.disc.slice(0, 70)}...` : post.disc}
                  </p>

                  <p>{post.time}</p>
                </CardLeft>
                <CardRight>
                  <CardImageInfo>
                    <img src={post.image} alt={post.id} />
                  </CardImageInfo>
                </CardRight>
              </CardInfo>
            );
          })}
        {Posts.filter((post) => post.cat === "Blog")
          .slice(0, 1)
          ?.map((post) => {
            return (
              <CardTop key={post.id}>
                <CatStatus>{post.cat}</CatStatus>
                <CardImage>
                  <img src={post.image} alt={post.id} />
                </CardImage>
                <CardDetails>
                  <h1>
                    {post.titel ? `${post.titel.slice(0, 50)}` : post.titel}
                  </h1>
                  <p>
                    {post.disc ? `${post.disc.slice(0, 70)}...` : post.disc}
                  </p>
                  <h5>{post.time}</h5>
                </CardDetails>
              </CardTop>
            );
          })}

        <hr />
        {Posts.filter((post) => post.cat === "Blog")
          .slice(1, 4)
          ?.map((post) => {
            return (
              <CardInfo key={post.id}>
                <CardLeft>
                  <h2>
                    {post.titel ? `${post.titel.slice(0, 50)}` : post.titel}
                  </h2>

                  <p>
                    {post.disc ? `${post.disc.slice(0, 70)}...` : post.disc}
                  </p>
                  <p>{post.time}</p>
                </CardLeft>
                <CardRight>
                  <CardImageInfo>
                    <img src={post.image} alt={post.id} />
                  </CardImageInfo>
                </CardRight>
              </CardInfo>
            );
          })}
        {Posts.filter((post) => post.cat === "Laascaanood")
          .slice(0, 1)
          ?.map((post) => {
            return (
              <CardTop key={post.id}>
                <CatStatus>{post.cat}</CatStatus>
                <CardImage>
                  <img src={post.image} alt={post.id} />
                </CardImage>
                <CardDetails>
                  <h1>
                    {post.titel ? `${post.titel.slice(0, 50)}` : post.titel}
                  </h1>
                  <p>
                    {post.disc ? `${post.disc.slice(0, 70)}...` : post.disc}
                  </p>
                  <h5>{post.time}</h5>
                </CardDetails>
              </CardTop>
            );
          })}
        {Posts.filter((post) => post.cat === "Laascaanood")
          .slice(1, 4)
          ?.map((post) => {
            return (
              <CardInfo key={post.id}>
                <CardLeft>
                  <h2>
                    {post.titel ? `${post.titel.slice(0, 50)}` : post.titel}
                  </h2>

                  <p>
                    {post.disc ? `${post.disc.slice(0, 70)}...` : post.disc}
                  </p>
                  <p>{post.time}</p>
                </CardLeft>
                <CardRight>
                  <CardImageInfo>
                    <img src={post.image} alt={post.id} />
                  </CardImageInfo>
                </CardRight>
              </CardInfo>
            );
          })}
        {Posts.filter((post) => post.cat === "Burco")
          .slice(0, 1)
          ?.map((post) => {
            return (
              <CardTop key={post.id}>
                <CatStatus>{post.cat}</CatStatus>
                <CardImage>
                  <img src={post.image} alt={post.id} />
                </CardImage>
                <CardDetails>
                  <h1>
                    {post.titel ? `${post.titel.slice(0, 50)}` : post.titel}
                  </h1>
                  <p>
                    {post.disc ? `${post.disc.slice(0, 70)}...` : post.disc}
                  </p>
                  <h5>{post.time}</h5>
                </CardDetails>
              </CardTop>
            );
          })}
        {Posts.filter((post) => post.cat === "Burco")
          .slice(1, 4)
          ?.map((post) => {
            return (
              <CardInfo key={post.id}>
                <CardLeft>
                  <h2>
                    {post.titel ? `${post.titel.slice(0, 50)}` : post.titel}
                  </h2>

                  <p>
                    {post.disc ? `${post.disc.slice(0, 70)}...` : post.disc}
                  </p>
                  <p>{post.time}</p>
                </CardLeft>
                <CardRight>
                  <CardImageInfo>
                    <img src={post.image} alt={post.id} />
                  </CardImageInfo>
                </CardRight>
              </CardInfo>
            );
          })}
        {Posts.filter((post) => post.cat === "Ceerigaabo")
          .slice(0, 1)
          ?.map((post) => {
            return (
              <CardTop key={post.id}>
                <CatStatus>{post.cat}</CatStatus>
                <CardImage>
                  <img src={post.image} alt={post.id} />
                </CardImage>
                <CardDetails>
                  <h1>
                    {post.titel ? `${post.titel.slice(0, 50)}` : post.titel}
                  </h1>
                  <p>
                    {post.disc ? `${post.disc.slice(0, 70)}...` : post.disc}
                  </p>
                  <h5>{post.time}</h5>
                </CardDetails>
              </CardTop>
            );
          })}
        {Posts.filter((post) => post.cat === "Ceerigaabo")
          .slice(1, 4)
          ?.map((post) => {
            return (
              <CardInfo key={post.id}>
                <CardLeft>
                  <h2>
                    {post.titel ? `${post.titel.slice(0, 50)}` : post.titel}
                  </h2>

                  <p>
                    {post.disc ? `${post.disc.slice(0, 70)}...` : post.disc}
                  </p>
                  <p>{post.time}</p>
                </CardLeft>
                <CardRight>
                  <CardImageInfo>
                    <img src={post.image} alt={post.id} />
                  </CardImageInfo>
                </CardRight>
              </CardInfo>
            );
          })}
        {Posts.filter((post) => post.cat === "News")
          .slice(0, 1)
          ?.map((post) => {
            return (
              <CardTop key={post.id}>
                <CatStatus>{post.cat}</CatStatus>
                <CardImage>
                  <img src={post.image} alt={post.id} />
                </CardImage>
                <CardDetails>
                  <h1>
                    {post.titel ? `${post.titel.slice(0, 50)}` : post.titel}
                  </h1>
                  <p>
                    {post.disc ? `${post.disc.slice(0, 70)}...` : post.disc}
                  </p>
                  <h5>{post.time}</h5>
                </CardDetails>
              </CardTop>
            );
          })}
        {Posts.filter((post) => post.cat === "News")
          .slice(1, 4)
          ?.map((post) => {
            return (
              <CardInfo key={post.id}>
                <CardLeft>
                  <h2>
                    {post.titel ? `${post.titel.slice(0, 50)}` : post.titel}
                  </h2>

                  <p>
                    {post.disc ? `${post.disc.slice(0, 70)}...` : post.disc}
                  </p>
                  <p>{post.time}</p>
                </CardLeft>
                <CardRight>
                  <CardImageInfo>
                    <img src={post.image} alt={post.id} />
                  </CardImageInfo>
                </CardRight>
              </CardInfo>
            );
          })}
        <hr />
      </Card>
    </SectionStyled>
  );
};

export default Section;
