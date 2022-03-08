const path = require("path");

module.exports = {
  /**
   *
   * @param {*} relativePath:string
   * @returns string
   * 转化相对路径为绝对路径
   */
  pathResolve: (relativePath) => {
    return path.resolve(__dirname, relativePath);
  },
};
