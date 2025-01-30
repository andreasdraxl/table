/* eslint-disable no-alert */
import * as BUI from "@thatopen/ui";

BUI.Manager.init();

export const Checkbox = BUI.Checkbox;

const checkbox = document.body.querySelector<BUI.Checkbox>("bim-checkbox")!;
checkbox.addEventListener("change", () => {
  const { checked } = checkbox;
  alert(checked ? "You want BIM Tiles! :)" : "You don't want BIM Tiles :(");
});