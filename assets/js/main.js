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
    let controller_inputs = riveInstance.stateMachineInputs("controller");
    lowEnergy = controller_inputs.find((item) => item.name === "lowEnergy");
    renewedEnergy = controller_inputs.find(
      (item) => item.name === "renewedEnergy"
    );
  },
});

hideButton.addEventListener("click", () => {
  lowEnergy.fire();
});

showButton.addEventListener("click", () => {
  renewedEnergy.fire();
});

export { lowEnergy, renewedEnergy };
