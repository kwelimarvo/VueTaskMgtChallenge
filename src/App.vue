<template>
  <nav class="bg-lime-400">
    <div class="container">
      <div class="flex items-center">
        <router-link to="/" class="font-mono font-medium hover:text-white iniline-block px-16 py-4 transition-colors hover:bg-sky-500 duration-300">Home</router-link>
        <router-link to="/completed" class="font-mono font-medium hover:text-white iniline-block px-16 py-4 transition-colors hover:bg-sky-500 duration-300">Complete Tasks</router-link>
        <router-link to="/incomplete" class="font-mono font-medium hover:text-white iniline-block px-16 py-4 transition-colors hover:bg-sky-500 duration-300">Inomplete Tasks</router-link>
      </div>
    </div> 
  </nav>

  <RouterView />
</template>

