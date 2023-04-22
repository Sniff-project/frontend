const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@assets": path.resolve(__dirname, "src/Assets/"),
      "@components": path.resolve(__dirname, "src/Components/"),
      "@containers": path.resolve(__dirname, "src/Containers/"),
      "@contexts": path.resolve(__dirname, "src/Contexts/"),
      "@core": path.resolve(__dirname, "src/Core/"),
      "@pages": path.resolve(__dirname, "src/Pages/"),
      "@routes": path.resolve(__dirname, "src/Routes/"),
      "@styles": path.resolve(__dirname, "src/Styles/"),
    },
  },
};
