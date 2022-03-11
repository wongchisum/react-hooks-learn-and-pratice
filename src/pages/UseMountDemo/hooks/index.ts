import { useEffect } from "react";
type Callback = () => void;

/**
 * 
 * @param callback:回调函数 
 * @returns 
 * 
 * 用于在react组件挂载后调用函数，实现初始化的效果。
 * 一般可用于事件绑定，数据获取等操作
 */
export function useMount(callback:Callback){
    return useEffect(callback,[])
};