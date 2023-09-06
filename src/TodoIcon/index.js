import { ReactComponent as CheckSVG } from './circle.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import { ReactComponent as ActiveSVG } from './circle-check.svg';
import './TodoIcon.css';

/*const iconTypes ={
"check": (color) =><CheckSVG className='Icon-svg' fill={color}/>,
"delete": (color) => <DeleteSVG className='Icon-svg' fill={color}/>,
"active": (color) => <ActiveSVG className='Icon-svg' fill={color}/>
};*/

const iconTypes ={
    "check": <CheckSVG className='Icon-svg'/>,
    "activate": <ActiveSVG className='Icon-svg'/>,
    "delete": <DeleteSVG className='Icon-svg'/>,
    };

function TodoIcon({type, onClick}){
    return (
        <span className={`Icon Icon-${type}`} onClick={onClick}>            
            {iconTypes[type]}            
        </span>
    )
}

//{iconTypes[type](color)}

export { TodoIcon };