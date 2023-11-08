<template>
  <section
    class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 ml-4 mr-4"
  >
    <div
      class="rounded-lg bg-gray-50 shadow-sm ring-1 pt-2 ring-gray-900/5 mx-4 my-12"
    >
      <dl class="flex flex-wrap">
        <div class="flex-auto pl-6 pt-6">
          <div class="flex items-center">
            <div>
              <img
                class="inline-block h-9 w-9 rounded-full"
                :src="pictureUrl"
                alt="User's picture"
                v-if="pictureUrl"
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
          <dd class="mt-1 text-base font-semibold leading-6 text-gray-900">
            Have a good day {{ displayName }} !
          </dd>
        </div>
        <div class="flex-none self-end px-6 pt-4">
          <dt class="sr-only">Status</dt>
        </div>
        <div
          class="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6"
        >
          <dt class="flex-none">
            <span class="sr-only">Client</span>
            <UserCircleIcon class="h-6 w-5 text-gray-400" aria-hidden="true" />
          </dt>
          <dd class="text-sm font-medium leading-6 text-gray-900">
            Hello {{ displayName }} Welcome to DEDE point
          </dd>
        </div>
        <div class="mt-4 flex w-full flex-none gap-x-4 px-6">
          <dt class="flex-none">
            <span class="sr-only">{{ userId }}</span>
            <CalendarDaysIcon
              class="h-6 w-5 text-gray-400"
              aria-hidden="true"
            />
          </dt>
          <dd class="text-sm leading-6 text-gray-500">
            <time datetime="2023-01-31">January 31, 2023</time>
          </dd>
        </div>
        <div class="mt-4 flex w-full flex-none gap-x-4 px-6">
          <dt class="flex-none">
            <span class="sr-only">Status</span>
            <CreditCardIcon class="h-6 w-5 text-gray-400" aria-hidden="true" />
          </dt>
          <dd class="text-sm leading-6 text-gray-500">Paid with MasterCard</dd>
        </div>
      </dl>
      <div class="mt-6 border-t border-gray-900/5 px-6 py-6">
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900"
          >register DEDE <span aria-hidden="true">&rarr;</span></a
        >
      </div>
    </div>
    <div
      class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"
    />
    <div
      class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-orange-500 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"
    />
    <!-- <div class="mx-auto max-w-2xl lg:max-w-4xl">
      <img
        class="mx-auto h-64 w-64 rounded-full"
        :src="pictureUrl"
        alt="User's picture"
        v-if="pictureUrl"
      />

      <figure class="mt-10">
        <blockquote
          class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9"
        >
          <p>“Hi {{ displayName }}”</p>
        </blockquote>
        <figcaption class="mt-10 mx-2 my-2">
          <div class="text-gray-600">ID{{ userId }}</div>

          <div
            class="mt-4 flex items-center justify-center space-x-3 text-base"
          >
            <p>Email: {{ decodeIDToken }}</p>
          </div>
          <div
            class="mt-4 flex items-center justify-center space-x-3 text-base"
          >
            <p>Status Message: {{ statusMessage }}</p>
          </div>
          <div
            class="mt-4 flex items-center justify-center space-x-3 text-base"
          >
            <p>OS: {{ os }}</p>
          </div>
          <div
            class="mt-4 flex items-center justify-center space-x-3 text-base"
          >
            <p>Language: {{ language }}</p>
          </div>
          <div
            class="mt-4 flex items-center justify-center space-x-3 text-base"
          >
            <p>Version: {{ version }}</p>
          </div>
          <div
            class="mt-4 flex items-center justify-center space-x-3 text-base"
          >
            <p>Access Token:</p>
          </div>
          <div
            class="mt-4 flex items-center justify-center space-x-3 text-base"
          >
            <p>{{ accessToken }}</p>
          </div>
          <div
            class="mt-4 flex items-center justify-center space-x-3 text-base"
          >
            <p>Is In Client: {{ isInClient }}</p>
          </div>
          <div
            class="mt-4 flex items-center justify-center space-x-3 text-base"
          >
            <p>type: {{ type }}</p>
          </div>
          <div
            class="mt-4 flex items-center justify-center space-x-3 text-base"
          >
            <p>viewType: {{ viewType }}</p>
          </div>
          <div
            class="mt-4 flex items-center justify-center space-x-3 text-base"
          >
            <p>utouId: {{ utouId }}</p>
          </div>
          <div
            class="mt-4 flex items-center justify-center space-x-3 text-base"
          >
            <p>roomId: {{ roomId }}</p>
          </div>
          <div
            class="mt-4 flex items-center justify-center space-x-3 text-base"
          >
            <p>groupId: {{ groupId }}</p>
          </div>
          <div
            class="mt-4 flex items-center justify-center space-x-3 text-base"
          >
            <button
              class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
              @click="sendMsg()"
            >
              <svg
                class="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>send</span>
            </button>
          </div>
        </figcaption>
      </figure>
    </div> -->
  </section>
  <div>
    <!-- Profile Card -->

    <!-- ... (Rest of your existing template) -->
  </div>
  <div>
    <!-- <p-card title="Profile Details" :style="{ width: '300px', margin: 'auto' }"> -->
    <!-- <template #title>
        <img
          :src="pictureUrl"
          alt="User's picture"
          v-if="pictureUrl"
          class="p-mb-2"
        />
        <div class="p-text-center">{{ displayName }}</div>
      </template> -->
    <!-- <template #content>
        <p>Display Name: {{ displayName }}</p>

        <p></p>
        <p>Status Message: {{ statusMessage }}</p>
      </template> -->
    <!-- </p-card> -->
    <!-- <InputNumber v-model="value1" inputId="integeronly" /> -->

    <!-- <p-button label="Click Me"></p-button> -->

    <!-- Display user details -->
    <!-- <p></p>
    <p>Display Name: {{ displayName }}</p>
    <p>User ID: {{ userId }}</p>
    <p></p> -->
  </div>
  <!-- <div class="surface-ground text-center px-0 sm:px-4 py-8 md:px-6 lg:px-8">
    <Carousel :value="company">
      <template #item="slotProps">
        <div class="flex justify-content-center">
          <div
            class="surface-card shadow-2 px-2 md:px-6 py-5 border-round mb-4 text-900 text-2xl line-highlight-3"
            style="max-width: 600px"
          >
            {{ slotProps.data.text }}
          </div>
        </div>

        <img
          :src="
            'images/blocks/testimonial/testimonials-' +
            slotProps.data.image +
            '.png'
          "
          width="56"
          height="56"
          :alt="slotProps.data.name"
          class="mb-3"
        />
        <div class="text-900 font-bold line-height-3">
          {{ slotProps.data.name }}
        </div>
        <div class="text-600 line-height-3 mb-4">Company Title</div>
      </template>
    </Carousel>
  </div> -->
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
const groupId = ref("");

onMounted(async () => {
  try {
    await liff.init({ liffId: "2000714922-XOb4DG4e" });
    getUserprofile();
    getEnvironment();
    getContext();
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
