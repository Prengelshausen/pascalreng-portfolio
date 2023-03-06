<template>
  <div>
    <div class="bg-white text-black w-full px-8 py-8">
      <p class="text-2xl mb-4 text-center font-bold">My Experience</p>
      <p class="text-center font-medium">
        Tech Stack I learned and used on a regular basis in my 5 years of school
      </p>
      <div class="grid grid-cols-4 mt-12 place-items-center">
        <div
          v-for="skill of skills"
          :key="skill.name"
          class="border custom-shadow rounded-xl py-5 px-5 my-4"
        >
          <Icon class="text-6xl" :name="skill.icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let skills = [
  { name: "HTML5", icon: "vscode-icons:file-type-html" },
  { name: "CSS3", icon: "vscode-icons:file-type-css" },
  { name: "Javascript", icon: "vscode-icons:file-type-js-official" },
  { name: "Vue.js", icon: "vscode-icons:file-type-vue" },
  { name: "Node.js", icon: "vscode-icons:file-type-node" },
  { name: "jQuery", icon: "logos:jquery" },
  { name: "Jest", icon: "vscode-icons:file-type-jest" },
  { name: "Git", icon: "vscode-icons:file-type-git" },
  { name: "C#", icon: "vscode-icons:file-type-csharp2" },
  { name: "MySQL", icon: "vscode-icons:file-type-mysql" },
  { name: "PostgreSQL", icon: "vscode-icons:file-type-pgsql" },
  { name: "AdobeXD", icon: "logos:adobe-xd" },
];
</script>

<style scoped>
.custom-shadow {
  box-shadow: 0px 4px 25px rgba(9, 9, 12, 0.1);
}
</style>
