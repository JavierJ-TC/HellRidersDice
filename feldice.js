Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "feldice", name: "Fel Dices"}, false);
	dice3d.addDicePreset({
		type: "d20",
		labels: "",
		modelFile: "modules/feldice/fel_d20.glb",
		system: "feldice"
	});
});