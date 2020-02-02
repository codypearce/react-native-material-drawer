# react-native-material-drawer

React Native Material Drawer for iOS, Android, Web, Electron, and other platforms. If you need more cross-platform material components, check out [Material Bread](https://github.com/codypearce/material-bread).

### [Storybook Demos](https://codypearce.github.io/react-native-material-drawer/.)

### Modal Drawer

<p>
<img height="600" src="https://i.imgur.com/TSIqKRM.gif" alt="adf" align="center">
<img height="600" src="https://i.imgur.com/1Ws0IVw.gif" alt="adf" align="center">
</p>

### Push Drawer

<p>
<img height="600" src="https://i.imgur.com/nIEd8Gu.gif" alt="adf" align="center">
<img height="600" src="https://i.imgur.com/IIiMtah.gif" alt="adf" align="center">
</p>

### Permanent

<p>
<img src="https://i.imgur.com/6Vb32ht.png" alt="adf" align="center">
</p>

### Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)

### Installation

```bash
npm install react-native-material-drawer --save
```

### Usage

```jsx
import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Drawer } from "react-native-material-drawer";

const styles = {
  container: {
    width: "100%",
    height: "100vh",
  },
  body: {
    backgroundColor: "#eee",
    height: "100vh",
  }
};

export default class App extends Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <Drawer
          open={this.state.isOpen}
          drawerContent={
            <View>
              <Text>Drawer Content</Text>
            </View>
          }
          onClose={() => this.setState({ isOpen: false })}
          animationTime={250}>
          <View style={styles.body}>
            <View
              style={{
                marginTop: 20,
                alignItems: "center",
                width: "100%",
                flex: 1
              }}>
              <Text style={{ marginBottom: 20 }}>This is a page</Text>
              <TouchableOpacity onPress={() => this.setState({ isOpen: !this.state.isOpen })}>
                <Text>Toggle</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Drawer>
      </View>
    );
  }
}

```

### Props

| Name                  | Description                                                                | Type   | Default      |
| --------------------- | -------------------------------------------------------------------------- | ------ | ------------ |
| animationTime         | How long the drawer animation should be, in ms                             | number | 200          |
| appbar                | Render appbar above drawer and page content for clipping purposes          | node   |              |
| contentContainerStyle | Styles wrapper around page content                                         | object |              |
| drawerContent         | Components displayed inside the drawer                                     | node   |              |
| drawerStyle           | Styles drawer                                                              | object |              |
| fullHeight            | Drawer takes up full height of the page so conent is not scrolled          | bool   | false        |
| onClose               | Callback when clicking outside of drawer                                   | func   |              |
| pageHeight            | Override calculated pageHeight, useful for demos as shown                  | number | ScreenHeight |
| pageWidth             | Override calculated pageWidth, useful pages that do not take up full space | number | ScreenWidth  |
| position              | Position of drawer                                                         | string | absolute     |
| direction             | Where should the drawer open: `left` or `right`                            | string | left         |
| open                  | Whether drawer is shown or hidden                                          | bool   | false        |
| style                 | Styles container element                                                   | object |              |
| scrim                 | Whether scrim is shown                                                     | bool   | true         |
| scrimColor            | Color of scrim                                                             | object | black        |
| scrimOpacity          | The ending opacity for the scim                                            | number | .4           |
| type                  | Determines the type of drawer from modal, push, and permanenent            | string | modal        |
| width                 | Specific drawer width in pixels, will override widthPercentage             | number | 240          |
| widthPercentage       | Percentage of pageWidth the drawer should take up                          | 0-1    | .40          |
