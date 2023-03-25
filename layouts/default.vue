<template>
  <div>
    <header class="primary sticky top-0 flex justify-between z-10 py-4 pl-4 pr-2 md:px-14">
      <NuxtLink to="/">Pascal Rengelshausen</NuxtLink>
      <nav>
        <ul class="flex gap-2">
          <li class="accent">
            <a class="flex items-center" href="/Rengelshausen_CV.pdf" download="">
              <Icon class="accent mx-1" name="mdi:download"/>
              <p>Download CV</p>
            </a>
          </li>
        </ul>
      </nav>
    </header>
    <div class="mx-auto">
      <slot />
    </div>
    <footer class="primary flex flex-col md:flex-row justify-between items-left md:items-center py-10 md:px-14 pl-4 pr-2">
      <div>
        <p class="font-light text-sm">© 2023 Made by</p>
        <p class="font-medium">Pascal Rengelshausen</p>
        <p class="font-light text-sm">Austrian web developer based in Lisbon, Portugal.</p>
      </div>
      <div class="flex items-center mt-2 md:mt-0">
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
