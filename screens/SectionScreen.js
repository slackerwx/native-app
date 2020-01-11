import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, StatusBar } from "react-native";
import normalize from "react-native-normalize";

class SectionScreen extends React.Component {
  static navigationOptions = {
    // title: "Section"
    headerShown: false
  };

  componentDidMount() {
    StatusBar.setBarStyle("light-content", true);
  }

  componentWillUnmount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  render() {
    const { navigation } = this.props;
    const section = navigation.getParam("section");

    return (
      <Container>
        <StatusBar hidden />
        <Cover>
          <Image source={section.image} />
          <Wrapper>
            <Logo source={section.logo} />
            <Subtitle>{section.subtitle}</Subtitle>
          </Wrapper>
          <Title>{section.title}</Title>
          <Caption>{section.caption}</Caption>
        </Cover>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack();
          }}
          style={{
            position: "absolute",
            top: normalize(20),
            right: normalize(20)
          }}
        >
          <CloseView>
            <Ionicons
              name="ios-close"
              size={normalize(36)}
              style={{ marginTop: normalize(-2) }}
              color="#4775f2"
            />
          </CloseView>
        </TouchableOpacity>
      </Container>
    );
  }
}

export default SectionScreen;

const Container = styled.View`
  flex: 1;
`;

const Cover = styled.View`
  height: ${normalize(375)};
`;

const Image = styled.Image`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  background: #3c4560;
`;

const Wrapper = styled.View`
  flex-direction: row;
  position: absolute;
  top: ${normalize(40)};
  left: ${normalize(20)};
  align-items: center;
`;

const Logo = styled.Image`
  width: ${normalize(24)};
  height: ${normalize(24)};
`;

const Subtitle = styled.Text`
  font-size: ${normalize(15)};
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  margin-left: ${normalize(5)};
  text-transform: uppercase;
`;

const Title = styled.Text`
  font-size: ${normalize(24)};
  color: white;
  font-weight: bold;
  width: ${normalize(170)};
  position: absolute;
  top: ${normalize(78)};
  left: ${normalize(20)};
`;

const Caption = styled.Text`
  color: white;
  font-size: ${normalize(17)};
  position: absolute;
  bottom: ${normalize(20)};
  left: ${normalize(20)};
  max-width: ${normalize(300)};
`;

const CloseView = styled.View`
  width: ${normalize(32)};
  height: ${normalize(32)};
  background: white;
  border-radius: ${normalize(22)};
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
`;
