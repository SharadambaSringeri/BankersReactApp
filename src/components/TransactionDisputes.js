import React, { Component ,Fragment} from 'react';
import BankerService from '../services/BankerService';

class TransactionDisputes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            transactionDisputeRequests : []
            
        
    
        }
    
    
        
    }
    componentDidMount() {
        // this.getAllEmployees();
     
     

    BankerService.getTransactionDisputeRequests().then((response) =>
    {
        this.setState({
          transactionDisputeRequests : response.data
       
          
            });
            console.log(JSON.stringify(this.state.transactionDisputeRequests));
    }
    )



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
                        
                       
                    <span className="text-primary font-weight-bold"><h3>Transaction Dispute Requests</h3></span>
                        
                        
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
                                    <th>Transaction Id</th>
                                    <th>Card Number</th>
                                    <th>Requested Date</th>
                                    
                                    <th>ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.transactionDisputeRequests.length > 0 ?
                                        <Fragment>
                                            {
                                                this.state.transactionDisputeRequests.map((transactionDisputeRequest, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            
                                                            <td>{transactionDisputeRequest.requestId}</td>
                                                            <td>{transactionDisputeRequest.userId}</td>
                                                            <td>{transactionDisputeRequest.transactionId}</td>
                                                            <td>{transactionDisputeRequest.creditCardNumber}</td>
                                                            <td>{transactionDisputeRequest.requestedTimeStamp}</td>
                                                            
                                                           
                                                              
                                                           
                                                                      
                                                               <td><button style={{marginLeft: "10px"}} type="button" className="btn btn-info btn-sm">Accept</button> <button type="button" className="btn btn-danger btn-sm">Reject</button></td>  
                                                               
                                                               
                                                               
                                                            

                                                           
                                                            
                                                            
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

export default TransactionDisputes;