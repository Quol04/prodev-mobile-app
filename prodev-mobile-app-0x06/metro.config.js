const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
 
const config = getDefaultConfig(__dirname)
 
// Point NativeWind to the project's global CSS file. The styles file lives in
// ./styles/global.css so we must reference that path here (relative to repo root).
module.exports = withNativeWind(config, { input: './styles/global.css' })