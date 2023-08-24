import { ReactComponent as CheckSVG } from './circle-check.svg'

function TodoIcon({type}){
    return (
        <span className={`Icon Icon-${type}`}>
            <CheckSVG/>
        </span>
    )
}

export { TodoIcon }