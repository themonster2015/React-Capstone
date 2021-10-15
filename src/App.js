import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Home from './components/Home';
import Region from './components/Region';
import { getGeneralData } from './redux/covid/covid';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGeneralData());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/:id"><Region /></Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
