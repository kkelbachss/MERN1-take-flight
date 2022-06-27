import axios from 'axios';

const api = {

    getFlights: function() {
        return axios.get("/flights/");
    },
    getFlight: function(id) {
        return axios.get("/flights/"+id);
    },
    getFlightsByName: function(name) {
        return axios.get("/flights/check/"+name);
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

export default api;


