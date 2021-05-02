import './App.css';
import Country from './Components/Country.js';
import CountryList from './Components/CountryList.js';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import reducer from './reducer.js';
import ActionList from './actions-lists.js';
import Header  from './Components/Header.js';
import CountryPage from './Components/country-page.js';
import {
BrowserRouter as Router,
Route,
Switch
} from 'react-router-dom';

const initialState={
    countryList:[],
    countryListByName: [],
    coutryFilteredByRegion: [],
    filterByRegion: '',
}



const store=createStore(reducer,initialState);

function App() {
  return (
    
      <Provider store={store}>
        <Router>
        <Header/>
          <Switch>
            <Route path="/country/:id" component={CountryPage}>
              
            </Route>
            <Route path="/">
              <ActionList/>
                <CountryList/>
            </Route>
          </Switch>
         </Router>
      </Provider>
   
  );
}

export default App;

