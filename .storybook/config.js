import { configure, setAddon, addParameters } from "@storybook/react";

addParameters({
  options: {
    showPanel: true,
    panelPosition: "bottom",
    isToolshown: true,

    name: "Material Drawers"
  },

  viewport: {}
});

function loadStories() {
  require("../storybook/stories");
}

configure(loadStories, module);
