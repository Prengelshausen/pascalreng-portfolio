<template>
  <div>
    <div class="flex flex-col bg-white text-black w-full p-6 md:p-12">
      <div class="text-center">
        <p class="text-2xl mb-4 font-bold">My Skills</p>
        <p class="font-medium">
          Technology Stack I learned and used in my 5 years
          of school
        </p>
        <p class="font-light text-xs italic mt-2">
          Note: Some technologies, like Nuxt.js, I learned by myself during and even after completing school
        </p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 mt-12 place-items-center">
        <div
          class="flex flex-col items-center text-black hover:text-sky-400"
          v-for="skill of skills"
        >
          <div
            :class="`border custom-shadow rounded-xl py-5 px-5 my-4`"
          >
            <Icon size="54px" :name="skill.icon" />
          </div>
          <p class="font-medium text-lg">{{ skill.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let skills = [
  { name: "HTML5", icon: "vscode-icons:file-type-html"},
  { name: "CSS3", icon: "vscode-icons:file-type-css"},
  {
    name: "Javascript",
    icon: "vscode-icons:file-type-js-official",
  },
  { name: "Vue.js", icon: "vscode-icons:file-type-vue"},
  { name: "Nuxt.js", icon: "vscode-icons:file-type-nuxt"},
  { name: "Node.js", icon: "vscode-icons:file-type-node"},
  { name: "Jest", icon: "vscode-icons:file-type-jest"},
  { name: "jQuery", icon: "logos:jquery"},
  { name: "Git", icon: "vscode-icons:file-type-git"},
  { name: "C#", icon: "vscode-icons:file-type-csharp2"},
  { name: "MySQL", icon: "vscode-icons:file-type-mysql"},
  {
    name: "PostgreSQL",
    icon: "vscode-icons:file-type-pgsql",
  },
  { name: "MongoDB", icon: "vscode-icons:file-type-mongo"},
  { name: "AdobeXD", icon: "logos:adobe-xd"},
];
</script>

<style scoped>
.custom-shadow {
  box-shadow: 0px 4px 25px rgba(9, 9, 12, 0.1);
}
</style>
