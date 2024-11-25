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

export const init = () => {
    log("Example Plugin Initialized");

    addCustomElement({
        element: renderPreactInReact(() => (<Text>Veil is cool</Text>)),
        section: "veiliscool",
        searchableTitles: ["section"],
        label: "this is a section",
    });
};

export const unload = () => {
    log("Example Plugin Unloaded");

    removeCustomElement({
        section: "veiliscool"
    })
};