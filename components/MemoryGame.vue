<template>
  <div class="memory-game relative">
    <div class="grid grid-cols-6 gap-4">
      <div
        v-for="card in cards"
        :key="card.id"
        class="card"
        @click="flipCard(card)"
      >
        <div
          class="card-inner"
          :class="{ 'is-flipped': card.isFlipped || card.isMatched }"
        >
          <div class="card-face card-face-front">
            <img
              :src="`/images/thumbs/${card.image}.jpg`"
              :alt="card.image"
              class="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div class="card-face card-face-back">
            {{ card.id + 1 }}
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="hasWon"
      class="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center rounded-lg z-10"
    >
      <h2 class="text-white text-4xl font-bold mb-4">Συγχαρητήρια!</h2>
      <p class="text-white text-xl mb-8">Βρήκατε όλες τις τριάδες!</p>
      <button
        @click="resetGame"
        class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-colors duration-300"
      >
        Παίξτε Ξανά
      </button>
      <a
        href="https://ko-fi.com/J3J2U3RKN"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-colors duration-300"
      >
        Στήριξέ με στο Ko-fi
      </a>
    </div>
    <audio
      ref="successSound"
      src="https://www.myinstants.com/media/sounds/anime-wow-sound-effect.mp3"
      preload="auto"
    ></audio>
    <audio
      ref="winSound"
      src="https://www.myinstants.com/media/sounds/trololo.mp3"
      preload="auto"
    ></audio>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const tales = useTales();

const cards = ref([]);
const flippedCards = ref([]);
const hasWon = ref(false);
const clickCount = ref(0);
const successSound = ref(null);
const winSound = ref(null);

defineExpose({
  clickCount,
});

const setupGame = () => {
  hasWon.value = false;
  flippedCards.value = [];
  clickCount.value = 0;
  if (!tales) return;

  const gameTales = tales.slice(0, 12);
  const images = gameTales.map((tale) => tale.id);

  const gameImages = [...images, ...images, ...images];
  gameImages.sort(() => Math.random() - 0.5);

  cards.value = gameImages.map((image, index) => ({
    id: index,
    image: image,
    isFlipped: false,
    isMatched: false,
  }));
};

const flipCard = (card) => {
  if (card.isMatched || card.isFlipped || flippedCards.value.length === 3) {
    return;
  }

  clickCount.value++;
  card.isFlipped = true;
  flippedCards.value.push(card);

  if (flippedCards.value.length === 3) {
    checkForMatch();
  }
};

const checkForMatch = () => {
  const [card1, card2, card3] = flippedCards.value;
  if (card1.image === card2.image && card2.image === card3.image) {
    card1.isMatched = true;
    card2.isMatched = true;
    card3.isMatched = true;
    flippedCards.value = [];
    successSound.value.play();
    checkForWin();
  } else {
    setTimeout(() => {
      card1.isFlipped = false;
      card2.isFlipped = false;
      card3.isFlipped = false;
      flippedCards.value = [];
    }, 1200);
  }
};

const checkForWin = () => {
  if (cards.value.every((card) => card.isMatched)) {
    hasWon.value = true;
    winSound.value.play();
  }
};

const resetGame = () => {
  setupGame();
};

onMounted(() => {
  setupGame();
});
</script>

<style scoped>
.card {
  perspective: 1000px;
  width: 100px;
  height: 100px;
  cursor: pointer;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.card-inner.is-flipped {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 0.5rem;
}

.card-face-front {
  transform: rotateY(180deg);
}

.card-face-back {
  background-color: #3b82f6;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
}
</style>
