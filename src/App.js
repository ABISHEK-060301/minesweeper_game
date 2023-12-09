import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import PrivateRoutes from './components/PrivateRoutes';
import PublicRoutes from './components/PublicRoutes';

const App = () => {

  let pathValue = useSelector(state => state.pathValue);

  return (
    <Router>
      <Route component={() => !pathValue ? <PublicRoutes />
        : <PrivateRoutes />}>
      </Route>
    </Router>
  )
}

export default App;