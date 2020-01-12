import React from "react";
import styled from "styled-components";
import normalize from "react-native-normalize";
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard
} from "react-native";
import { BlurView } from "expo-blur";
import Success from "./Success";
import Loading from "./Loading";

class ModalLogin extends React.Component {
  state = {
    email: "",
    password: "",
    iconEmail: require("../assets/icon-email.png"),
    iconPassword: require("../assets/icon-password.png"),
    isSuccessful: false,
    isLoading: false
  };

  handleLogin = () => {
    console.log(this.state.email, this.state.password);

    this.setState({ isLoading: true });

    setTimeout(() => {
      this.setState({ isLoading: false });
      this.setState({ isSuccessful: true });
    }, 2000);
  };

  tapBackground = () => {
    Keyboard.dismiss();
  };

  focusEmail = () => {
    this.setState({
      iconEmail: require("../assets/icon-email-animated.gif"),
      iconPassword: require("../assets/icon-password.png")
    });
  };

  focusPassword = () => {
    this.setState({
      iconEmail: require("../assets/icon-email.png"),
      iconPassword: require("../assets/icon-password-animated.gif")
    });
  };

  render() {
    return (
      <Container>
        <TouchableWithoutFeedback onPress={this.tapBackground}>
          <BlurView
            tint="default"
            intensity={100}
            style={{ position: "absolute", width: "100%", height: "100%" }}
          />
        </TouchableWithoutFeedback>
        <Modal>
          <Logo source={require("../assets/logo-react.png")} />
          <Text>Login Screen</Text>
          <TextInput
            onChangeText={email => this.setState({ email })}
            placeholder="Email"
            value={this.state.email}
            keyboardType="email-address"
            onFocus={this.focusEmail}
          />
          <IconEmail source={this.state.iconEmail} />
          <TextInput
            onChangeText={password => this.setState({ password })}
            placeholder="Password"
            value={this.state.password}
            secureTextEntry={true}
            onFocus={this.focusPassword}
          />
          <IconPassword source={this.state.iconPassword} />
          <TouchableOpacity onPress={this.handleLogin}>
            <ButtonView>
              <ButtonText>Log In</ButtonText>
            </ButtonView>
          </TouchableOpacity>
        </Modal>
        <Success isActive={this.state.isSuccessful} />
        <Loading isActive={this.state.isLoading} />
      </Container>
    );
  }
}

export default ModalLogin;

const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  justify-content: center;
  align-items: center;
`;

const Modal = styled.View`
  width: ${normalize(335)};
  height: ${normalize(370)};
  border-radius: ${normalize(20)};
  background: white;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  align-items: center;
`;

const Logo = styled.Image`
  width: ${normalize(44)};
  height: ${normalize(44)};
  margin-top: ${normalize(50)};
`;

const Text = styled.Text`
  margin-top: ${normalize(20)};
  font-size: ${normalize(13)};
  font-weight: 600;
  text-transform: uppercase;
  width: ${normalize(160)};
  color: #b8bece;
  text-align: center;
`;

const IconEmail = styled.Image`
  width: ${normalize(24)};
  height: ${normalize(16)};
  position: absolute;
  top: ${normalize(165)};
  left: ${normalize(31)};
`;

const TextInput = styled.TextInput`
  border: 1px solid #dbdfea;
  width: ${normalize(295)};
  height: ${normalize(44)};
  border-radius: ${normalize(10)};
  font-size: ${normalize(17)};
  color: #3c4560;
  padding-left: ${normalize(44)};
  margin-top: ${normalize(20)};
`;

const IconPassword = styled.Image`
  width: ${normalize(18)};
  height: ${normalize(24)};
  position: absolute;
  top: ${normalize(225)};
  left: ${normalize(35)};
`;

const ButtonView = styled.View`
  background: #5263ff;
  width: ${normalize(295)};
  height: ${normalize(50)};
  justify-content: center;
  align-items: center;
  border-radius: ${normalize(10)};
  margin-top: ${normalize(20)};
  box-shadow: 0 10px 20px #c2cbff;
`;

const ButtonText = styled.Text`
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  font-size: ${normalize(20)};
`;
