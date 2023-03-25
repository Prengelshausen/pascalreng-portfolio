<template>
  <div>
    <div
      class="w-full primary px-4 pt-4 flex flex-col sm:flex-row items-center justify-between"
    >
      <img
        class="w-48 sm:w-60 max-w-xs object-contain mt-8 self-center sm:self-left order-2 sm:order-1"
        src="/_DSC3004.png"
        alt="Me"
      />
      <div class="text-center flex items-center order-1 sm:order-2">
        <div>
          <p class="font-bold text-2xl">HI, I'M PASCAL!</p>
          <p class="my-5 font-medium">
            I'm an Austrian web developer based in Lisbon. And I love to bring
            your web ideas to life!
          </p>
          <div class="flex justify-around">
            <a
              class="flex items-center accent"
              href="mailto:rengelshausen.business@gmail.com"
            >
              <Icon size="24px" name="mdi:email" />
              <p class="hidden lg:inline-block ml-2">E-mail me</p>
            </a>
            <a
              class="flex items-center accent"
              href="https://www.linkedin.com/in/pascal-rengelshausen-2630b3233/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Icon size="24px" name="mdi:linkedin" />
              <p class="hidden lg:inline-block ml-2">My LinkedIn</p>
            </a>
            <a
              class="flex items-center accent"
              href="https://github.com/Prengelshausen"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Icon size="24px" name="mdi:github-box" />
              <p class="hidden lg:inline-block ml-2">My Github</p>
            </a>
          </div>
        </div>
      </div>
      <div class="w-60 max-w-xs sm:order-3"></div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
</style>
