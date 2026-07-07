<template>
  <div class="font-sans relative overflow-hidden">
    <div class="absolute inset-0 z-0">
      <div
        v-for="shape in shapes"
        :key="shape.id"
        class="falling-shape"
        :style="shape.style"
      >
        <svg
          v-if="shape.type === 'star'"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-full h-full"
        >
          <path
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-full h-full"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      </div>
    </div>
    <div class="container mx-auto px-4 py-8 flex justify-center relative z-20">
      <div
        class="bg-white/80 dark:bg-night-card/80 backdrop-blur-sm rounded-lg shadow-xl p-8 border-2 border-white dark:border-gray-600 max-w-2xl w-full"
      >
        <h2
          class="text-4xl font-bold text-center text-gray-700 dark:text-night-text mb-6"
        >
          {{ title }}
        </h2>
        <img
          :src="`/images/bigger/${name}.jpg`"
          alt=""
          class="w-full h-auto object-cover rounded-lg mb-8 border-8 border-white dark:border-gray-600 shadow-lg"
        />
        <audio controls class="w-full rounded-full shadow-lg">
          <source :src="`/tales/${name}.mp3`" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <div class="text-center mt-8">
          <NuxtLink
            to="/"
            class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-colors duration-300"
          >
            Πίσω στα παραμύθια
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";

const route = useRoute();
const name = route.params.name;
const tales = useTales();
const tale = tales.find(t => t.id === name);
const title = tale ? tale.title : name.replace(/-/g, " ");

const shapes = ref([]);

onMounted(() => {
  for (let i = 0; i < 20; i++) {
    const type = Math.random() > 0.5 ? "star" : "bubble";
    const size = `${Math.random() * 3 + 1}rem`;
    const xEnd = `${Math.random() * 20 - 10}vw`; // Random horizontal drift
    shapes.value.push({
      id: i,
      type: type,
      style: {
        width: size,
        height: size,
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 20 + 15}s`,
        animationDelay: `${Math.random() * 10}s`,
        "--x-end": xEnd,
      },
    });
  }
});

useSeoMeta({
  title: `${title} - Μουσικά Παραμύθια`,
  description: `Ακούστε το παραμύθι '${title}' με μουσική και αφήγηση από τον Μάριο Αρσενίου.`,
  ogTitle: `${title} - Μουσικά Παραμύθια`,
  ogDescription: `Ακούστε το παραμύθι '${title}' με μουσική και αφήγηση από τον Μάριο Αρσενίου.`,
  ogImage: `https://mousikaparamythia.eu/images/bigger/${name}.jpg`,
  ogUrl: `https://mousikaparamythia.eu/${name}`,
});
</script>
