import React from "react";
import styled from "styled-components";
import normalize from "react-native-normalize";

class CoursesScreen extends React.Component {
  static navigationOptions = {
    title: "Courses"
  };

  render() {
    return (
      <Container>
        <Text>Courses Screen</Text>
      </Container>
    );
  }
}

export default CoursesScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: ${normalize(24)};
`;
