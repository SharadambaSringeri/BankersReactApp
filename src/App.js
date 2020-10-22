import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router , Link, Route , Switch} from 'react-router-dom';

import CardRequests from './components/CardRequests';
import TransactionDisputes from './components/TransactionDisputes';
import CreditLimitApprovals from './components/CreditLimitApprovals';
import Navbar from './components/Navbar';
;



const styles = {
  background: '#000',
  width: '2px',
  cursor: 'col-resize',
  margin: '0 5px',
  height: '100%',
};

function App() {
  return (
  //   <div className="App">



  // <Router>
  //   <SplitPane
  //     split="vertical"
  //     minSize={100}
  //     defaultSize={100}
  //     resizerStyle={styles}
  //   >
  //     <menu>
  //       <div><Link to="/cardRequests">Card Activations</Link></div>
  //       <div><Link to="/transactionDisputes">Transaction Disputes</Link></div>
  //       <div><Link to="/limitApproveRequests">Credit limit approvals</Link></div>
  //     </menu>

  //   </SplitPane>
  //   <div>
  //   <Route path = "/" exact component = {CardRequests}></Route>
  //   <Route path = "/cardRequests" exact component = {CardRequests}></Route>
  //   <Route exact path="/transactionDisputes" component={TransactionDisputes}  />
  //       <Route path="/limitApproveRequests" component={LimitIncreaseRequest} />
  //   </div>
  // </Router>
  //   </div>
  // );
  <div className="App">
  <Router>
   <Navbar/>

      <Switch>
      <Route exact path="/" component={CardRequests}/>
      
         
          <Route exact path="/transactionDisputes" component={TransactionDisputes}/>
          <Route exact path="/cardActivate" component={CardRequests}/>
          <Route exact path="/limitApprovals" component={CreditLimitApprovals}/>
          
      </Switch>
  </Router>
</div>


  );
}

export default App;
