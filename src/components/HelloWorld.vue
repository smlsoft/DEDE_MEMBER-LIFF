<template>
  <section
    class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 ml-4 mr-4"
  >
    <div
      class="rounded-lg bg-gray-50 shadow-2xl ring-1 pt-2 ring-gray-900/5 mx-4 my-12"
    >
      <dl class="flex flex-wrap">
        <div class="flex-auto pl-6 pt-6">
          <div class="flex items-center justify-center">
            <div>
              <img
                class="h-9 w-9 rounded-full"
                src="assets\icon.png"
                alt="User's picture"
              />
            </div>
          </div>

          <dd
            class="mt-6 text-base font-semibold leading-6 text-gray-900 py-auto"
          >
            Welcome to DEDE member
            <!-- Have a good day
            {{ displayName }} Scrambernont ! -->
          </dd>
        </div>
        <div class="flex-none self-end px-6 pt-4">
          <dt class="sr-only"></dt>
        </div>
        <div class="flex-auto pl-6 pt-6">
          <div class="flex items-center">
            <div>
              <img
                class="inline-block h-9 w-9 rounded-full"
                :src="pictureUrl"
                alt="User's picture"
              />
            </div>
            <div class="ml-3">
              <p
                class="text-sm font-medium text-gray-700 group-hover:text-gray-900"
              >
                {{ displayName }}
              </p>
            </div>
          </div>
        </div>
        <div class="mt-4 flex w-full flex-none gap-x-4 px-6">
          <dt class="flex-none">
            <span class="sr-only">{{ userId }}</span>
            <CalendarDaysIcon
              class="h-6 w-5 text-gray-400"
              aria-hidden="true"
            />
          </dt>
        </div>
        <div class="mt-4 flex w-full flex-none gap-x-4 px-6">
          <dd class="text-sm leading-6 text-gray-500">
            <p>roomId: {{ roomId }}</p>
          </dd>
        </div>
        <div class="mt-4 flex w-full flex-none gap-x-4 px-6">
          <dd class="text-sm leading-6 text-gray-500">
            groupId: {{ groupId }}
          </dd>
        </div>
      </dl>
      <div class="mt-6 border-t border-gray-900/5 px-6 py-6">
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900"
          >Register DEDE <span aria-hidden="true">&rarr;</span></a
        >
      </div>
    </div>
    <div
      class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"
    />
    <div
      class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-orange-500 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"
    />
  </section>
  <div>
    <!-- Profile Card -->

    <!-- ... (Rest of your existing template) -->
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import liff from "@line/liff";
import "primevue/resources/themes/saga-blue/theme.css"; // theme
import "primevue/resources/primevue.min.css"; // core css
import "primeicons/primeicons.css"; // icons

// Import PrimeVue button component

// Define the button component

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

const decodeIDToken = ref("");
const type = ref("");
const viewType = ref("");
const utouId = ref("");
const roomId = ref("");
const idToken = ref("");
const setIdToken = ref("");
const groupId = ref("");

onMounted(async () => {
  try {
    await liff.init({ liffId: "2000714922-XOb4DG4e" }, () => {
      if (liff.isLoggedIn()) {
        runapp();
      } else {
        liff.login();
      }
    });
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
      decodeIDToken.value = liff.getDecodedIDToken().email;
    }
  } catch (error) {
    console.error("Error getting user profile:", error);
  }
}
// async function sendMsg() {
//   try {
//     if (liff.getContext().type !== "none") {
//       await liff.sendMessages([
//         {
//           type: "sticker",
//           stickerId: "11",
//           packageId: "1",
//         },
//       ]);
//       console.log("Message sent successfully!");
//     }
//   } catch (error) {
//     console.error("Error in sending message", error);
//   }
// }
function runapp() {
  idToken.value = liff.getIDToken();
  // Assuming setIdToken is a method to update idToken state
  setIdToken(idToken);
  getUserprofile();
  getEnvironment();
  getContext();
  liff
    .getProfile()
    .then((profile) => {
      console.log(profile);
      pictureUrl.value = profile.value.pictureUrl;
      userId.value = profile.value.userId;
      statusMessage.value = profile.value.statusMessage;
      displayName.value = profile.value.displayName;
      decodeIDToken.value = liff.getDecodedIDToken().email;
    })
    .catch((err) => console.error(err));
}
function getContext() {
  type.value = liff.getContext().type;
  viewType.value = liff.getContext().viewType;
  utouId.value = liff.getContext().utouId;
  roomId.value = liff.getContext().roomId;
  groupId.value = liff.getContext().groupId;
}

function getEnvironment() {
  os.value = liff.getOS();
  language.value = liff.getLanguage();
  version.value = liff.getVersion();
  accessToken.value = liff.getAccessToken();
  isInClient.value = liff.isInClient();
}
</script>

<style>
/* Add any style you want here */
</style>
