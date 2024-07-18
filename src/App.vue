<script setup lang="ts">
import QRCode from '@/components/QRCode.vue';
</script>

<template>
  <main class="bg-light-gray grid h-screen place-items-center">
    <article
      class="w-[320px] rounded-[20px] bg-white p-4 drop-shadow-[0_25px_25px_rgba(0,0,0,0.04)]"
    >
      <div class="bg-blue relative rounded-[10px] p-16">
        <QRCode />
      </div>
      <div class="font-outfit text-gray my-6 flex flex-col gap-4 text-center">
        <h2 class="text-dark-navy text-[22px] font-bold leading-tight">
          Improve your front-end skills by building projects
        </h2>
        <p class="px-4 text-[15px] leading-tight tracking-[0.19px]">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </article>
  </main>
</template>
