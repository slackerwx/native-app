import React from "react";
import styled from "styled-components/native";
import Card from "../components/Card";
import ContentCard from "../components/ContentCard";
import {
  ScrollView,
  SafeAreaView,
  Animated,
  Easing,
  StatusBar
} from "react-native";
import Menu from "../components/Menu";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native";

function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () =>
      dispatch({
        type: "OPEN_MENU"
      })
  };
}

class HomeScreen extends React.Component {
  state = {
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1)
  };

  componentDidUpdate() {
    this.toggleMenu();
  }

  componentDidMount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  toggleMenu = () => {
    if (this.props.action == "openMenu") {
      Animated.timing(this.state.scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.in()
      }).start();

      Animated.spring(this.state.opacity, {
        toValue: 0.5
      }).start();

      StatusBar.setBarStyle("light-content", true);
    }

    if (this.props.action == "closeMenu") {
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in()
      }).start();

      Animated.spring(this.state.opacity, {
        toValue: 1
      }).start();

      StatusBar.setBarStyle("dark-content", true);
    }
  };
  render() {
    return (
      <RootView>
        <Menu />
        <AnimatedContainer
          style={{
            transform: [{ scale: this.state.scale }],
            opacity: this.state.opacity
          }}
        >
          <SafeAreaView>
            <ScrollView style={{ height: "100%" }}>
              <TitleBar>
                <TouchableOpacity
                  onPress={this.props.openMenu}
                  style={{ position: "absolute", top: 0, left: 20 }}
                >
                  <Avatar source={require("../assets/avatar-default.jpg")} />
                </TouchableOpacity>
                <Title>Welcome Back,</Title>
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
        </AnimatedContainer>
      </RootView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const RootView = styled.View`
  background: black;
  flex: 1;
`;

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
  border-radius: 10px;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const cards = [
  {
    image: require("../assets/card_background.jpg"),
    title: "Styled Components",
    caption: "React Native",
    logo: require("../assets/logo-react.png"),
    subtitle: "Sections"
  },
  {
    image: require("../assets/card_background.jpg"),
    title: "Styled Components 2",
    caption: "React Native 2",
    logo: require("../assets/logo-react.png"),
    subtitle: "Sections 2"
  }
];

const contents = [
  {
    title: "This is a Content 1",
    subtitle: "Content subtitle 1",
    image: require("../assets/card_background.jpg"),
    logo: require("../assets/logo-react.png"),
    author: "Author",
    avatar: require("../assets/avatar-default.jpg"),
    caption: "This is a long line Content caption 1"
  },
  {
    title: "This is a a long line Content 2",
    subtitle: "Content subtitle 2",
    image: require("../assets/card_background.jpg"),
    logo: require("../assets/logo-react.png"),
    author: "Author 2",
    avatar: require("../assets/avatar-default.jpg"),
    caption: "Content caption 2"
  }
];
