import {useAsync} from './hooks'

const mockSuccessFnService = () => Promise.resolve("200 ok")
const mockFailFnService = () => Promise.reject("500 error");

const UseAsyncDemo = () => {
    const {data,loading} = useAsync<string,unknown>(mockSuccessFnService);
    const {error:reason} = useAsync<string,unknown>(mockFailFnService)
    return (
        <div>
            <div>异步请求成功示例</div>
            {
                !loading && data && (
                    <div>Success:{data}</div>
                )
            }

            <div>异步请求失败示例</div>
            {
                !loading && reason && (
                    <div>Fail:{reason}</div>
                )
            }
        </div>
    )
};

export default UseAsyncDemo;