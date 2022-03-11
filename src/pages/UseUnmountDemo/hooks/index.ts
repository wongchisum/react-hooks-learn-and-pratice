import {useEffect} from 'react'
type Callback = () => any;

/**
 * 
 * @param callback 
 * 适用于卸载组件时进行操作
 */
export function useUnmount(callback:Callback) {
    useEffect(() => {
        return callback;
    })
}