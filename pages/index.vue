<template>
  <div class="font-sans">
    <div class="container mx-auto px-4 py-8">
      <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        <li
          v-for="(tale, index) in talesWithColors"
          :key="tale.id"
          class="animate-float"
          :style="{ animationDelay: `${index * 200}ms` }"
        >
          <NuxtLink
            :to="`/${tale.id}`"
            :style="{ background: tale.bgGradient }"
            class="block p-4 rounded-tl-3xl rounded-tr-lg rounded-br-lg rounded-bl-lg shadow-lg transform hover:-rotate-6 transition-transform duration-300 border border-white dark:border-gray-600"
          >
            <img
              :src="`/images/thumbs/${tale.id}.jpg`"
              alt=""
              class="w-32 h-32 mx-auto object-cover rounded-full border-4 border-white dark:border-gray-600 shadow-md"
            />
            <h2
              class="text-xl italic font-normal tracking-tight text-gray-700 dark:text-night-text mt-4 text-center"
            >
              {{ tale.title }}
            </h2>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useTheme } from "~/composables/useTheme";
const { isNightMode } = useTheme();
const tales = useTales();

// A list of pastel colors for the cards
const cardPastelColors = [
  "#F8C8DC",
  "#A7C7E7",
  "#C1E1C1",
  "#FDFD96",
  "#C3B1E1",
  "#FFDAB9",
  "#E6E6FA",
  "#BEE3DB",
];

const cardPastelColors2 = [
  "#F4A7C4",
  "#89ADDD",
  "#A3D3A3",
  "#FBFB78",
  "#A593D3",
  "#FFC891",
  "#D8D8F2",
  "#A0D5C9",
];

const getRandomGradient = () => {
  const color1 =
    cardPastelColors[Math.floor(Math.random() * cardPastelColors.length)];
  const color2 =
    cardPastelColors2[Math.floor(Math.random() * cardPastelColors2.length)];
  return `linear-gradient(to bottom right, ${color1}, ${color2})`;
};

const talesWithColors = computed(() => {
  if (!tales) return [];
  return tales.map((tale) => ({
    ...tale,
    bgGradient: isNightMode.value ? "#1E293B" : getRandomGradient(),
  }));
});

useSeoMeta({
  ogTitle: "Μουσικά Παραμύθια",
  ogDescription:
    "Απ' όλο τον κόσμο, λαϊκά παραμύθια με μουσική και αφήγηση από τον Μάριο Αρσενίου.",
  ogImage: "/mousika_paramythia.jpg",
  ogUrl: "https://mousikaparamythia.eu/",
});
</script>
