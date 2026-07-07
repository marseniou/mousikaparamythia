<template>
  <div
    :style="gradientStyle"
    class="animate-gradient-x min-h-screen font-sans pb-40"
  >
    <header class="container mx-auto px-4 py-8 text-center">
      <h1
        :style="{ color: headerColor }"
        class="main-title text-6xl font-bold mb-4"
      >
        Μουσικά Παραμύθια
      </h1>
      <p :style="{ color: headerColor }" class="text-xl opacity-90">
        απ' όλο τον κόσμο<br />
        λαϊκά παραμύθια με μουσική και αφήγηση από τον Μάριο Αρσενίου
      </p>
    </header>
    <slot />
    <button
      @click="toggleTheme"
      class="fixed top-4 right-4 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white px-4 py-2 rounded-full shadow-lg transition-colors duration-300 z-50"
    >
      {{ isNightMode ? "☀️" : "🌙" }}
    </button>
    <footer
      class="fixed bottom-0 left-0 w-full p-4 bg-white dark:bg-gray-900 border-t-2 border-gray-200 dark:border-gray-700 text-center"
    >
      <div class="flex justify-center items-center flex-wrap">
        <NuxtLink
          to="/"
          class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-colors duration-300 mb-2"
        >
          Όλα τα παραμύθια
        </NuxtLink>
        <NuxtLink
          to="/game"
          class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-colors duration-300 ml-4 mb-2"
        >
          Παιχνίδι Μνήμης
        </NuxtLink>
        <a
          href="https://facebook.com/mousikaparamythia"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-colors duration-300 ml-4 mb-2"
        >
          Τα παραμύθια στο FB
        </a>
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=https://mousikaparamythia.eu/"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-colors duration-300 ml-4 mb-2"
        >
          Μοιράστε στο Facebook
        </a>
        <a
          href="https://www.facebook.com/%CE%96%CF%89%CE%B3%CF%81%CE%B1%CF%86%CE%B9%CE%BA%CE%AE-%CE%B3%CE%B9%CE%B1-%CE%A0%CE%B1%CE%B9%CE%B4%CE%B9%CE%AC-373261022751925"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-colors duration-300 ml-4 mb-2"
        >
          Ζωγραφική για παιδιά
        </a>
      </div>
      <div class="mt-4">
        <a
          href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://licensebuttons.net/l/by-nc-nd/4.0/88x31.png"
            alt="Creative Commons License"
            class="mx-auto"
          />
        </a>
      </div>
      <div class="mt-2 text-xs text-gray-600 dark:text-gray-400">
        <p>Μουσικά παραμύθια από τον Μάριο Αρσενίου</p>
        <p>&copy; 2017 - {{ new Date().getFullYear() }}</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useTheme } from "~/composables/useTheme";
import { useBackground } from "~/composables/useBackground";
import { useHead } from "#app";
import { computed } from "vue";

const { isNightMode, toggleTheme } = useTheme();
const { selectedPalette } = useBackground();

const gradientStyle = computed(() => {
  if (isNightMode.value) {
    return {
      background: `linear-gradient(to right, #0F172A, #1E293B, #334155)`,
      backgroundSize: "400% 400%",
    };
  }
  return {
    background: `linear-gradient(to right, ${selectedPalette.value.from}, ${selectedPalette.value.via}, ${selectedPalette.value.to})`,
    backgroundSize: "400% 400%",
  };
});

const headerColor = computed(() => {
  return isNightMode.value ? "#E2E8F0" : selectedPalette.value.text;
});

useHead({
  htmlAttrs: {
    class: () => (isNightMode.value ? "dark" : ""),
  },
  meta: [{ property: "og:image", content: "/mousika_paramythia.jpg" }],
});
</script>

<style>
.main-title {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
.dark .main-title {
  text-shadow: 2px 2px 6px rgba(255, 255, 255, 0.15);
}
</style>
