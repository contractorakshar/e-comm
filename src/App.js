import './App.css';
import Homepage from './Pages/Homepage/homepage';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}
export default App;
//exact default :true
