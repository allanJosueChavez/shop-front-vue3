<script>
import api from "../apis/api";
export default {
 name: 'PostFormAxios',
    data(){
        return{
            sign_up:{ 
                email: '',
                password: '',
                password_confirmation: ''
            }
        }
    },
    methods: {
        registerUser(){
            api.post('/customers', {customer: this.sign_up})
                 .then((res) => {
                    console.log('Product created successfully!')
                 })
                 .catch((error) => {
                    console.log('Check if you are entering the right type of parameters')
                    console.log('Check out if you are entering all required paremeters')
                 }).finally(() => {

                 });
        }
  }
}
</script>

<template> 
  <main>
    <!-- <TheWelcome /> -->
    <section class="user-registration">
      <h3>REGISTRATION PAGE</h3>
      <form @submit.prevent="registerUser">
        <h4>
          Email (Required)
        </h4>
        <input type="text" placeholder="e.g: example@gmail.com" v-model="sign_up.email">
        <h4>Password</h4>
        <input type="text"  v-model="sign_up.password">
        <h4>Password Confirmation</h4>
        <input type="text"  v-model="sign_up.password_confirmation"><br>
        <input type="submit" value="SIGN UP"/>
      </form>
    </section>
  </main>
</template>
