import React from "react";
import styled from "styled-components";
import normalize from "react-native-normalize";

class Projectscreen extends React.Component {
  static navigationOptions = {
    title: "Projects"
  };

  render() {
    return (
      <Container>
        <Text>Projects Screen</Text>
      </Container>
    );
  }
}

export default Projectscreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: ${normalize(24)};
`;
