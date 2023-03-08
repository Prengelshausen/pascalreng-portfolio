<template>
  <div>
    <header class="sticky top-0 flex justify-between py-4 px-14 backdrop-blur">
      <NuxtLink to="/">Pascal Rengelshausen</NuxtLink>
      <nav>
        <ul class="flex gap-4">
          <li><NuxtLink to="/projects">Projects</NuxtLink></li>
          <li class="accent">
            <a href="/Rengelshausen_CV.pdf" download="">Download CV</a>
          </li>
        </ul>
      </nav>
    </header>
    <div class="mx-auto">
      <slot />
    </div>
    <footer class="primary flex justify-between items-center py-10 px-14">
      <div>
        <p class="font-medium">Pascal Rengelshausen</p>
        <p class="font-light text-sm">Austrian web developer based in Lisbon, Portugal.</p>
      </div>
      <div class="flex flex-col items-center">
        <p class="font-light">Let's get in touch</p>
        <div>
          <a href="mailto:rengelshausen.business@gmail.com">
            <Icon class="accent" size="30px" name="mdi:email" />
          </a>
          <a
            href="https://www.linkedin.com/in/pascal-rengelshausen-2630b3233/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icon class="accent mx-1" size="30px" name="mdi:linkedin" />
          </a>
          <a
            href="https://github.com/Prengelshausen"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icon class="accent" size="30px" name="mdi:github-box" />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup></script>

<style scoped>
.router-link-exact-active {
  text-decoration: underline;
  text-underline-offset: 8px;
}
</style>
