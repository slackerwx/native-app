import React from "react";
import styled from "styled-components/native";
import normalize from "react-native-normalize";

const Card = props => (
  <Container style={{ elevation: 15 }}>
    <Cover>
      <Image source={props.image} />
      <Title>{props.title}</Title>
    </Cover>
    <Content>
      <Logo source={props.logo} />
      <Wrapper>
        <Caption>{props.caption}</Caption>
        <Subtitle>{props.subtitle}</Subtitle>
      </Wrapper>
    </Content>
  </Container>
);

export default Card;

const Content = styled.View`
  padding-left: ${normalize(20)};
  align-items: center;
  height: ${normalize(80)};
  flex-direction: row;
`;

const Logo = styled.Image`
  width: ${normalize(44)};
  height: ${normalize(44)};
`;

const Wrapper = styled.View`
  margin-left: ${normalize(10)};
`;

const Caption = styled.Text`
  color: #3c4560;
  font-size: ${normalize(20)};
  font-weight: 600;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: ${normalize(15)};
  text-transform: uppercase;
  margin-top: ${normalize(4)};
`;

const Container = styled.View`
  background: white;
  width: ${normalize(315)};
  height: ${normalize(280)};
  border-radius: ${normalize(14)};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  margin: ${normalize(20)}px ${normalize(10)}px;
`;

const Cover = styled.View`
  width: 100%;
  height: ${normalize(200)};
  border-top-left-radius: ${normalize(14)};
  border-top-right-radius: ${normalize(14)};
  overflow: hidden;
`;

const Image = styled.Image`
  background: black;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  color: white;
  font-size: ${normalize(24)};
  font-weight: bold;
  width: ${normalize(170)};
  margin-top: ${normalize(20)};
  margin-left: ${normalize(20)};
`;
