import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
state : {
    fromMap: false,
    longitude:25.067,
    latitude:59.041,
    date:new Date("03-22-1999"),
    longitudeText:'tere',
    latitudeText:'tere'
},

getters : {
    getLongitude:(state) => state.longitude,
    getLatitude:(state) => state.latitude,
    getLongitudeText:(state) => state.longitudeText,
    getLatitudeText:(state) => state.latitudeText,
    isFromMap: (state) => state.fromMap,
    getDate: (state) => state.date
},

actions : {

},

mutations : {
    reverseFromMap: (state) => (state.fromMap = !state.fromMap),
    setLongitude:(state,value) =>(state.longitude = value),
    setLatitude:(state,value) => (state.latitude = value),
    setDate:(state,value) => (state.date = new Date(value)),
    setLatitudeText:(state,value) => (state.latitudeText = value),
    setLongitudeText:(state,value) => (state.longitudeText = value)
}
})
