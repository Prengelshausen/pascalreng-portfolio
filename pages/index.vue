<template>
  <div>
    <div
      class="w-full bg-black text-white px-4 pt-4 flex items-center justify-between"
    >
      <img
        class="w-60 max-w-xs object-contain self-start"
        src="../assets/images/_DSC3004.png"
        alt="Me"
      />
      <div class="text-center flex items-center">
        <div>
          <p class="font-bold text-2xl">HI, I'M PASCAL!</p>
          <p class="my-5">
            I'm an Austrian web developer, who loves to bring ideas to life.
          </p>
          <div class="flex justify-between">
            <a
              class="flex items-center cursor-pointer"
              href="mailto:rengelshausen.business@gmail.com"
            >
              <Icon class="text-2xl" name="mdi:email" />
              <p class="ml-2">E-mail me</p>
            </a>
            <a
              class="flex items-center cursor-pointer"
              href="https://www.linkedin.com/in/pascal-rengelshausen-2630b3233/"
            >
              <Icon class="text-2xl" name="mdi:linkedin" />
              <p class="ml-2">My LinkedIn</p>
            </a>
            <a
              class="flex items-center cursor-pointer"
              href="https://github.com/Prengelshausen"
            >
              <Icon class="text-2xl" name="mdi:github-box" />
              <p class="ml-2">My Github</p>
            </a>
          </div>
        </div>
        <div>
          <Icon class="ml-10 text-xl" name="mdi:greater-than" />
        </div>
      </div>

      <div class="w-60 max-w-xs"></div>
    </div>
  </div>
</template>

<script setup></script>
