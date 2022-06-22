import axios from 'axios';

export default {

    getFlights: function() {
        return axios.get("/flights/");
    },
    getFlight: function(id) {
        return axios.get("/flight/"+id);
    },
    //might have to tweak this on the back to take data
    createFlight: function(data) {
        return axios.post("/flights/", data);
    },
    editflight: function(id, data) {
        return axios.put("/flights/"+id, data);
    },
    deleteFlight: function(id) {
        return axios.delete("/flights/"+id)
    }

}