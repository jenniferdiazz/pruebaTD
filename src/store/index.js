import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:null
  },
  mutations: {
    setToken(state, payload){
      state.token = payload
    }
  },
  actions: {
    //lo segundo es el componente que recibe. dentro del login se hace la solicitud
    async login({commit}, usuario){
      console.log("usuario")
      console.log(usuario.email)
      console.log(usuario.password)
      //console.log(JSON.stringify(usuario))
      try{
          const res= await fetch('http://localhost:8080/api/login.json',{
            method: 'get',
            headers:{
              'Content-Type': 'application/json',
            },
            //body: JSON.stringify(usuario)
          })
          //viene la respuesta de nuestra base de datos
         
          const resDB = await res.json()
          console.log(resDB.email)
          console.log(resDB.password)

          if(usuario.email == resDB.email && usuario.password == resDB.password){
             
          //el commit llama una mutacion, lo segundo es lo que le enviaremos
          commit('setToken', resDB.token)
          //para almaacenar las credenciales usamos localstorage
          localStorage.setItem('token2', resDB.token)
          alert("Ha iniciado sesión")
          }
          else{
            alert("ACCESO DENEGADO")
          }

          
         
      }catch(error){
        console.log(error)
        alert("Ha ocurrido un error")

      }

    },
    leerToken({ commit }){
      //pregunta si el token existe
      if(localStorage.getItem('token')){
        commit('setToken',localStorage.getItem('token'))
      }else{
        commit('setToken',null)

      }
    },
    cerrarSesion({commit}){
      localStorage.removeItem('token')
      commit('setToken', null)
      alert("Ha cerrado sesión")

    }
  },
  modules: {
  }
})

