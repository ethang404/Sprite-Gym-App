import React, { useState, useEffect } from "react";
import { Animated, TouchableOpacity, Image, Button } from "react-native";

export default function MyAnimationComponent({ frames }) {
	//simply going to display various PNG's on screen
	const [frameIndex, setFrameIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			// Update the frame index to the next one
			setFrameIndex((prevIndex) => {
				const nextIndex = (prevIndex + 1) % frames.length;

				console.log("index: " + nextIndex);
				console.log("max length: " + frames.length);
				if (nextIndex + 1 === frames.length) {
					clearInterval(intervalId); // Stop the interval when reaching the last frame
				}

				if (nextIndex === 0) {
					clearInterval(intervalId); // Stop the interval when reaching the first frame again
				}

				return nextIndex;
			});
		}, 2000);
	}, []);

	return (
		<TouchableOpacity onPress={() => console.log("I be clicked!")}>
			<Animated.View>
				<Image
					source={frames[frameIndex]}
					style={{ width: 100, height: 100 }} // Adjust width and height as needed
				/>
			</Animated.View>

			<Button onPress={() => setFrameIndex((prevVal) => prevVal + 1)} title="Click me to go next" />
			<Button onPress={() => setFrameIndex(0)} title="Click me to go back" />
		</TouchableOpacity>
	);
}
