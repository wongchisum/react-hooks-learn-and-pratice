import {useEffect,useState} from 'react';
type Service<T> = Promise<T>|(() => Promise<T>);

function isPromise<T>(target?:any):target is Promise<T> {
    return target instanceof Promise;
};

function isFn(target?:any):target is Function {
    return typeof target === 'function';
}

export function useAsync<T,U>(service:Service<T>,immediately=true) {
    const [loading,setLoading] = useState(false);
    const [data,setData] = useState<T|null>(null);
    const [error,setError] = useState<U|null>(null);

    const requestService = () => {
        if (immediately)  {
            // 立即发起请求
            const promise = isFn(service) ? (service()) : (isPromise(service) && service);
            if (promise) {
                setLoading(true)
                promise.then((result:T) => {
                    setData(result)
                }).catch((err:U) => {
                    setError(err)
                }).finally(() => {
                    setLoading(false);
                })
            }
        }
    }

    useEffect(() => {
        requestService();
    },[]);


    return {
        data,
        loading,
        error
    }
}