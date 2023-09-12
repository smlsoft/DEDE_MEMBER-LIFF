<template>
  <div></div>
  <div>
    <img src="pictureUrl" />

    <!-- <h1>About Us</h1> -->
    <p>Hi {{ displayName }}</p>
    <p>Display Name: {{ displayName }}</p>
    <p>User ID: {{ userId }}</p>
    <p>Status Message: {{ statusMessage }}</p>
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
  </div>
  <div v-if="profile">
    <p>Display Name: {{ displayName }}</p>
    <p>
      Picture URL:
      <img :src="pictureUrl" alt="User's picture" v-if="pictureUrl" />
    </p>
    <p>User ID: {{ userId }}</p>
    <p>Status Message: {{ statusMessage }}</p>
  </div>
</template>

<script setup>
import liff from "@line/liff";
import { ref, onMounted } from "vue";

const os = ref("");
const language = ref("");
const version = ref("");
const accessToken = ref("");
const isInClient = ref(false);
const profile = ref("");
const pictureUrl = ref("");
const userId = ref("");
const statusMessage = ref("");
const displayName = ref("");

onMounted(async () => {
  try {
    await liff.init({ liffId: "2000714922-XOb4DG4e" });
    getEnvironment();
    getUserprofile();
  } catch (error) {
    console.error("Error initializing LIFF:", error);
  }
});

async function getUserprofile() {
  try {
    profile.value = await liff.getProfile();
    console.log(profile.value);

    if (profile.value) {
      pictureUrl.value = profile.value.pictureUrl;
      userId.value = profile.value.userId;
      statusMessage.value = profile.value.statusMessage;
      displayName.value = profile.value.displayName;
    }
  } catch (error) {
    console.error("Error getting user profile:", error);
  }
}

function getEnvironment() {
  os.value = liff.getOS();
  language.value = liff.getLanguage();
  version.value = liff.getVersion();
  accessToken.value = liff.getAccessToken();
  isInClient.value = liff.isInClient();
}
</script>
