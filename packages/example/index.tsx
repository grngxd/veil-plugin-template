// @ts-nocheck

// TODO: add typings for veil
const {
    log
} = veil.util;

const {
    addCustomElement,
    removeCustomElement,
} = veil.settings;

const {
    renderPreactInReact
} = veil.ui.bridge;

const {
    Text,
} = veil.ui.components

const VeilIsCool = () => {
    return (
        <Text>Veil is cool!</Text>
    )
}

export const init = () => {
    alert("Example Plugin Initialized");
    log("Example Plugin Initialized");

    addCustomElement({
        element: () => renderPreactInReact(VeilIsCool),
        section: "veiliscool",
        searchableTitles: ["section"],
        label: "this is a section",
    });
};

export const unload = () => {
    alert("Example Plugin Unloaded");
    log("Example Plugin Unloaded");

    removeCustomElement({
        section: "veiliscool"
    })
};
