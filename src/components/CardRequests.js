import React, { Component, Fragment }   from 'react';

import BankerService from '../services/BankerService';


class CardRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cardActivationRequests : [],
        currentPage:1,
        postsPerPage:10

    }


    
}

componentDidMount() {
   // this.getAllEmployees();

  BankerService.getCardRequests().then((response) =>
  {
      this.setState({
        cardActivationRequests : response.data
          });
  }).catch((err) => {
    console.log(err);
     });
   }

// getAll Employees
// getAllEmployees = () => {
//     Axios.get('http://localhost:8082/api/cardRrequest').then((response) => {
//         this.setState({
//             cardActivationRequests : response.data
//         });
//     }).catch((err) => {
//         console.error(err);
//     });
// };




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
                        
                       
                    <span className="text-primary font-weight-bold"><h3>Card Activation Requests</h3></span>
                        
                        
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
                                    <th>Status</th>
                                    
                                    <th>ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.cardActivationRequests.length > 0 ?
                                        <Fragment>
                                            {
                                                this.state.cardActivationRequests.map((cardActivationRequest, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            
                                                            <td>{cardActivationRequest.requestId}</td>
                                                            <td>{cardActivationRequest.userId}</td>
                                                            <td>{cardActivationRequest.creditCardNumber}</td>
                                                            <td>{cardActivationRequest.requestedTimeStamp}</td>
                                                            <td>{cardActivationRequest.status}</td>
                                                            {
                                                              
                                                              cardActivationRequest.disputeStatus==="AC" ? 
                                                                      
                                                               <td><button style={{marginLeft: "10px"}} type="button" className="btn btn-info btn-sm">Deactivate</button> <button type="button" class="btn btn-danger btn-sm">Cancel</button></td>  
                                                               
                                                               
                                                               
                                                               : <td> <button style={{marginLeft: "10px"}}  type="button" class="btn btn-info btn-sm ">Activate</button> <button type="button" class="btn btn-danger btn-sm">Cancel</button></td>



                                                            }
                                                            
                                                            
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

export default CardRequests;