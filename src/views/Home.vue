<template>
  <div>
    
    <h3>home</h3>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-lg-12">
          <Jumbo></Jumbo>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-lg-6">
         <OrdenDiaria></OrdenDiaria>
        </div>
        <div class="col-sm-12 col-lg-6">
         <OrdenAtrasada></OrdenAtrasada>
        </div>
      </div>
      <div class="row" >
        <div class="col-sm-12 col-lg-6">
        <UltimasOrdenes></UltimasOrdenes>
        </div>
        <div class="col-sm-12 col-lg-6">
         <UltimasDevoluciones></UltimasDevoluciones>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Jumbo from '@/components/home/Jumbo.vue'
import OrdenDiaria from '@/components/home/OrdenDiaria.vue'
import OrdenAtrasada from '@/components/home/OrdenAtrasada.vue'
import UltimasOrdenes from '@/components/home/UltimasOrdenes.vue'
import UltimasDevoluciones from '@/components/home/UltimasOrdenes.vue'

export default {
  name: 'Home',
  components: {

    Jumbo,
    OrdenDiaria,
    OrdenAtrasada,
    UltimasOrdenes,
    UltimasDevoluciones
  
    
  }
}
</script>
