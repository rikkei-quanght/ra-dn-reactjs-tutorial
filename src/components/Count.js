import {useSelector, useDispatch} from 'react-redux'

export default function Count() {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch();

    // Tăng count thêm 1 giá trị
    const handleUp = () => {
        dispatch({
            type: 'UP_COUNT',
            payload: 1
        });
    }

    // Giảm count xuống 1 giá trị
    const handleDown = () => {
        dispatch({
            type: 'DOWN_COUNT',
            payload: 1
        });
    }

    return (
        <div>
            <h1>Count component</h1>
            <p>{count}</p>
            <button onClick={handleUp}>Up</button>
            <button onClick={handleDown}>Down</button>
        </div>
    )
}