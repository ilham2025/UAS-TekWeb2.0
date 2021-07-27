<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>TAMBAH POST</h4>
                        <hr>

                        <form @submit.prevent="store">
                            <div class="form-group">
                                <label for="name" class="font-weight-bold">NAMA</label>
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
                                <input type="text" class="form-control" v-model="post.jurusan" placeholder="Masukan Judul Post">
                                
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
import {reactive, ref} from 'vue'
import {useRouter} from 'vue-router'
import axios from 'axios'

export default {
   setup(){
    // state post
    const post = reactive({
        nama: "",
        nim: "",
        jurusan: "",
        angkatan: ""
    });

    // state validation
    const validation = ref([]);

    // vue router
    const router = useRouter();

    // method store
    function store() {
        let nama = post.nama;
        let nim = post.nim;
        let jurusan = post.jurusan;
        let angkatan = post.angkatan;

        axios
            .post('http://localhost:8000/api/posts', {
                nama: nama,
                nim: nim,
                jurusan: jurusan,
                angkatan: angkatan
            })
            .then(() => {
                // redirect ke post index
                router.push({
                    name: "crudmhs",
                });
            })
            .catch((error) => {
                validation.value = error.response.data;
            });
    
        }
    return {
        post,
        validation,
        router,
        store
    }

   },

}
</script>


