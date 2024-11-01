<template>
  <div>
    <ul v-for="node in treeData" :key="node.id" class="pl-4">
      <TreeNode :node="node" />
    </ul>
  </div>
</template>

<script setup lang="ts">
const treeData = ref([]);

const fetchData = async () => {
  treeData.value = await $fetch('/api/tree');
};

onMounted(() => {
  fetchData();
});
</script>
