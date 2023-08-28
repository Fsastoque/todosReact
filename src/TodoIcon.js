import { ReactComponent as CheckSVG } from './circle.svg';
import { ReactComponent as DeleteSVG } from './circle-check.svg';
import './TodoIcon.css';

const iconTypes ={
"check": (color) =><CheckSVG className='Icon-svg' fill={color}/>,
"delete": (color) => <DeleteSVG className='Icon-svg' fill={color}/>
};

function TodoIcon({type, color}){
    return (
        <span className={`Icon Icon-${type}`}>
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon };