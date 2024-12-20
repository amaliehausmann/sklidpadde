const hideButton = document.getElementById("hideTurtle");
const showButton = document.getElementById("showTurtle");

let lowEnergy;
let renewedEnergy;

const riveInstance = new rive.Rive({
  src: "assets/js/skildpadde.riv",
  canvas: document.getElementById("skildpadde"),
  autoplay: true,
  stateMachines: "controller",
  onLoad: () => {
    riveInstance.resizeDrawingSurfaceToCanvas();
  },
});

// get controller inputs
let controller_inputs = riveInstance.stateMachineInputs("controller");
console.log(controller_inputs);
lowEnergy = controller_inputs.find((item) => item.name === "lowEnergy");
renewedEnergy = controller_inputs.find((item) => item.name === "renewedEnergy");
console.log(lowEnergy);
console.log(renewedEnergy);

hideButton.addEventListener("click", () => {
  lowEnergy.fire();
});

showButton.addEventListener("click", () => {
  renewedEnergy.fire();
});

export {lowEnergy, renewedEnergy}
