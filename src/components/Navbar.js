import React , {Fragment} from "react";
import {Link} from 'react-router-dom';
import './Navbar.css'



class Navbar extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Fragment>
               <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                   <div className="container">
                       

                       <div className="collapse navbar-collapse">
                           <ul className="navbar-nav">
                               <li className="nav-item px-3">
                                   <Link to="/cardActivate" className="nav-link">Card Activations</Link>
                               </li>
                               <li className="nav-item px-3">
                                   <Link to="/transactionDisputes" className="nav-link">Transaction Disputes</Link>
                               </li>
                               <li className="nav-item px-3">
                                   <Link to="/limitApprovals" className="nav-link">Credit limit approvals</Link>
                               </li>
                           </ul>
                       </div>
                      

            


                      
                   </div>
               </nav>
                  
               
            </Fragment>
        );
    }
}
export default Navbar;