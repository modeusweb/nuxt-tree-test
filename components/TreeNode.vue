<template>
  <li v-if="node">
    <div @click="toggleOpen" class="cursor-pointer flex items-center gap-2">
      <span v-if="hasChildren" class="text-lg">
        {{ isOpen ? '−' : '+' }}
      </span>
      <span>{{ nodeName }}</span>
      <small v-if="breadcrumbs">({{ breadcrumbs }})</small>
    </div>
    <a
      v-if="nodeLink"
      :href="nodeLink"
      target="_blank"
      class="text-blue-500 text-sm"
      >{{ nodeLink }}</a
    >
    <ul v-if="isOpen && hasChildren" class="pl-4">
      <TreeNode v-for="child in node.childs" :key="child.id" :node="child" />
    </ul>
  </li>
</template>

<script setup lang="ts">
interface Props {
  node: Category;
}

const props = defineProps<Props>();

const isOpen = ref(false);
const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

const localeStore = useLocaleStore();
const currentLocale = computed(() => localeStore.locale);

// Получаем данные локали для текущего узла
const getNodeLocaleData = (node: typeof props.node) => {
  return (
    node.locale?.[currentLocale.value] ||
    node.locale?.['ru'] ||
    node.locale?.['en'] ||
    node.locale?.['fr']
  );
};

const nodeName = computed(
  () => getNodeLocaleData(props.node)?.cg_name || 'Без названия',
);
const nodeLink = computed(
  () => `/catalog/${getNodeLocaleData(props.node)?.link || '#'}`,
);
const breadcrumbs = computed(() => {
  const pathToTop = props.node.path_to_top || [];
  return pathToTop
    .map((id: number) => {
      const parent = props.node; // Используем текущий узел для поиска
      return parent ? getNodeLocaleData(parent)?.cg_name : '';
    })
    .filter(Boolean)
    .join(' -> ');
});

// Проверка на наличие дочерних элементов
const hasChildren = computed(
  () => Array.isArray(props.node.childs) && props.node.childs.length > 0,
);
</script>
