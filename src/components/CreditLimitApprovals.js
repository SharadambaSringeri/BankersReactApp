import React, { Component, Fragment } from 'react';
import BankerService from '../services/BankerService';
class CreditLimitApprovals extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cardLimitRequests : []
        }
    
    
        
    }
    componentDidMount() {
        // this.getAllEmployees();
     
       BankerService.getCardLimitRequests().then((response) =>
       {
           this.setState({
            cardLimitRequests : response.data
               });
       }).catch((err) => {
         console.log(err);
          });
        }
    
        render() {
            return (
                <Fragment>
                   {/* <pre>{JSON.stringify(this.state.employees)}</pre>*/}
                    <div>
                          <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
        
                    </div>
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col">
                                
                               
                            <span className="text-primary font-weight-bold"><h3>Credit Limit Approval Requests</h3></span>
                                
                                
                            </div>
                        </div>
                    </div>
                    <div className="container mt-3 animated  ">
                        <div className="row">
                            <div className="col">
                                <table className="table table-hover table-striped text-center">
                                    <thead className="bg-info text-white">
                                        <tr>
                                            <th>Request Id</th>
                                            <th>User Id</th>
                                            <th>Card Number</th>
                                            <th>Requested Date</th>
                                            <th>CreditLimit</th>
                                            <th>RCreditLimit</th>
                                            
                                            <th>ACTIONS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.cardLimitRequests.length > 0 ?
                                                <Fragment>
                                                    {
                                                        this.state.cardLimitRequests.map((cardLimitRequest, index) => {
                                                            return (
                                                                <tr key={index}>
                                                                    
                                                                    <td>{cardLimitRequest.requestId}</td>
                                                                    <td>{cardLimitRequest.userId}</td>
                                                                    <td>{cardLimitRequest.creditCardNumber}</td>
                                                                    <td>{cardLimitRequest.requestedDate}</td>
                                                                    <td>{cardLimitRequest.creditLimit}</td>
                                                                    <td>{cardLimitRequest.rcreditLimit}</td>
                                                                    
                                                                      
                                                                      
                                                                              
                                                                       <td><button style={{marginLeft: "10px"}} type="button" className="btn btn-info btn-sm">Approve</button> <button type="button" class="btn btn-danger btn-sm">Reject</button></td>  
                                                                       
                                                                       
                                                                       
                                                                      
        
        
        
                                                                   
                                                                    
                                                                    
                                                                </tr>
                                                            );
                                                        })
                                                    }
                                                </Fragment> :
                                                <Fragment>
                                                    <tr className="text-danger font-weight-bold">
                                                        <td colSpan="7">No Records Found</td>
                                                    </tr>
                                                </Fragment>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </Fragment>
            );
        }
}

export default CreditLimitApprovals;