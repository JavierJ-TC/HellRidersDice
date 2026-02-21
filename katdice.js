Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "katdice", name: "Kat Dice"}, false);
	dice3d.addDicePreset({
		type: "d8",
		labels: "",
		modelFile: "modules/hellridersdice/kat_d8.glb",
		system: "katdice"
	});
	dice3d.addDicePreset({
		type: "d20",
		labels: "",
		modelFile: "modules/hellridersdice/kat_d20.glb",
		system: "katdice"
	});
		
});