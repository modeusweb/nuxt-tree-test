<template>
  <select v-model="locale" class="p-2 border rounded">
    <option value="ru">RU</option>
    <option value="en">EN</option>
    <option value="fr">FR</option>
  </select>
</template>

<script setup lang="ts">
const localeStore = useLocaleStore();

const locale = computed({
  get: () => localeStore.locale,
  set: (value) => localeStore.setLocale(value),
});
</script>
