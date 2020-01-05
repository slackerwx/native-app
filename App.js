import React from "react";
import styled from "styled-components/native";
import Card from "./components/Card";
import { ScrollView, SafeAreaView } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <SafeAreaView>
          <ScrollView style={{ height: "100%" }}>
            <TitleBar>
              <Avatar source={require("./assets/avatar-default.jpg")} />
              <Title>Welcome back,</Title>
              <Name>User</Name>
            </TitleBar>
            <Subtitle>Styled subtitle</Subtitle>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Card
                image={require("./assets/card_background.jpg")}
                title="Styled Components"
                caption="React Native"
                logo={require("./assets/logo-react.png")}
                subtitle="Sections"
              />
              <Card
                image={require("./assets/card_background.jpg")}
                title="Styled Components"
                caption="React Native"
                logo={require("./assets/logo-react.png")}
                subtitle="Sections"
              />
              <Card
                image={require("./assets/card_background.jpg")}
                title="Styled Components"
                caption="React Native"
                logo={require("./assets/logo-react.png")}
                subtitle="Sections"
              />
              <Card
                image={require("./assets/card_background.jpg")}
                title="Styled Components"
                caption="React Native"
                logo={require("./assets/logo-react.png")}
                subtitle="Sections"
              />
            </ScrollView>
          </ScrollView>
        </SafeAreaView>
      </Container>
    );
  }
}

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 50px;
  text-transform: uppercase;
`;

const Container = styled.View`
  background: #f0f3f5;
  flex: 1;
`;
