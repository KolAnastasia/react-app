import { useState } from "react";

import cn from 'classnames';
import { useRouteMatch, useLocation, Route, Switch, Redirect } from 'react-router-dom';
import GamePage from "./routes/GamePage";
import HomePage from "./routes/HomePage";
import NotFound from "./routes/NotFound";
import MenuHeader from './components/MenuHeader';
import Footer from './components/Footer';
import About from './routes/About';
import Contact from './routes/Contact';
import Firebase from "./services/firebase";

import s from './App.css';
import { FireBaseContext } from "./services/firebaseContext";

const App = () => {
  const location = useLocation();
  const isPadding = location.pathname === '/' || location.pathname === 'game/board'
  return (
        <FireBaseContext.Provider value={new Firebase()}>
           <Switch>
           <Route path="/404" component={NotFound} ></Route>
              <Route>
                <>
                  <MenuHeader bgActive={!isPadding}> </MenuHeader>
                  <div className={cn(s.wrap, {[s.isHomaPage]: isPadding})}>
                    <Switch>
                          <Route path="/" exact component={HomePage} />
                          <Route path="/home"  component={HomePage} />
                          <Route path="/game"  component={GamePage} />
                          <Route path="/about"  component={About}></Route>
                          <Route path="/contact"  component={Contact}></Route>
                          <Route render={() => (
                            <Redirect to="404"/> 
                          )} ></Route>

                      </Switch>
                      </div>
                  <Footer> </Footer>
                </>

              </Route>
             
          </Switch> 
        </FireBaseContext.Provider>
       
  )
};

export default App;