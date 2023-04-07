const exclusionList = require("metro-config/src/defaults/exclusionList");

module.exports = {
  resolver: {
    blockList: exclusionList([/#current-cloud-backend\/.*/]),
  },
};
