import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import normalize from "react-native-normalize";

const screenWidth = Dimensions.get("window").width;

function getContentWidth(screenWidth) {
  var cardWidth = screenWidth - 40;

  if (screenWidth > 768) {
    cardWidth = (screenWidth - 60) / 2;
  }

  if (screenWidth > 1024) {
    cardWidth = (screenWidth - 80) / 3;
  }

  return cardWidth;
}

class ContentCard extends React.Component {
  state = {
    cardWidth: getContentWidth(screenWidth)
  };

  componentDidMount() {
    Dimensions.addEventListener("change", this.adaptLayout);
  }

  adaptLayout = dimensions => {
    this.setState({
      cardWidth: getContentWidth(dimensions.window.width)
    });
  };

  render() {
    return (
      <Container style={{ width: this.state.cardWidth }}>
        <Cover>
          <Image source={this.props.image} />
          <Logo source={this.props.logo} resizeMode="contain" />
          <Subtitle>{this.props.subtitle}</Subtitle>
          <Title>{this.props.title}</Title>
        </Cover>
        <Content>
          <Avatar source={this.props.avatar} />
          <Caption>{this.props.caption}</Caption>
          <Author>Taught by {this.props.author}</Author>
        </Content>
      </Container>
    );
  }
}

export default ContentCard;

const Container = styled.View`
  width: ${normalize(335)};
  height: ${normalize(335)};
  background: white;
  border-radius: ${normalize(14)};
  box-shadow: 0 ${normalize(10)}px ${normalize(20)}px rgba(0, 0, 0, 0.15);
  margin: ${normalize(10)}px ${normalize(10)}px;
`;

const Cover = styled.View`
  height: ${normalize(260)};
  overflow: hidden;
  border-top-right-radius: ${normalize(14)};
  border-top-left-radius: ${normalize(14)};
  justify-content: flex-end;
`;

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Logo = styled.Image`
  width: ${normalize(48)};
  height: ${normalize(48)};
  position: absolute;
  top: ${normalize(90)};
  left: 50%;
  margin-left: ${normalize(-24)};
`;

const Content = styled.View`
  padding-left: ${normalize(62)};
  justify-content: center;
  height: ${normalize(75)};
`;

const Avatar = styled.Image`
  width: ${normalize(32)};
  height: ${normalize(32)};
  position: absolute;
  top: ${normalize(20)};
  left: ${normalize(20)};
  border-radius: ${normalize(16)};
`;

const Caption = styled.Text`
  font-size: ${normalize(14)};
  color: #3c4560;
  font-weight: 500;
  max-width: ${normalize(260)};
`;

const Author = styled.Text`
  font-size: ${normalize(13)};
  color: #b8bece;
  font-weight: 500;
  margin-top: ${normalize(4)};
`;

const Title = styled.Text`
  color: white;
  font-size: ${normalize(24)};
  font-weight: 600;
  margin-top: ${normalize(4)};
  width: ${normalize(170)};
  margin-bottom: ${normalize(20)};
  margin-left: ${normalize(20)};
`;

const Subtitle = styled.Text`
  font-size: ${normalize(15)};
  text-transform: uppercase;
  font-weight: 500;
  margin-left: ${normalize(20)};
  color: rgba(255, 255, 255, 0.8);
`;
