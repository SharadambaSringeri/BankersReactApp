import axios from 'axios';

const URL = "http://localhost:8082/api";
class BankerService
{
 

    getCardRequests()
    {
         return axios.get(`${URL}/cardRrequest`);


    }

    getCardLimitRequests()
    {

        return axios.get(`${URL}/limitIncreasRrequest`);

    }
    getTransactionDisputeRequests()
    {

        return axios.get(`${URL}/disputeTransactionRrequest`);

    }


}

export default new BankerService()