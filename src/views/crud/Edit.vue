<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h1>EDIT POST</h1>
                        <hr>

                        <form @submit.prevent="update">
                            <div class="form-group">
                                <label for="nama" class="font-weight-bold">NAMA</label>
                                <input type="text" class="form-control" v-model="post.nama" placeholder="Masukan Judul Post">

                                <!-- validation -->
                                <div v-if="validation.nama" class="mt-2 alert alert-danger">
                                    {{ validation.nama[0] }}
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label for="nim" class="font-weight-bold">NIM</label>
                                <input type="text" class="form-control" v-model="post.nim" placeholder="Masukan Judul Post">

                                <!-- validation -->
                                <div v-if="validation.nim" class="mt-2 alert alert-danger">
                                    {{ validation.nim[0] }}
                                </div>
                            </div>                

                            <div class="form-group">
                                <label for="jurusan" class="font-weight-bold">JURUSAN</label>
                                <textarea class="form-control" rows="4" v-model="post.jurusan" placeholder="Maukkan Konten Post"></textarea>
                                
                                <!-- validation -->
                                <div v-if="validation.jurusan" class="mt-2 alert alert-danger">
                                    {{ validation.jurusan[0] }}
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="angkatan" class="font-weight-bold">ANGKATAN</label>
                                <input type="text" class="form-control" v-model="post.angkatan" placeholder="Masukan Judul Post">

                                <!-- validation -->
                                <div v-if="validation.angkatan" class="mt-2 alert alert-danger">
                                    {{ validation.angkatan[0] }}
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">SIMPAN</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {reactive, ref, onMounted} from 'vue';
import {useRouter, useRoute} from 'vue-router';
import axios from 'axios';

export default {
   setup(){
       const post = reactive({
           nama: '',
           nim: '',
           jurusan: '',
           angkatan: ''
       })

       const validation = ref([]);
       const router = useRouter();
       const route = useRoute();
       
       onMounted(() => {
           axios.get(`http://novaagustina.online/novaagustina.online/if18a/UAS-Kel01/public/api/posts/${route.params.id}`)
           .then(response => {
               post.nama = response.data.data.nama
               post.nim = response.data.data.nim
               post.jurusan = response.data.data.jurusan
               post.angkatan = response.data.data.angkatan
           }).catch(error =>{
               console.log(error.response.data)
           })
       })

       function update(){
           let nama = post.nama
           let nim = post.nim
           let jurusan = post.jurusan
           let angkatan = post.angkatan

           axios.put(`http://novaagustina.online/novaagustina.online/if18a/UAS-Kel01/public/api/posts/${route.params.id}`,
           {
                nama: nama,
                nim: nim,
                jurusan: jurusan,
                angkatan: angkatan
           }).then(() =>{
               router.push({
                   name: 'crudmhs'
               })
           }).catch(error => {
               validation.value = error.response.data
           })
       }
       return{
           post,
           validation,
           router,
           update
       }
   }
}
</script>


<style scoped>
body{
    background: lightgrey;
}
</style>