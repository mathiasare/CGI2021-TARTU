import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//Vuex store

export default new Vuex.Store({

    //Global state variables to keep all components updated
    state: {
        fromMap: false,
        longitude: 0.0,
        latitude: 0.0,
        date: new Date(Date.now()),
        mapCenter: [0.0, 0.0]
    },

    //Getters - retrieve current state
    getters: {
        getLongitude: (state) => state.longitude,
        getLatitude: (state) => state.latitude,
        isFromMap: (state) => state.fromMap,
        getDate: (state) => state.date
    },

    //Actions
    actions: {

    },

    //Mutations - update current state with new value
    mutations: {
        setFromMap: (state, value) => (state.fromMap = value),
        setLongitude: (state, value) => (state.longitude = value),
        setLatitude: (state, value) => (state.latitude = value),
        setDate: (state, value) => (state.date = formatDate(value)),
        setMapCenter: (state, value) => (state.mapCenter = value),
    }
})

//Helper function to format date to UTC
function formatDate(value) {


    value += "T00:00:00Z";

    return new Date(value);
}
