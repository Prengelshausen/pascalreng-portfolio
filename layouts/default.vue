<template>
  <div>
    <header
      class="sticky top-0 flex justify-between p-4 bg-black text-white backdrop-blur"
    >
      <NuxtLink to="/">Pascal Rengelshausen</NuxtLink>
      <nav>
        <ul class="flex gap-4">
          <li><NuxtLink to="/projects">Projects</NuxtLink></li>
          <li><a href="/Rengelshausen_CV.pdf" download="">Download CV</a></li>
        </ul>
      </nav>
    </header>
    <div class="mx-auto">
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
