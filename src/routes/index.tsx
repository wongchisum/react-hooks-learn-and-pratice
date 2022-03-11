import {Home,UseAsyncDemo,UseEventListenerDemo,UseMountDemo,UseToggleDemo,UseUnmountDemo} from '../pages';

export const RouterConfig = [
   {path:"/",element:<Home/>},
   {path:"/use-async-demo",element:<UseAsyncDemo/>},
   {path:"/use-event-listener-demo",element:<UseEventListenerDemo/>},
   {path:"/use-mount-demo",element:<UseMountDemo/>},
   {path:"/use-toggle-demo",element:<UseToggleDemo/>},
   {path:"/use-unmount-demo",element:<UseUnmountDemo/>}
]
        