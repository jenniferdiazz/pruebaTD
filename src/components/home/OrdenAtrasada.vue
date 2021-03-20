<template>
  <div class="contenido">
    <div>
      <div>
        <h3 class="titulo">Ordenes Atrasadas Jornada</h3>
      </div>
    </div>
    <div class="informacion row">
      <div class="col-sm-4 col-lg-4">
        <div class="valor">{{porcentaje}}%</div>
        <div class="detalle_valor"><a href="">Ver detalles</a></div>
      </div>
      <div class="col-sm-4 col-lg-4">
        <div class="valor">{{totales}}</div>
        <div class="detalle_valor">Ordenes Totales</div>
      </div>
      <div class="col-sm-4 col-lg-4">
        <div class="valor">{{atrasadas}}</div>
        <div class="detalle_valor">Ordenes Atrasadas</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'venta-mensual',
  // props: {},
  data: function(){
    return {
    //   valor:0,
    //   meta:0,
    totales:0,
    atrasadas:0,
    }
  },
  computed: {
    porcentaje(){
      let resultado = 0;
      if(this.atrasadas>0){
        resultado = (this.atrasadas * 100) / this.totales;
      }
      return resultado.toFixed(0);
    }
  },
  methods: {
    // -- Metodos
    fetchVentas(){
      axios.get('http://localhost:8080/api/dashboard.json')
        .then(resp=>{
      
        this.totales= resp.data.kpis[1].totales
        this.atrasadas = resp.data.kpis[1].atrasadas
        })
        .catch(error=>{
          console.log(error)
        })
    }
  },
  created(){
    this.fetchVentas();
  }
  // components: {},
}
</script>

<style scoped>
  .titulo{
    text-align:center;
    font-weight: bolder;
  }
  .informacion{
    
    margin: 50px;
  }
  .valor{
    text-align: center;
    font-size:20px;
  }
  .detalle_valor{
    text-align: center;
    font-weight: bolder;
  }
  .contenido{
    border: 1px solid grey; 
  }
</style>