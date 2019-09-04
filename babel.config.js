module.exports = {
  presets: ["module:metro-react-native-babel-preset", "@babel/preset-env"],

  plugins: [
    "@babel/plugin-proposal-class-properties",

    "@babel/plugin-transform-runtime"
  ]
};
