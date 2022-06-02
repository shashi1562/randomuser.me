import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
    state: {
      users: [],
      foods:[],
      vehicles:[]
    },
    getters: {
    },
    actions: {
      async fetchUsers({ commit }) {
          try {
            await axios.get('https://random-data-api.com/api/users/random_user').then(resp => {

              console.log(resp.data.name);
              commit('SET_USERS', resp.data.last_name)
              commit('SET_USERS', resp.data.date_of_birth)
              commit('SET_USERS', resp.data.address.state)
              commit('SET_USERS', resp.data.employment.title)
          });
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
          try {
            await axios.get('https://random-data-api.com/api/food/random_food').then(resp => {
    
              console.log(resp.data);
              commit('SET_FOODS', resp.data.dish)
              commit('SET_FOODS', resp.data.description)
          });
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
            try {
              await axios.get('https://random-data-api.com/api/vehicle/random_vehicle').then(resp => {
      
                console.log(resp.data);
                commit('SET_VEHICLES', resp.data.color)
                commit('SET_VEHICLES', resp.data.make_and_model)
            });
              }
              catch (error) {
                  alert(error)
                  console.log(error)
              }
        }
        
},
    mutations: {
        SET_USERS(state, user) {
          state.users.push(user)
      },
        SET_FOODS(state, food) {
          state.foods.push(food)
      },
        SET_VEHICLES(state, vehicle) {
          state.vehicles.push(vehicle)
      },
    }
})