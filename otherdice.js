Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "otherdice", name: "Other Dice"}, false);
	dice3d.addDicePreset({
		type: "d6",
		labels: "",
		modelFile: "modules/hellridersdice/potion_d6.glb",
		system: "otherdice"
	});
		dice3d.addDicePreset({
		type: "d12",
		labels: "",
		modelFile: "modules/hellridersdice/blackholedice.glb",
		system: "otherdice"
	});
	dice3d.addDicePreset({
		type: "d20",
		labels: "",
		modelFile: "modules/hellridersdice/anim_dice.glb",
		system: "otherdice"
	});
		
});