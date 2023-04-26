import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScore, setValue } from "./services/action";

const Home = (event) => {

    let dispatch = useDispatch();
    const score = useSelector(state => state.score);

    useEffect(() => {
        if (!score) {
            dispatch(setScore(0));
        }
    })

    const goToNext = () => {
        dispatch(setValue(1));
        dispatch(setScore(0));
        event.props.history.push('/levelOne');
    }
    return (
        <div className="App"><h3>MINE SWEEPER</h3>
            <div className='valueFlex flexDirection'>
                <pre><b>YOUR SCORE : {score}</b></pre>
                <button className="button" onClick={goToNext}>START</button>
            </div>
        </div>
    )
}

export default Home;