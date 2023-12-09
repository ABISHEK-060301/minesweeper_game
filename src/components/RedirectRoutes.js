import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

const RedirectRoutes = () => {

    let pathValue = useSelector(state => state.pathValue);

    return (
        <Switch>
            <Route component={() => <Redirect to={pathValue === 1 ? '/levelOne'
                : pathValue === 2 ? '/levelTwo' : pathValue === 3 ? '/levelThree' : '/levelFour'}></Redirect>
            } />
        </Switch>
    )
}

export default RedirectRoutes;