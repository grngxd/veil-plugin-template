// packages/example/index.tsx
var {
  log
} = veil.util;
var {
  addCustomElement,
  removeCustomElement
} = veil.settings;
var {
  renderPreactInReact
} = veil.ui.bridge;
var {
  Text
} = veil.ui.components;
var init = () => {
  alert("Example Plugin Initialized");
  log("Example Plugin Initialized");
  addCustomElement({
    element: renderPreactInReact(() => /* @__PURE__ */ h(Text, null, "Veil is cool")),
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
