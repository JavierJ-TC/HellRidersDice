Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "feldice", name: "Fel Dice"}, false);
	dice3d.addDicePreset({
		type: "d10",
		labels: "",
		modelFile: "modules/hellridersdice/fel_d10.glb",
		system: "feldice"
	});
	dice3d.addDicePreset({
		type: "d20",
		labels: "",
		modelFile: "modules/hellridersdice/fel_d20.glb",
		system: "feldice"
	});
});