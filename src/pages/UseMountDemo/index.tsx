import {useMount} from './hooks';

export default function UseMountDemo() {
     useMount(() => {
         console.log("Mounted！")
     });

     return <div>测试一下mount,可以查看控制台信息</div>
}