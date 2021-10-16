import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Store from './Store';
import Cart from './Cart';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/store" component={Store} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;