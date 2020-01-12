import React from "react";
import styled from "styled-components/native";
import Card from "../components/Card";
import ContentCard from "../components/ContentCard";
import {
  ScrollView,
  SafeAreaView,
  Animated,
  Easing,
  StatusBar,
  Platform
} from "react-native";
import Menu from "../components/Menu";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native";
import Avatar from "../components/Avatar";
import ModalLogin from "../components/ModalLogin";
import normalize from "react-native-normalize";

function mapStateToProps(state) {
  return { action: state.action, name: state.name };
}

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () =>
      dispatch({
        type: "OPEN_MENU"
      }),
    openLogin: () =>
      dispatch({
        type: "OPEN_LOGIN"
      })
  };
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerShown: false
  };

  state = {
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1)
  };

  componentDidUpdate() {
    this.toggleMenu();
  }

  componentDidMount() {
    StatusBar.setBarStyle("dark-content", true);

    if (Platform.OS == "android") StatusBar.setBarStyle("light-content".true);
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
                  onPress={this.props.openLogin}
                  style={{ position: "absolute", top: 0, left: normalize(20) }}
                >
                  <Avatar />
                </TouchableOpacity>
                <Title>Welcome Back,</Title>
                <Name>{this.props.name}</Name>
              </TitleBar>
              <Subtitle>{"Styled subtitle".toUpperCase()}</Subtitle>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ paddingBottom: normalize(10) }}
              >
                {cards.map((card, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      this.props.navigation.push("Section", {
                        section: card
                      });
                    }}
                  >
                    <Card
                      image={card.image}
                      title={card.title}
                      caption={card.caption}
                      logo={card.logo}
                      subtitle={card.subtitle.toUpperCase()}
                    />
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <Subtitle> {"Content".toUpperCase()} </Subtitle>
              <ContentCardContainer>
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
              </ContentCardContainer>
            </ScrollView>
          </SafeAreaView>
        </AnimatedContainer>
        <ModalLogin />
      </RootView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const ContentCardContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: ${normalize(10)};
  margin-top: ${normalize(10)};
`;

const RootView = styled.View`
  background: black;
  flex: 1;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: ${normalize(50)};
  padding-left: ${normalize(80)};
`;

const Title = styled.Text`
  font-size: ${normalize(16)};
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: ${normalize(20)};
  color: #3c4560;
  font-weight: bold;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: ${normalize(15)};
  margin-left: ${normalize(20)};
  margin-top: ${normalize(40)};
  text-transform: uppercase;
`;

const Container = styled.View`
  background: #f0f3f5;
  flex: 1;
  border-top-left-radius: ${normalize(10)};
  border-top-right-radius: ${normalize(10)};
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
  },
  {
    image: require("../assets/card_background.jpg"),
    title: "Styled Components 3",
    caption: "React Native 3",
    logo: require("../assets/logo-react.png"),
    subtitle: "Sections 3"
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
  },
  {
    title: "This is a a long line Content 3",
    subtitle: "Content subtitle 3",
    image: require("../assets/card_background.jpg"),
    logo: require("../assets/logo-react.png"),
    author: "Author 3",
    avatar: require("../assets/avatar-default.jpg"),
    caption: "Content caption 3"
  }
];
