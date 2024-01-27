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
		require("./Goku_First_Iteration.png"),
		require("./GokuSSJ-first_First_Iteration.png"),
		require("./GokuSSJ-second_First_Iteration.png"),
		require("./GokuSSJ-Last_First_Iteration.png"),
		require("./GokuSSJ3-Last_First_Iteration.png"),
		require("./GokuSSG_First_Iteration.png"),
		require("./GokuMUI_First_Iteration.png"),
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

export default gokuSprite;
