<template>
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
/* Add your styles here */
</style>
<!-- 
    <p>OS: {{ os }}</p>
    <p>Language: {{ language }}</p>
    <p>Version: {{ version }}</p>
    <p>Access Token: {{ accessToken }}</p>
    <p>Is In Client: {{ isInClient }}</p> -->
<!-- 
    <button id="btnLogout" v-if="!isInClient">Logout</button>
    <button id="btnMsg" v-if="isInClient">Message</button>
    <button id="btnScanCode" v-if="isInClient">Scan Code</button>
    <button id="BtnClose" v-if="isInClient">Close</button> -->
<!-- <div v-if="profile">
    <p>Display Name: {{ displayName }}</p>
    <p>
      Picture URL:
      <img :src="pictureUrl" alt="User's picture" v-if="pictureUrl" />
    </p>
    <p>User ID: {{ userId }}</p>
    <p>Status Message: {{ statusMessage }}</p>
  </div> -->
