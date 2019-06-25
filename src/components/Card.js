import React from "react"
import styled from "styled-components"
import { Link } from "gatsby";

const StyledContainer = styled.div`
  /* border: 1px solid black; */
  padding: 1px 12px 18px;
  background: black;
  height: 800px;
`
const Name = styled.h2`
  color: #fff;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`
const Date = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`
const Description = styled.p`
  color: #fff;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`

const StyledImage = styled.img`
  text-align: center;
  width: 200px;
`

const Card = ({ name, date, description, image, website }) => (
  <StyledContainer>
    {website ? <a href={website}><Name>{name}</Name></a> : <Name>{name}</Name>}
    <Date>{date}</Date>
    <Description>{description}</Description>
    <StyledImage src={image} />
  </StyledContainer>
)
export default Card
