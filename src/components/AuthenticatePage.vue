<script>
import router from '../main'
import { signup, signin } from '../firebase/authentication.js'; 

export default {
  inject: ['store'],
  methods: {
    async submitForm() {
      if (this.store.count%2==0){
        signin(this.email, this.password);
        router.push('/'); 
      }
      else{
        signup(this.email, this.password);
        router.push('/'); 
      }
    },
  },
};
</script>

<template>
    <div id="app" class="container">
      <img alt="codeway" class="logo" src="../assets/logo.svg"/>
      <h1 v-if="store.count%2==0" class="text">Please sign in</h1>
      <h1 v-else class="text">Please sign up</h1>
      <form class="form" @submit.prevent="submitForm">
        <input class="input" type="email" placeholder="E-mail address" v-model="email" required>
        <input class="input" type="password" placeholder="Password" v-model="password" required>
        <input class="input" type="submit" :value="store.count%2==0 ? 'Sign In' : 'Sign Up'">
      </form>
        <h3 v-if="store.count%2==0" class="text">Not registered? Click to <a @click="store.count++" style="cursor: pointer;">Sign Up</a></h3>
        <h3 v-else class="text">Already registered? Click to <a @click="store.count++" style="cursor: pointer;">Sign In</a></h3>
    </div>
</template>



<style>
.logo{
  width: 15vw;
  height: 15vh;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.container{
  margin: auto;
  margin-top: 10vh;
  width: 25%;
  padding: 10px;
}

.input{
  width: 100%;
}

.text{
  text-align: center;
  color: #32325D;
}
</style>
