import { useSelector, useDispatch } from "react-redux"
import {increment, decrement} from './../actions/countAction' 


function Count() {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()

    const handleUp = () => {
        dispatch(increment(1))
    }
    
    const handleDown = () => {
        dispatch(decrement(1))
    }

    return (
        <div>
            <h1>Count</h1>
            <p>Value: {count}</p>
            <button onClick={handleUp}>Up</button>
            <button onClick={handleDown}>Down</button>
        </div>
    )
}

export default Count