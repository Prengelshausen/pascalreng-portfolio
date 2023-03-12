<template>
  <div class="flex flex-col lg:flex-row items-center justify-around">
    <div
      v-for="project of projects"
      class="border rounded-md my-4 lg:mx-2 mx-0 max-w-xs md:max-w-sm cursor-pointer custom-shadow"
    >
      <NuxtLink to="/projects">
        <img :src="project.img" alt="" />
        <div class="py-5 px-5">
          <div class="flex items-center justify-between">
            <p class="font-semibold text-lg">{{ project.title }}</p>
            <div
              class="flex items-center border border-green-500 rounded-xl p-1 px-2"
              v-if="project.completed"
            >
              <Icon class="text-green-500" name="mdi:check"/>
              <p class="text-xs text-green-500 font-extralight">Completed</p>
            </div>
            <div v-else class="flex items-center border border-orange-400 rounded-xl p-1 px-2">
              <Icon class="text-orange-400" name="mdi:cogs"/>
              <p class="text-xs text-orange-400 font-extralight ml-1">In Progress</p>
            </div>
          </div>
          <div class="flex mt-4">
            <div class="flex items-center mr-4" v-for="ts of project.techstack">
              <Icon :name="ts.icon" />
              <p class="ml-1">{{ ts.name }}</p>
            </div>
          </div>
          <p class="mt-8">{{ project.description }}</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
let projects = [
  {
    title: "Project 1",
    img: "/placeholder.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    techstack: [
      {
        name: "Vue.js",
        icon: "vscode-icons:file-type-vue",
      },
      {
        name: "Node.js",
        icon: "vscode-icons:file-type-node",
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
    title: "Project 2",
    img: "/placeholder.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    techstack: [
      {
        name: "Vue.js",
        icon: "vscode-icons:file-type-vue",
      },
      {
        name: "Node.js",
        icon: "vscode-icons:file-type-node",
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
    title: "Project 3",
    img: "/placeholder.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    techstack: [
      {
        name: "Vue.js",
        icon: "vscode-icons:file-type-vue",
      },
      {
        name: "Node.js",
        icon: "vscode-icons:file-type-node",
      },
      {
        name: "TailwindCSS",
        icon: "vscode-icons:file-type-tailwind",
      },
    ],
    completed: false,
    link: "https://github.com/Prengelshausen/pascalreng-portfolio",
  },
];
</script>

<style scoped>
.custom-shadow:hover {
  box-shadow: 0px 4px 25px rgba(9, 9, 12, 0.1);
}
</style>
