import { useMemo } from "react";

type Config = {
    path: string;
    element: JSX.Element;
}[]

const RootPath = '/';

export function useLogic(config:Config) {
    return useMemo(() => {
        return config
        // 过滤首页展示
        .filter(item => item.path !== RootPath)
        .map((item,index:number) => {
            // 去除"/",转化为小驼峰格式
            const withoutDecorate = item
            .path.replace(/\//g,"").replace(/-/g," ")
            return {
                title:withoutDecorate,
                pathname:item.path
            }
        })
    },[config])
}