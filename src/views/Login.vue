<template>
  <div class="container">
    
 
        <div style="margin:10px; border:solid 1px black; padding:10px"><h1>Login usuarios</h1><br><br>
      <form @submit.prevent="login(usuario)">
      <!-- v-model relaciona los input con la data que tenemos en vue-->
      <div class="mb-1"><input type="emai" placeholder="email" v-model="usuario.email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></div><br>
      <div class="mb-1"><input type="password" placeholder="password" v-model="usuario.password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></div> <br><br>
      <div class="mb-1"><button type="submit" class="btn btn-primary">Acceder</button></div>

    </form>
    </div><br>

   
 
  </div>
</template>

<script>
//el mapaction accede a lo que esta en acciones
import {mapActions} from 'vuex'
//las acciones siempre van en los metodos, el metodo login se trae de index.js y se llama arriba en el formulario

export default {
  data(){
    return{
      usuario:{
        email:'jenniferdiaz@talentodigital.cl',
        password:'123456'
      }
    }
  },
  methods:{
    ...mapActions(['login'])
  }

}
</script>
