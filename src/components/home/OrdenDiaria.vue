<template>
  <div  class="contenido">
    <div>
      <div>
        <h3 class="titulo">Cumplimiento Diario de Ordenes</h3>
      </div>
    </div>
    <div class="informacion row">
      <div class="col-sm-4 col-lg-4">
        <div class="valor">{{porcentaje}}%</div>
        <div class="detalle_valor"><a href="">Ver detalles</a></div>
      </div>
      <div class="col-sm-4 col-lg-4">
        <div class="valor">{{entregadas}}</div>
        <div class="detalle_valor">Ordenes Entregadas</div>
      </div>
      <div class="col-sm-4 col-lg-4">
        <div class="valor">{{pendientes}}</div>
        <div class="detalle_valor">Ordenes Pendientes</div>
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
      entregadas:0,
      pendientes:0
    }
  },
  computed: {
    porcentaje(){
      let resultado = 0;
      if(this.pendientes>0){
        resultado = (this.entregadas * 100) / this.pendientes;
      }
      return resultado.toFixed(0);
    }
  },
  methods: {
    // -- Metodos
    fetchVentas(){
      axios.get('http://localhost:8080/api/dashboard.json')
        .then(resp=>{
        this.entregadas= resp.data.kpis[0].entregadas
        this.pendientes = resp.data.kpis[0].pendientes
        //   let venta = resp.data[0].venta_mensual;
        //   this.valor = venta.valor;
        //   this.meta = venta.meta;
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