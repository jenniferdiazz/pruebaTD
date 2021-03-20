<template>
  <div>
    <h2>Ultimas Ordenes</h2>
    <table class="table">
     
        <thead>
          <tr>
            <th class="text-left">
              N° Orden
            </th>
            <th class="text-left">
              Cliente
            </th>
            <th class="text-left">
              Fecha Devolucion
            </th>
            
            <th class="text-left">
              
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="orden in ordenes" :key="orden.id_orden">
            <td>{{ orden.num_orden }}</td>
            <td>{{ orden.cliente }}</td>
            <td>{{ orden.fecha_entrega }}</td>
        
            <td><button type="button" class="btn btn-primary">Ver detalles</button></td>
          </tr>
        </tbody>
      
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "RankingVendedores",
  // props: {},
  data: function() {
    return {
    
        ordenes:[],
    };
  },
  // computed: {},
  methods: {
    // -- Metodos
    fetchRankingVendedores(){
      axios.get('http://localhost:8080/api/dashboard.json')
        .then(resp=>{
            console.log("ordenes")
          console.log(resp.data)
          //this.ranking = resp.data;

           
          this.ordenes = resp.data.ultimas_devoluciones;
        })
        .catch(error=>{
          console.log(error)
        })
    }
  },
  created(){
    this.fetchRankingVendedores();
  }
  // components: {},
};
</script>

<style scoped></style>