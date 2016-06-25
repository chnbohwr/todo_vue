<template>
    <div class="login-form">
        <h3>User Login</h3>
        <p>default user name and password is test.</p>
        <form>
            <div class="form-group">
                <label>
                    user name
                </label>
                <input class="form-control" type="text" v-model="user">
            </div>
            <div class="form-group">
                <label>
                    user password
                </label>
                <input class="form-control" type="password" v-model="password">
            </div>
        </form>
        <button class="btn btn-primary" @click="login">Login</button>
    </div>
    <alert type="danger" dismissable :show.sync="showAlert">user name or password fail.</alert>
</template>


<script>
    import { alert } from 'vue-strap';
    import router from '../router/router';
    export default {
         data: ()=>({
             user: '',
             password: '',
             showAlert: false
         }),
         methods:{
             login(){
                if (this.user === 'test' && this.password === 'test') {
                    window.isAuth = true;
                    router.go('/');
                } else {
                    this.showAlert = true;
                }
             }
         },
         components:{
             alert
         }
    }   
</script>



<style scoped="true">
    .alert {
        margin-top: 10px;
    }
</style>