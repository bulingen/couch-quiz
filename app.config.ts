import "ts-node/register"; // Add this to import TypeScript files
import { ExpoConfig } from "expo/config";

const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return "com.bulingen.couchquiz.dev";
  }

  if (IS_PREVIEW) {
    return "com.bulingen.couchquiz.preview";
  }

  return "com.bulingen.couchquiz";
};

const getAppName = () => {
  if (IS_DEV) {
    return "Couch Quiz (Dev)";
  }

  if (IS_PREVIEW) {
    return "Couch Quiz (Preview)";
  }

  return "Couch Quiz";
};

const config: ExpoConfig = {
  name: getAppName(),
  slug: "couch-quiz",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: getUniqueIdentifier(),
  },
  android: {
    package: getUniqueIdentifier(),
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  web: {
    favicon: "./assets/favicon.png",
    bundler: "metro",
  },
  plugins: ["expo-router"],
  scheme: "couch-quiz",
  extra: {
    eas: {
      projectId: "8ea21185-cb91-4116-aea3-c2cc317f8fa4",
    },
  },
  owner: "bulingen",
};

export default config;
