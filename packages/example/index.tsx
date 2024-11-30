// IMPORTANT!!
const {
    h,
    Fragment
} = veil.ui.preact;

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
    Button,
    TextBox,
    Toggle
} = veil.ui.components

const {
    version,    
} = veil.veil

const Page = () => {
    return (
        <div>
            <Text>Veil says hi! ;3 (v{version})</Text>
            <Button onClick={() => alert("Button clicked!")}>Click Me</Button>
            <TextBox placeholder="Enter some text..." />
            <Toggle label="Toggle me" />
        </div>
    )
}

export const init = () => {
    alert("Example Plugin Initialized");
    log("Example Plugin Initialized");

    addCustomElement({
        element: () => renderPreactInReact(Page),
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
