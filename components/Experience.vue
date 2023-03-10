<template>
  <div>
    <div class="flex flex-col bg-white text-black w-full p-12">
      <div class="text-center">
        <p class="text-2xl mb-4 font-bold">My Skills</p>
        <p class="font-medium">
          Technology Stack I learned and used on a regular basis in my 5 years
          of school
        </p>
        <p class="font-light text-xs italic mt-2">
          Note: The highlighted ones are technologies I am still using for my
          own private projects.
        </p>
      </div>
      <div class="grid grid-cols-4 mt-12 place-items-center">
        <div
          class="flex flex-col items-center text-black hover:text-sky-400"
          v-for="skill of skills"
        >
          <div
            :class="`border ${skill.special}-shadow rounded-xl py-5 px-5 my-4`"
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
  { name: "HTML5", icon: "vscode-icons:file-type-html", special: "custom" },
  { name: "CSS3", icon: "vscode-icons:file-type-css", special: "custom" },
  {
    name: "Javascript",
    icon: "vscode-icons:file-type-js-official",
    special: "custom",
  },
  { name: "Vue.js", icon: "vscode-icons:file-type-vue", special: "custom" },
  { name: "Node.js", icon: "vscode-icons:file-type-node", special: "custom" },
  { name: "Git", icon: "vscode-icons:file-type-git", special: "custom" },
  { name: "jQuery", icon: "logos:jquery", special: "normal" },
  { name: "Jest", icon: "vscode-icons:file-type-jest", special: "normal" },
  { name: "C#", icon: "vscode-icons:file-type-csharp2", special: "normal" },
  { name: "MySQL", icon: "vscode-icons:file-type-mysql", special: "normal" },
  {
    name: "PostgreSQL",
    icon: "vscode-icons:file-type-pgsql",
    special: "normal",
  },
  { name: "AdobeXD", icon: "logos:adobe-xd", special: "normal" },
];
</script>

<style scoped>
.normal-shadow {
  box-shadow: 0px 4px 25px rgba(9, 9, 12, 0.1);
}

.custom-shadow {
  box-shadow: 0px 4px 25px rgba(56, 191, 248, 0.5);
}
</style>
