Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "wcube_fel", name: "Fel Dices"}, false);
	dice3d.addDicePreset({
		type: "d20",
		labels: "",
		modelFile: "modules/wcube/fel_d20.glb",
		system: "wcube"
	});
});