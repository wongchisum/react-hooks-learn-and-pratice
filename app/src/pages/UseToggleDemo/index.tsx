import react from 'react';
import {useToggle} from './hooks';

const UseToggleDemo = () => {
    const [open,toggleOpen] = useToggle(true);
    const [show,toggleShow] = useToggle(false);
    return (
        <div>
            <div>Hello toggle</div>
            <div>当前的状态:{open?"开" : "关"}</div>
            <button onClick={toggleOpen}>点击切换开关</button>

            <div>当前展示:{show?"是":"否"}</div>
            <button onClick={toggleShow}>点击切换开关</button>
            <div style={{background:"red",height:"200px",width:"200px",visibility:show?"visible":"hidden"}}>

            </div>
        </div>
    )
};

export default UseToggleDemo;