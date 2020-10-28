import axios from 'axios';

const URL = "http://localhost:8082/api";
class BankerService
{
 

    getCardRequests()
    {
         return axios.get(`${URL}/cardRequest`);


    }

    getCardLimitRequests()
    {

        return axios.get(`${URL}/limitIncreasRequest`);

    }
    getTransactionDisputeRequests()
    {

        return axios.get(`${URL}/disputeTransactionRequest`);

    }


}

export default new BankerService()