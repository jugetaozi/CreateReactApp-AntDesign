const path = require('path');

module.exports = {
  presets: [
    "react-app"
  ],
  plugins: [
    [
      "import",
      {
        "libraryName": "antd",
        "style": true
      }
    ]
  ]
};
