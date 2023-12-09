import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setScore, setValue } from '../services/action';
import { easyArrayLeveltwo, hardArrayLevelTwo, showBombs, ShowHide, shuffle } from '../utils';

const LevelTwo = (event) => {

    const dispatch = useDispatch();
    const [radio, setRadio] = useState({ radioOne: false, radioTwo: false });
    const [shuffledArray, setShuffledArray] = useState([]);
    const [status, setStatus] = useState("");
    const [counter, setCounter] = useState(0);
    const [tempArray, setTempArray] = useState([{ id: 1, value: "" }, { id: 2, value: "" }, { id: 3, value: "" }, { id: 4, value: "" }, { id: 5, value: "" }, { id: 6, value: "" }, { id: 7, value: "" }, { id: 8, value: "" }, { id: 9, value: "" },])
    const [idArray, setIdArray] = useState([]);
    const [level, setLevel] = useState('');
    const score = useSelector(state => state.score);

    useEffect(() => {
        makeShuffle();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [level])

    const makeShuffle = () => {
        setShuffledArray(() => {
            let mainArr = [];
            if (level === 'EASY') {
                mainArr = shuffle(easyArrayLeveltwo);
            } else if (level === 'HARD') {
                mainArr = shuffle(hardArrayLevelTwo);
            }
            return mainArr;
        })
    }

    const handleClick = useCallback((id) => {
        if (status !== '') {
            return
        }
        if (shuffledArray.length === 0) {
            alert("Please Choose The Level");
            return;
        }
        if (shuffledArray[id - 1].value === "💣") {
            let temp = ShowHide(shuffledArray, tempArray, id);
            setTempArray([...temp]);
            setStatus("You Lose..!");
            let arr = [...tempArray];
            showBombs(shuffledArray, arr);
            dispatch(setScore(0));
            setTimeout(() => {
                dispatch(setValue(1));
                event.props.history.push('/levelOne');
            }, 2000);
        } else {
            if (!idArray.includes(id)) {
                let temp = ShowHide(shuffledArray, tempArray, id);
                setTempArray([...temp]);
                setIdArray((x) => [...x, id]);
                setCounter(counter + 1);
                if (counter + 1 === (level === 'EASY' ? 7 : 6)) {
                    setStatus("You Won..!");
                    dispatch(setScore(500));
                    setTimeout(() => {
                        dispatch(setValue(3));
                        event.props.history.push('/levelThree');
                    }, 1500);
                }
            }
        }

    }, [counter, shuffledArray, tempArray, idArray, status, level, event.props.history, dispatch])

    const reset = () => {
        setRadio({ radioOne: false, radioTwo: false });
        setStatus("");
        setLevel("");
        setCounter(0);
        setIdArray([]);
        setTempArray([{ id: 1, value: "" }, { id: 2, value: "" }, { id: 3, value: "" }, { id: 4, value: "" }, { id: 5, value: "" }, { id: 6, value: "" }, { id: 7, value: "" }, { id: 8, value: "" }, { id: 9, value: "" }]);
    }

    const reShuffle = () => {
        makeShuffle();
        reset();
    }
    return (
        <div className="App">
            <div className='title'>
                <h3>💣 MINE SWEEPER 💣</h3>
            </div>
            <div className='valueFlex containerFlexDirection wrapper'>
                <div className='valueFlex flexContent flexDirection'>
                    <div>
                        <h3>Choose the Level</h3>
                        <input className='input' checked={radio.radioOne} disabled={counter} onChange={() => setRadio({ radioOne: true, radioTwo: false })} onClick={(e) => setLevel(e.target.value)} type={"radio"} id='radioOne' value='EASY' ></input>
                        <label>Easy</label>
                        <input className='input' checked={radio.radioTwo} disabled={counter} onChange={() => setRadio({ radioOne: false, radioTwo: true })} onClick={(e) => setLevel(e.target.value)} type={"radio"} id='radioTwo' value='HARD'></input>
                        <label>Hard</label>
                    </div>
                    <pre><b>YOUR SCORE : {score}</b></pre>
                </div>
                <div className=' levelTwoWidth valueFlex flexDirection'>
                    <h3>LEVEL 2</h3>
                    <div className='gridContainer gridTemplateColumnsLevelTwo'>
                        {tempArray.map((content, index) => {
                            return (
                                <span key={index} onClick={() => handleClick(content.id)} className='itemBlue itemCommon borderRadiusGrid zoom valueFlex'><div>{content.value}</div></span>
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

export default LevelTwo;