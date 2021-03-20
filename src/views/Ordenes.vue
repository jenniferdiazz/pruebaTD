<template>
  <div>
    <div>
      <h1>Monitor de Ordenes</h1>
      <table>
          <thead>
            <tr>
              <th class="text-left">
                N° Orden
              </th>
              <th class="text-left">
                Cliente
              </th>
              <th class="text-left">
                Monto Orden
              </th>
              <th class="text-left">
                Cant. Productos
              </th>
              <th class="text-left">
                Fecha Entrega
              </th>
              <th class="text-left">
                Avance Preparacion
              </th>
              <th class="text-left">Estado</th>
               <th class="text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="orden in ordenes" :key="orden.num_orden">
              <td>{{ orden.num_orden }}</td>
              <td>{{ orden.cliente }}</td>
              <td>{{ orden.monto }}</td>
              <td>{{ orden.cant_productos }}</td>
              <td>{{ orden.fecha_entrega }}</td>

             <td>{{ orden.avance_preparacion }}</td>
              <td>{{ orden.estado }}</td>
              
              <td>
                <button type="button" class="btn btn-primary"
                  @click="redirect(orden.num_orden)"
                  >Ver detalle</button>
              </td>
            </tr>
          </tbody>
      </table>

      <v-pagination
      v-model="page"
      :length="total_page"
    ></v-pagination>


    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Ordenes",
  // props: {},
  data: function() {
    return {
        ordenes:[],
      //vendedores: [],
      page: 1,
      total_page: 1,
    };
  },
  // computed: {},
  methods: {
    // -- Metodos
    fetchVendedores() {
      axios
        .get("http://localhost:8080/api/ordenes.json")
        .then((resp) => {
          console.log(resp);
          //this.vendedores = resp.data.vendedores;
          this.ordenes= resp.data.ordenes
          this.page = resp.data.pagedResult.page;
          this.total_page = resp.data.pagedResult.total;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    porcentaje(preparacion) {
        if (preparacion == 1){
          return 100
      }
      else {
          return 1
      }
    },
    redirect(id){
      this.$router.push(`/vendedor/${id}`)
    }
  },
  components: {
    
  },
  created() {
    this.fetchVendedores();
  },
};
</script>

<style scoped></style>
