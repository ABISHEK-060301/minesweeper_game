import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import LevelFour from "./LevelFour";
import LevelOne from './LevelOne';
import LevelThree from "./LevelThree";
import LevelTwo from "./LevelTwo";
import RedirectRoutes from "./RedirectRoutes";

const PrivateRoutes = () => {

    let pathValue = useSelector(state => state.pathValue);

    return (
        <Switch>
            <Route exact path='/levelOne' component={(events) => pathValue === 1 ? <LevelOne props={events} /> : <RedirectRoutes />} />
            <Route exact path='/levelTwo' component={(events) => pathValue === 2 ? <LevelTwo props={events} /> : <RedirectRoutes />} />
            <Route exact path='/levelThree' component={(events) => pathValue === 3 ? <LevelThree props={events} /> : <RedirectRoutes />} />
            <Route exact path='/levelFour' component={(events) => pathValue === 4 ? <LevelFour props={events} /> : <RedirectRoutes />} />
            <Route path='*' component={() => <Redirect to={pathValue === 1 ? '/levelOne'
                : pathValue === 2 ? '/levelTwo' : pathValue === 3 ? '/levelThree' : '/levelFour'}></Redirect>
            } />
        </Switch>
    )
}

export default PrivateRoutes;