/**
 * 配合npm scripts的命令使用
 * 备注：
 * 使用方式: yarn createPage --name=[PageName]
 * PageName的格式必须为大驼峰格式，形如:ForExample
 */
const path = require("path");
const fs = require("fs");

function pathResolve(pathName) {
  return path.resolve(__dirname, pathName);
}

function createPage(name) {
  const pagePath = pathResolve(`../src/pages/${name}`);
  const hooksPath = pathResolve(`../src/pages/${name}/hooks`);
  const hooksIndexPath = pathResolve(`../src/pages/${name}/hooks/index.ts`);
  const indexPath = pathResolve(`../src/pages/${name}/index.tsx`);
  const isExist = fs.existsSync(pagePath);
  if (isExist) {
    throw new Error(`页面${name}已存在!`);
  } else {
    try {
      // 创建页面组件文件夹
      fs.mkdirSync(pagePath);
      fs.writeFileSync(indexPath,"");
      fs.mkdirSync(hooksPath);
      fs.writeFileSync(hooksIndexPath,"");
    } catch (error) {
      console.log("error", error);
    }
  }
}

function initPage() {
  // 校验参数
  const arg = process.argv[2];
  if (!arg) {
    throw new Error(`命令参数输入有误!示例: yarn createPage --name=[PageName]`);
  }
  // 校验页面名称
  const pageName = ((arg.slice(2).split("=") || [])[1]) || "";
  const camelRule = /^([A-Z][a-z]+)+$/;
  if (!camelRule.test(pageName)) {
    throw new Error("页面名称输入有误!参数name的值必须为大驼峰格式，形如ForExample");
  }
  createPage(pageName);
}

initPage();
