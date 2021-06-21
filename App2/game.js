import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Header from "./components/header.js";
import StartGame from "./components/startGame.js";
import GameStart from "./components/GameStart.js";

class Game extends Component {
  constructor() {
    super();
    this.state = {
      start: 0,
    };
  }

  startPrediction() {
    this.setState({
      start: 1,
    });
  }

  render() {
    return (
      <View style={styles.screen}>
        {this.state.start == 0 ? (
          <>
            <StartGame start={() => this.startPrediction()} />
          </>
        ) : (
          <GameStart max={99} min={1} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default Game;
