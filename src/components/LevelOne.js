import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setScore, setValue } from '../services/action';
import { array, ShowHide, shuffle } from '../utils';

const LevelOne = (event) => {

    const dispatch = useDispatch();
    const score = useSelector(state => state.score);
    const [shuffledArray, setShuffledArray] = useState([]);
    const [tempArray, setTempArray] = useState([{ id: 1, value: "" }, { id: 2, value: "" }, { id: 3, value: "" }, { id: 4, value: "" }])
    const [status, setStatus] = useState("");
    let [counter, setCounter] = useState(0);
    const [idArray, setIdArray] = useState([]);

    useEffect(() => {
        makeShuffle();
    }, [])

    const makeShuffle = () => {
        setShuffledArray(() => {
            return shuffle(array);
        })
    }

    const handleClick = useCallback((id) => {
        if (status !== '') {
            return
        }
        if (shuffledArray[id - 1].value === "💣") {
            let temp = ShowHide(shuffledArray, tempArray, id);
            setTempArray([...temp]);
            setStatus("You Lose..!");
            setTimeout(() => {
                reShuffle();
            }, 2000);
        } else {
            if (!idArray.includes(id)) {
                let temp = ShowHide(shuffledArray, tempArray, id);
                setTempArray([...temp]);
                setIdArray((x) => [...x, id]);
                setCounter(counter + 1);
                if (counter + 1 === 3) {
                    setStatus("You Won..!");
                    dispatch(setScore(100));
                    setTimeout(() => {
                        dispatch(setValue(2));
                        event.props.history.push('/levelTwo');
                    }, 2500);
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [counter, shuffledArray, tempArray, idArray, status, dispatch, event.props.history])

    const reShuffle = () => {
        makeShuffle();
        setStatus("");
        setCounter(0);
        setIdArray([]);
        setTempArray([{ id: 1, value: "" }, { id: 2, value: "" }, { id: 3, value: "" }, { id: 4, value: "" }])
    }
    return (
        <div className="App">
            <div className='title'>
                <h3>💣 MINE SWEEPER 💣</h3>
            </div>
            <div className='valueFlex containerFlexDirection wrapper'>
                <div className='valueFlex flexContent flexDirection'>
                    <pre><b>YOUR SCORE : {score}</b></pre>
                </div>
                <div className=' levelTwoWidth valueFlex flexDirection'>
                    <h3>LEVEL 1</h3>
                    <div className='gridContainer'>
                        {tempArray.map((content, index) => {
                            return (
                                <span key={index} onClick={() => handleClick(content.id)} className='itemBlue itemCommon borderRadiusGrid zoom  valueFlex'><div>{content.value}</div></span>
                            )
                        })}
                    </div>
                    <div className='statusHeight'>
                        <h3 className='statusMargin'>{status}</h3>
                    </div>
                    <div>
                        <button disabled={status} className='button' onClick={reShuffle}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LevelOne;