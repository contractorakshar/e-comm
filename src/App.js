import './App.css';
import Homepage from './Pages/Homepage/homepage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './Pages/Shop/Shop';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}
export default App;
//exact default :true
