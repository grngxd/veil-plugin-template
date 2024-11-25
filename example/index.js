// packages/example/index.ts
var {
  log
} = veil.util;
var {
  addCustomElement,
  removeCustomElement
} = veil.settings;
var init = () => {
  log("Example Plugin Initialized");
  addCustomElement({
    section: "veiliscool",
    searchableTitles: ["section"],
    label: "this is a section"
  });
};
var unload = () => {
  log("Example Plugin Unloaded");
  removeCustomElement({
    section: "veiliscool"
  });
};
export {
  init,
  unload
};
