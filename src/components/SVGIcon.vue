<script setup lang="ts">
  import Clipboard from '@/assets/clipboard-regular.svg';
  import ListUl from '@/assets/list-ul-solid.svg';
  import TableCell from '@/assets/table-cells-large-solid.svg';
  import { computed } from 'vue';
  import { Type } from '@/types/iconTypes';

  const props = withDefaults(
    defineProps<{
      type: Type;
    }>(),
    { type: Type.none },
  );

  const Icon = computed(() => {
    switch (props.type) {
      case Type.clipboard:
        return Clipboard;
      case Type.listUl:
        return ListUl;
      case Type.tableCells:
        return TableCell;
      default:
        return null;
    }
  });
</script>

<template>
  <Icon v-if="Icon" />
</template>
