import React from "react"
import styled from "styled-components"
import Card from "./Card"
const StyledRoot = styled.div`
  padding: 10px 12px;
`
const StyledContainer = styled.div`
  max-width: 550px;
  width: 100%;
  margin: auto;
`
const Parent = ({name, date, description, image, website}) => {
  return (
    <StyledRoot>
      <StyledContainer>
        <Card
          name={name}
          date={date}
          description={description}
          image={image}
          website={website}
        />
      </StyledContainer>
    </StyledRoot>
  )
}
export default Parent
