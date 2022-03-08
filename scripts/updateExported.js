const fs = require("fs");
const { pathResolve } = require("./helper");

/**
 * 用于更新src/pages/index的文件导出模板
 */

// pages文件夹相对路径
const PageFloderRelativePath = "../src/pages";
// pages入口文件的相对路径
const PageIndexRelativePath = "../src/pages/index.ts";

// 根据名称创建模板
function createExportedTemplate(pages) {
  if (Array.isArray(pages)) {
    const templateText = pages.reduce((prev, current) => {
      return `${prev}export {default as ${current}} from './${current}';\n`;
    }, "");

    return templateText;
  }
}

// 获取所有页面的名称
function readPages() {
  const pagePath = pathResolve(PageFloderRelativePath);
  const isExist = fs.existsSync(pagePath);
  if (!isExist) return [];
  const dirs = fs.readdirSync(pagePath);
  if (Array.isArray(dirs)) {
    return dirs.reduce((prev, current) => {
      const ignoreRule = /.(j|t)sx?$/;
      if (ignoreRule.test(current)) {
        return [...prev];
      }
      return [...prev, current];
    }, []);
  }
}

// 重写文件
function overrideExported(text) {
  const routerConfigPath = pathResolve(PageIndexRelativePath);
  fs.writeFileSync(routerConfigPath, text);
}

const pages = readPages();
const text = createExportedTemplate(pages);
overrideExported(text);
