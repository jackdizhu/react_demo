    import React from 'react';
    import ReactDOM from 'react-dom';

    import {BrowserRouter, Route, Link} from 'react-router-dom'; //导入的方式跟之前有点变化


const getConfirmation = () => {
  // window.confirm('Are you sure?')
}

const App = () => (
  <BrowserRouter basename="/" forceRefresh={false} getUserConfirmation={getConfirmation()} keyLength={12} >
    <div>
      <AddressBar/>
      <Link to="/">Home</Link>
      <Route exact path="/" component={Home} />
    </div>
  </BrowserRouter>
)

const Home = (props) => {console.log(props,'home'); return <h1>Home Page</h1>}

const AddressBar = () => (
  <Route render={({location: pathname, history}) => (
    <div className="address-bar">
      <div>
        <button className="ab-button" onClick={history.goBack}>btnbtn</button>
      </div>
      <div>
        <button className="ab-button" onClick={history.goForward}>btnbtn</button>
      </div>
      <div className="url">URL: {location.pathname}</div>
    </div>

  )}/>
)

ReactDOM.render(<App/>, document.getElementById('app'))
