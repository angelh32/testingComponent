import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SearchShowBar from "./components/SearchShowBar"
import ShowDetailsPage from "./components/ShowDetailsPage"
import ShowSearchResults from "./components/ShowSearchResults"

const App = () => {
    return <>
         <Provider store={store}>
             <SearchShowBar/>
              <Router>
                 <Switch>
                     <Route path="/" exact component={ShowSearchResults} />
                     <Route path="/show/:id" component={ShowDetailsPage} />
                 </Switch>
             </Router>
         </Provider>
    </>
}

ReactDOM.render(<App/>, document.getElementById("root"))