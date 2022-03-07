const path = require('path');
const fs = require('fs');
const pathResolve = (pathname) => path.resolve(__dirname, pathname);

/**
 * 简单实现约定是路由
 * 遍历 /src/pages 路径下的文件夹名称，过滤jsx? tsx?文件
 * 创建相应路由配置
 * 
 */

/**
 * 
 * @param {*} componentName :String
 * @returns string
 * 约定组件名为Home，对应的路由为/home
 * 按照组件名称进行驼峰命名的拆分，转化为小写，并用横杠连接
 * "Home" -> "/"
 * "UseBooleanDemo" -> "/use-boolean-demo"
 */

function getRoutePath (componentName) {
    const camelRule = /[A-Z][a-z]+/g
    let pathName = "";
    const prefix = "/";
    if (componentName !== 'Home') {
        pathName=  componentName.replace(camelRule,(text) => {
            return `${text.toLowerCase()}-`
        }).slice(0,-1);
    };
   
    return `${prefix}${pathName}`;
}

function getRoutes() {
    const pagePath = pathResolve("../src/pages")
    const isExist = fs.existsSync(pagePath);
    if (!isExist) return [];
    const dirs = fs.readdirSync(pagePath);
    if (Array.isArray(dirs)) {
        return dirs.reduce((prev,current) => {
            const ignoreRule = /.(j|t)sx?$/;
            if (ignoreRule.test(current)) {
                return [...prev]
            };
            return [...prev,current]
        },[])
    }
};

function createRouterConfig (routes) {
    const routerConfigPath = pathResolve("../src/routes/index.tsx");
    const isExist = fs.existsSync(routerConfigPath);
    if (!isExist) {
        // 需要新增文件夹或者文件
    } else {
        // 生成导入依赖的字符串
        const dependenciesText = `${routes.join(",")}`;
        // 生成路由配置文件
        const configList  = routes.reduce((prev,current) => {
            return [...prev,`   {path:"${getRoutePath(current)}",element:<${current}/>}`]
        },[]).join(",\n")
        // 生成导出配置的字符串
        const exportedText = `export const RouterConfig = [
${configList}
]
        `
const configText = `import {${dependenciesText}} from '../pages';\n
${exportedText}`
        try {
            fs.writeFileSync(routerConfigPath,configText)
        } catch(error) {
            console.log("error",error)
        }
    }
}

const routeList = getRoutes();
createRouterConfig(routeList);
