<template>
  <div>
    <p>OS: {{ os }}</p>
    <p>Language: {{ language }}</p>
    <p>Version: {{ version }}</p>
    <p>Access Token: {{ accessToken }}</p>
    <p>Is In Client: {{ isInClient }}</p>

    <button id="btnLogout" v-if="!isInClient">Logout</button>
    <button id="btnMsg" v-if="isInClient">Message</button>
    <button id="btnScanCode" v-if="isInClient">Scan Code</button>
    <button id="BtnClose" v-if="isInClient">Close</button>
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

onMounted(async () => {
  try {
    await liff.init({ liffId: "2000714922-XOb4DG4e" });
    getEnvironment();
  } catch (error) {
    console.error("Error initializing LIFF:", error);
  }
});

function getEnvironment() {
  os.value = liff.getOS();
  language.value = liff.getLanguage();
  version.value = liff.getVersion();
  accessToken.value = liff.getAccessToken();
  isInClient.value = liff.isInClient();
}
</script>
