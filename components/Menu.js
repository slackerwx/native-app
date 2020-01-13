import React from "react";
import styled from "styled-components";
import {
  Animated,
  TouchableOpacity,
  Dimensions,
  AsyncStorage
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MenuItem from "./MenuItem";
import { connect } from "react-redux";
import normalize from "react-native-normalize";
const screenWidth = Dimensions.get("window").width;
var cardWidth = screenWidth;
if (screenWidth > 500) {
  cardWidth = 500;
}

function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  return {
    closeMenu: () =>
      dispatch({
        type: "CLOSE_MENU"
      }),
    updateName: name => {
      dispatch({
        type: "UPDATE_NAME",
        name
      });
    }
  };
}

const screenHeight = Dimensions.get("window").height;

class Menu extends React.Component {
  state = {
    top: new Animated.Value(500)
  };

  componentDidMount() {
    this.toggleMenu();
  }

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.action == "closeMenu") {
      // Close
      Animated.spring(this.state.top, {
        toValue: screenHeight
      }).start();
    }

    if (this.props.action == "openMenu") {
      // Open
      Animated.spring(this.state.top, {
        toValue: 54
      }).start();
    }
  };

  handleMenu = index => {
    if (index === 3) {
      this.props.closeMenu();
      AsyncStorage.clear();
      this.props.updateName();
    }
  };
  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <Cover>
          <Image source={require("../assets/card_background.jpg")} />
          <Title>User</Title>
          <Subtitle>Subtitle</Subtitle>
        </Cover>
        <TouchableOpacity
          onPress={this.props.closeMenu}
          style={{
            position: "absolute",
            top: normalize(120),
            left: "50%",
            marginLeft: normalize(-22),
            zIndex: 1
          }}
        >
          <CloseView>
            <Ionicons name="ios-close" size={normalize(44)} color="#546bfb" />
          </CloseView>
        </TouchableOpacity>

        <Content>
          {items.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                this.handleMenu(index);
              }}
            >
              <MenuItem
                key={index}
                icon={item.icon}
                title={item.title}
                text={item.text}
              />
            </TouchableOpacity>
          ))}
        </Content>
      </AnimatedContainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

const Container = styled.View`
  position: absolute;
  background: white;
  width: ${cardWidth};
  align-self: center;
  height: 100%;
  z-index: 100;
  border-radius: ${normalize(10)};
  overflow: hidden;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: ${normalize(142)};
  background: black;
  align-items: center;
  justify-content: center;
`;

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  font-size: ${normalize(24)};
  color: white;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  font-size: ${normalize(14)};
  color: rgba(255, 255, 255, 0.5);
  margin-top: ${normalize(8)};
`;

const CloseView = styled.View`
  width: ${normalize(44)};
  height: ${normalize(44)};
  border-radius: ${normalize(22)};
  background: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const Content = styled.View`
  height: ${screenHeight};
  background: #f0f3f5;
  padding: ${normalize(50)}px;
`;

const items = [
  {
    icon: "ios-settings",
    title: "Account",
    text: "settings"
  },
  {
    icon: "ios-card",
    title: "Billing",
    text: "payments"
  },
  {
    icon: "ios-compass",
    title: "Learn React",
    text: "start course"
  },
  {
    icon: "ios-exit",
    title: "Log out",
    text: "see you soon!"
  }
];
