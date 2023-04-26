import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setScore, setValue } from '../services/action';
import { easyArrayLevelThree, hardArrayLevelThree, showBombs, ShowHide, shuffle } from '../utils';

const LevelThree = (event) => {

    const dispatch = useDispatch();
    const [radio, setRadio] = useState({ radioOne: false, radioTwo: false });
    const [shuffledArray, setShuffledArray] = useState([]);
    const [status, setStatus] = useState("");
    const [counter, setCounter] = useState(0);
    const [tempArray, setTempArray] = useState([{ id: 1, value: "" }, { id: 2, value: "" }, { id: 3, value: "" }, { id: 4, value: "" }, { id: 5, value: "" }, { id: 6, value: "" }, { id: 7, value: "" }, { id: 8, value: "" }, { id: 9, value: "" }, { id: 10, value: "" }, { id: 11, value: "" }, { id: 12, value: "" }, { id: 13, value: "" }, { id: 14, value: "" }, { id: 15, value: "" }, { id: 16, value: "" }])
    const [idArray, setIdArray] = useState([]);
    const [level, setLevel] = useState('');
    const score = useSelector(state => state.score);

    useEffect(() => {
        makeShuffle();
    }, [level])

    const makeShuffle = () => {
        setShuffledArray(() => {
            let mainArr = [];
            if (level === 'EASY') {
                mainArr = shuffle(easyArrayLevelThree);
            } else if (level === 'HARD') {
                mainArr = shuffle(hardArrayLevelThree);
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
            dispatch(setScore(0));
            showBombs(shuffledArray, tempArray);
            setTimeout(() => {
                reShuffle();
                dispatch(setValue(1));
                event.props.history.push('/levelOne');
            }, 2000);
        } else {
            if (!idArray.includes(id)) {
                let temp = ShowHide(shuffledArray, tempArray, id);
                setTempArray([...temp]);
                setIdArray((x) => [...x, id]);
                setCounter(counter + 1);
                if (counter + 1 === (level === 'EASY' ? 12 : 11)) {
                    setStatus("You Won..!");
                    dispatch(setScore(2000));
                    setTimeout(() => {
                        dispatch(setValue(4));
                        event.props.history.push('/levelFour');
                    }, 2500);
                }
            }
        }

    }, [counter, shuffledArray, tempArray, idArray, status, level, dispatch, event.props.history])

    const reset = () => {
        setRadio({ radioOne: false, radioTwo: false });
        setStatus("");
        setLevel("");
        setCounter(0);
        setIdArray([]);
        setTempArray([{ id: 1, value: "" }, { id: 2, value: "" }, { id: 3, value: "" }, { id: 4, value: "" }, { id: 5, value: "" }, { id: 6, value: "" }, { id: 7, value: "" }, { id: 8, value: "" }, { id: 9, value: "" }, { id: 10, value: "" }, { id: 11, value: "" }, { id: 12, value: "" }, { id: 13, value: "" }, { id: 14, value: "" }, { id: 15, value: "" }, { id: 16, value: "" }]);
    }

    const reShuffle = () => {
        makeShuffle();
        reset();
    }
    return (
        <div className="App">
            <div className='title'>
                <h2 className='lableMargin'>💣 MINE SWEEPER 💣</h2>
            </div>
            <div className='valueFlex containerFlexDirection wrapper'>
                <div className='valueFlex flexContent flexDirection'>
                    <div>
                        <h3>Choose the Level</h3>
                        <input className='input' checked={radio.radioOne} disabled={counter} onChange={() => setRadio({ radioOne: true, radioTwo: false })} onClick={(e) => setLevel(e.target.value)} type={"radio"} id='radioOne' value='EASY' name='radioButton'></input>
                        <label>Easy</label>
                        <input className='input' checked={radio.radioTwo} disabled={counter} onChange={() => setRadio({ radioOne: false, radioTwo: true })} onClick={(e) => setLevel(e.target.value)} type={"radio"} id='radioTwo' value='HARD' name='radioButton'></input>
                        <label>Hard</label>
                    </div>
                    <pre><b>YOUR SCORE : {score}</b></pre>
                </div>
                <div className='levelThreeWidth valueFlex flexDirection'>
                    <h3>LEVEL 3</h3>
                    <div className='gridContainer gridTemplateColumnsLevelThree'>
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
        </div >
    )
}

export default LevelThree;