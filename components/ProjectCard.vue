<template>
  <div class="flex flex-col lg:flex-row lg:items-stretch items-center justify-around">
    <div
      v-for="project of projects"
      class="flex flex-col border rounded-md my-4 lg:mx-2 lg:w-1/3 mx-0 max-w-xs md:max-w-sm overflow-hidden custom-shadow"
    >
        <img v-if="project.completed" :src="project.img" class="mx-auto rounded-t-md" alt="Image of Project" />
        <img v-else :src="project.img" class="mx-auto rounded-t-md blur-sm" alt="Image of Project" />
        <div class="py-5 px-5">
          <div class="flex items-center justify-between">
            <p class="font-semibold text-lg truncate">{{ project.title }}</p>
            <div
              class="flex items-center border border-green-500 rounded-xl p-1 px-2"
              v-if="project.completed"
            >
              <Icon class="text-green-500" name="mdi:check"/>
              <p class="text-xs text-green-500 font-light">Completed</p>
            </div>
            <div v-else class="flex items-center min-w-fit border border-orange-400 rounded-xl p-1 px-2">
              <Icon class="text-orange-400" name="mdi:cogs"/>
              <p class="text-xs text-orange-400 font-light ml-1">In Progress</p>
            </div>
          </div>
          <div class="flex flex-wrap mt-6">
            <div class="flex items-center mr-4 mb-2" v-for="ts of project.techstack">
              <Icon :name="ts.icon" />
              <p class="ml-1 text-sm">{{ ts.name }}</p>
            </div>
          </div>
          <p class="mt-6">{{ project.description }}</p>
        </div>
        <NuxtLink class="flex items-center justify-center mt-auto mb-6 accent" :to="project.link" target="_blank" rel="noopener noreferrer">
          <Icon class="mr-1" size="24px" name="mdi:github-box"/>
          <p>View this Project on Github</p>
        </NuxtLink>
    </div>
  </div>
</template>

<script setup>
let projects = [
  {
    title: "CheckIt",
    img: "/checkit.png",
    description:"As part of a school diploma project, three of my colleagues and I developed this Vue 2 Web Application. This project is about improving the communication between teachers and students. To reach this goal, we programmed a Progressive Web App called 'CheckIt', where students are able to give feedback to teachers and their lessons anonymously. Teachers can create feedback sessions in CheckIt, upload them to Google Classroom for students to see, and after feedback has been collected from the students, the teachers can check the results of the feedback, which are displayed using charts.",
    techstack: [
      {
        name: "Vue.js",
        icon: "vscode-icons:file-type-vue",
      },
      {
        name: "TailwindCSS",
        icon: "vscode-icons:file-type-tailwind",
      },
      {
        name: "Node.js",
        icon: "vscode-icons:file-type-node",
      },
      {
        name: "MongoDB",
        icon: "vscode-icons:file-type-mongo",
      },
    ],
    completed: true,
    link: "https://github.com/ronaldrupp/checkit-app",
  },
  {
    title: "My Portfolio",
    img: "/portfolio.png",
    description:"My Portfolio Website, that you are currently visiting, is obviously also one of my projects. The goal was to create a website that tells more about me and showcases the skills I have and the projects I have done so far, so it can always be attached to any job application for recruiters and companies to see. This was combined with getting into the Nuxt 3 framework, as I have been wanting to use it for future projects, since it is based on Vue.js which I was familiar with already due to my educational background.",
    techstack: [
      {
        name: "Nuxt.js",
        icon: "vscode-icons:file-type-nuxt",
      },
      {
        name: "TailwindCSS",
        icon: "vscode-icons:file-type-tailwind",
      },
    ],
    completed: true,
    link: "https://github.com/Prengelshausen/pascalreng-portfolio",
  },
  {
    title: "Pokéstarter Pokédex",
    img: "/pokestarter.png",
    description:"This project is a 'fun-project' that I have currently in development. As a big Pokémon fan and also wanting to learn more about Vue 3, as we only learned Vue 2 in school, I wanted to start with a simple CRUD-Application that fetches all the Pokémon starters for each generation and their stats, values and additional information. In this Application you will even be able to create your own Pokémon starter with customized stats and information, which can always be updated or deleted. The display of each Pokémon is inspired by the typical Pokémon Cards.",
    techstack: [
      {
        name: "Vue.js",
        icon: "vscode-icons:file-type-vue",
      },
      {
        name: "TailwindCSS",
        icon: "vscode-icons:file-type-tailwind",
      },
      {
        name: "Node.js",
        icon: "vscode-icons:file-type-node",
      },
    ],
    completed: false,
    link: "https://github.com/Prengelshausen/pokestarter_crudapp",
  },
];
</script>

<style scoped>
.custom-shadow:hover {
  box-shadow: 0px 4px 25px rgba(9, 9, 12, 0.1);
}
</style>
