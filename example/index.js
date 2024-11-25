// packages/example/index.ts
var {
  log
} = veil.util;
var {
  addCustomElement,
  removeCustomElement
} = veil.settings;
var init = () => {
  alert("Example Plugin Initialized");
  log("Example Plugin Initialized");
  addCustomElement({
    section: "veiliscool",
    searchableTitles: ["section"],
    label: "this is a section"
  });
};
var unload = () => {
  alert("Example Plugin Unloaded");
  log("Example Plugin Unloaded");
  removeCustomElement({
    section: "veiliscool"
  });
};
export {
  init,
  unload
};
