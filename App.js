import React from "react";
import styled from "styled-components/native";
import Card from "./components/Card";
import ContentCard from "./components/ContentCard";
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
              style={{ paddingBottom: 30 }}
            >
              {cards.map((card, index) => (
                <Card
                  key={index}
                  image={card.image}
                  title={card.title}
                  caption={card.caption}
                  logo={card.logo}
                  subtitle={card.subtitle}
                />
              ))}
            </ScrollView>
            <Subtitle> Content </Subtitle>
            {contents.map((content, index) => (
              <ContentCard
                key={index}
                image={content.image}
                title={content.title}
                subtitle={content.subtitle}
                logo={content.logo}
                author={content.author}
                avatar={content.avatar}
                caption={content.caption}
              />
            ))}
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

const cards = [
  {
    image: require("./assets/card_background.jpg"),
    title: "Styled Components",
    caption: "React Native",
    logo: require("./assets/logo-react.png"),
    subtitle: "Sections"
  },
  {
    image: require("./assets/card_background.jpg"),
    title: "Styled Components 2",
    caption: "React Native 2",
    logo: require("./assets/logo-react.png"),
    subtitle: "Sections 2"
  }
];

const contents = [
  {
    title: "This is a Content 1",
    subtitle: "Content subtitle 1",
    image: require("./assets/card_background.jpg"),
    logo: require("./assets/logo-react.png"),
    author: "Author",
    avatar: require("./assets/avatar-default.jpg"),
    caption: "This is a long line Content caption 1"
  },
  {
    title: "This is a a long line Content 2",
    subtitle: "Content subtitle 2",
    image: require("./assets/card_background.jpg"),
    logo: require("./assets/logo-react.png"),
    author: "Author 2",
    avatar: require("./assets/avatar-default.jpg"),
    caption: "Content caption 2"
  }
];
