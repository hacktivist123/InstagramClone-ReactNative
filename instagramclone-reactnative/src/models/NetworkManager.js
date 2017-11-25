
/*The network Manager is going to be responsible for handling all our
  network requests to the server.
*/

import axios from 'axios';


const axiosEndpointManager = axios.create ({
  baseURL: 'https://api.instagram.com/v1/users/',
  timeout: 30000
});

const responseState = {
  unsent: 0,
  opened: 1,
  headersRecieved: 2,
  loading: 3,
  done: 4
}

class NetworkManager {

  constructor(accessToken){
    this.accessToken = accessToken;
  }

  getLoggedInUserInformation(completionCallback){

    /*self/?access_token=ACCESS-TOKEN*/

    return axiosEndpointManager.get('self/?access_token=' + this.accessToken)
    .then(response => {
      //if the response is succesfully completed
      if (response.request.readyState == responseState.done) {
        completionCallback(response.data);
      }
    })
    .catch(response => {
      console.log("Oops this one is an error");
      console.log(response);
    });

  }

  getFeedData(feedDataCallBack){
    //this particular part will send back the sessionData
    return axiosEndpointManager.get('self/media/recent/?access_token=' + this.accessToken)
    .then(response => {
      //if the response is succesfully completed
      if (response.request.readyState == responseState.done) {
        feedDataCallBack(response.data.data);
      }
    })
    .catch(response => {
      console.log("Oops this one is an error");
      console.log(response);
    });
  }


  getSessionAndFeedData(sessionDataCallback, feedDataCallBack){
    this.getLoggedInUserInformation(sessionDataCallback)
    .then(this.getFeedData(feedDataCallBack));
  }

}


export { NetworkManager };
