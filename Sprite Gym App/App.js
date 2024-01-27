import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useState, useEffect, useRef } from "react";
import AnimatedSprite from "react-native-animated-sprite";
import gokuSprite from "./sprites/GokuSprites/Goku"; //change

import MyAnimationComponent from "./MyAnimateComponent";

export default function App() {
	const goku = {
		frames: [
			require("./sprites/GokuSprites/Goku_First_Iteration.png"),
			require("./sprites/GokuSprites/GokuSSJ-first_First_Iteration.png"),
			require("./sprites/GokuSprites/GokuSSJ-second_First_Iteration.png"),
			require("./sprites/GokuSprites/GokuSSJ-Last_First_Iteration.png"),
			require("./sprites/GokuSprites/GokuSSJ3-Last_First_Iteration.png"),
			require("./sprites/GokuSprites/GokuSSG_First_Iteration.png"),
			require("./sprites/GokuSprites/GokuMUI_First_Iteration.png"),
		],
	};

	const gokuSprite = {
		name: "goku-basic",
		size: { width: 220, height: 220 },
		animationTypes: [
			"TransformToSSJ",
			"TransformToSSJ3FromBase",
			"TransformToSSJ3FromSSJ",
			"TransformToSSG",
			"TransformToMUI",
			"RevertToBase",
		],
		frames: [
			require("./sprites/GokuSprites/Goku_First_Iteration.png"),
			require("./sprites/GokuSprites/GokuSSJ-first_First_Iteration.png"),
			require("./sprites/GokuSprites/GokuSSJ-second_First_Iteration.png"),
			require("./sprites/GokuSprites/GokuSSJ-Last_First_Iteration.png"),
			require("./sprites/GokuSprites/GokuSSJ3-Last_First_Iteration.png"),
			require("./sprites/GokuSprites/GokuSSG_First_Iteration.png"),
			require("./sprites/GokuSprites/GokuMUI_First_Iteration.png"),
		],
		animationIndex: function getAnimationIndex(animationType) {
			switch (animationType) {
				case "TransformToSSJ":
					return [0, 1, 2, 3];
				case "TransformToSSJ3FromBase":
					return [0, 1, 2, 3, 4];
				case "TransformToSSJ3FromSSJ":
					return [3, 4];
				case "TransformToSSG":
					return [0, 5];
				case "TransformToMUI":
					return [0, 6];
				case "RevertToBase":
					return [0];
			}
		},
	};

	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
			<StatusBar style="auto" />

			<MyAnimationComponent frames={goku.frames} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
