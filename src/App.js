import { useState } from "react";
import cn from 'classnames'
import { useRouteMatch, Route, Switch, Redirect } from 'react-router-dom';
import GamePage from "./routes/GamePage";
import HomePage from "./routes/HomePage";
import NotFound from "./routes/NotFound"
import MenuHeader from './components/MenuHeader'
import Footer from './components/Footer'
import About from './routes/About'
import Contact from './routes/Contact'
import s from './App.css'

const App = () => {
  const match = useRouteMatch('/');
  return (
        
        <Switch>
           <Route path="/404" component={NotFound} ></Route>
              <Route>
                <>
                  <MenuHeader bgActive={!match.isExact}> </MenuHeader>
                  <div className={cn(s.wrap, {[s.isHomaPage]: match.isExact})}>
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
  )
};

export default App;