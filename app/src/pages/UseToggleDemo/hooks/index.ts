import {useCallback, useState} from 'react';

type Handler = () => void;
type Result = [boolean,Handler];

/**
 * 
 * @param initState:boolean 初始值
 * @returns [state:boolean,updater:Handler] 
 * 返回一个元组，第一个元素为当前状态，第二个元素是一个回调函数，用于更新状态
 * 
 * 应用场景：需要切换状态，且状态场景比较单一，如：模态框开关/抽屉开关、控制元素显示隐藏
 */

export const useToggle = (initState=false):Result => {
    const [state,setState] = useState(initState)
    /**
     * 实现状态切换(布尔值取反)
     * 使用useCall包裹，防止在重新渲染的时候，执行hooks是再次创建函数
     */
    const toggle:Handler = useCallback(() => {
        setState(prevState => !prevState)
    },[])
    return [state,toggle];
}