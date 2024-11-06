<template>
  <ul v-for="node in treeData" :key="node.id" class="pl-4">
    <TreeNode :node="node" />
  </ul>
</template>

<script setup lang="ts">
const treeData = ref<TreeData>([]);

const fetchData = async () => {
  try {
    const response = await fetch('/api/tree');
    if (!response.ok) {
      throw new Error(`HTTP ошибка! статус: ${response.status}`);
    }
    const data = await response.json();
    treeData.value = data as TreeData;
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
  }
};

onMounted(fetchData);
</script>
