const path = require("path");

module.exports = function override(config) {
  // Добавляем псевдонимы для путей
  config.resolve.alias = {
    "@assets": path.resolve(__dirname, "src/Assets/"),
    "@components": path.resolve(__dirname, "src/Components/"),
    "@containers": path.resolve(__dirname, "src/Containers/"),
    "@core": path.resolve(__dirname, "src/Core/"),
    "@pages": path.resolve(__dirname, "src/Pages/"),
    "@routes": path.resolve(__dirname, "src/Routes/"),
    "@styles": path.resolve(__dirname, "src/Styles/"),
  };
  return config;
};
