import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Header from "./components/Header";
import Erro from "./pages/Erro";
import Produto from "./pages/Produto";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/sobre" component={Sobre}></Route>

        <Route path="/produto/:id" component={Produto}></Route>
        <Route path="*" component={Erro}></Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
