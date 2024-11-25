// @ts-nocheck

// TODO: add typings for veil
const {
    log
} = veil.util;

const {
    addCustomElement,
    removeCustomElement,
} = veil.settings;

export const init = () => {
    log("Example Plugin Initialized");

    addCustomElement({
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