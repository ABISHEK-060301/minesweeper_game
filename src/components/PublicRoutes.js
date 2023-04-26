import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../home";

const PublicRoutes = () => {
    return (
        <Switch>
            <Route exact path='/' component={(event) => <Home props={event} />} />
            <Route path='*' component={() => <Redirect to='/'></Redirect>} />
        </Switch>
    );
}

export default PublicRoutes;