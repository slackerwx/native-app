import React from "react";
import styled from "styled-components";
import normalize from "react-native-normalize";
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  Alert
} from "react-native";
import { BlurView } from "expo-blur";
import Success from "./Success";
import Loading from "./Loading";
import { Dimensions, Animated } from "react-native";
import { connect } from "react-redux";
import firebase from "./Firebase";

const screenHeight = Dimensions.get("window").height;

function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  return {
    closeLogin: () =>
      dispatch({
        type: "CLOSE_LOGIN"
      })
  };
}

class ModalLogin extends React.Component {
  state = {
    email: "",
    password: "",
    iconEmail: require("../assets/icon-email.png"),
    iconPassword: require("../assets/icon-password.png"),
    isSuccessful: false,
    isLoading: false,
    top: new Animated.Value(screenHeight),
    scale: new Animated.Value(1.3),
    translateY: new Animated.Value(0)
  };

  handleLogin = () => {
    console.log(this.state.email, this.state.password);

    this.setState({ isLoading: true });

    const email = this.state.email;
    const password = this.state.password;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        Alert.alert("Error", error.message);
      })
      .then(response => {
        this.setState({ isLoading: false });

        if (response) {
          this.setState({ isSuccessful: true });

          Alert.alert("Congrats", "You've logged in successfuly!");

          setTimeout(() => {
            Keyboard.dismiss();
            this.props.closeLogin();

            this.setState({ isLoading: false });
            this.setState({ isSuccessful: false });
          }, 1000);

          console.log(response.user);
        }
      });
  };

  tapBackground = () => {
    Keyboard.dismiss();
    this.props.closeLogin();
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

  componentDidUpdate() {
    if (this.props.action == "openLogin") {
      Animated.timing(this.state.top, {
        toValue: 0,
        duration: 0
      }).start();
      Animated.spring(this.state.scale, { toValue: 1 }).start();
      Animated.timing(this.state.translateY, { toValue: 0, duration: 0 });
    }

    if (this.props.action == "closeLogin") {
      setTimeout(() => {
        Animated.timing(this.state.top, {
          toValue: screenHeight,
          duration: 0
        }).start();
        Animated.spring(this.state.scale, { toValue: 1.3 }).start();
      }, 500);

      Animated.timing(this.state.translateY, {
        toValue: 1000,
        duration: 500
      }).start();
    }
  }
  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <TouchableWithoutFeedback onPress={this.tapBackground}>
          <BlurView
            tint="default"
            intensity={100}
            style={{ position: "absolute", width: "100%", height: "100%" }}
          />
        </TouchableWithoutFeedback>
        <AnimatedModal
          style={{
            transform: [
              { scale: this.state.scale },
              { translateY: this.state.translateY }
            ]
          }}
        >
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
        </AnimatedModal>
        <Success isActive={this.state.isSuccessful} />
        <Loading isActive={this.state.isLoading} />
      </AnimatedContainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalLogin);

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

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Modal = styled.View`
  width: ${normalize(335)};
  height: ${normalize(370)};
  border-radius: ${normalize(20)};
  background: white;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  align-items: center;
`;

const AnimatedModal = Animated.createAnimatedComponent(Modal);

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
