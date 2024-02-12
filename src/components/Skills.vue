<script setup lang="ts">
  import Players from '@/components/Players.vue';
  import { AvatarHealth, Selection } from '@/types/avatarTypes';
  import { ref } from 'vue';
  import Avatar from './Avatar.vue';

  // withDefaults(
  //   defineProps<{
  //     isOpen: boolean;
  //   }>(),
  //   {
  //     isOpen: false,
  //   },
  // );

  const list = ref([
    { health: AvatarHealth.full, selection: Selection.current, title: 'elf', isActive: false },
    { health: AvatarHealth.damaged, selection: Selection.selected, title: 'mag', isActive: false },
    {
      health: AvatarHealth.nearlydead,
      selection: Selection.selected,
      title: 'fff',
      isActive: false,
    },
    { health: AvatarHealth.dead, selection: Selection.none, title: 'test', isActive: false },
    {
      health: AvatarHealth.nearlydead,
      selection: Selection.selected,
      title: 'test',
      isActive: false,
    },
  ]);
</script>

<template>
  <Players :list="list" />

  <!-- <Avatar
    :health="AvatarHealth.damaged"
    :selection="Selection.current"
    :title="list[0].title"
    :isActive="true"
  /> -->
</template>

<style scoped lang="scss">
  //.menu {
  //  width: 200px;
  //  height: 100%;
  //  background-color: red;
  //  position: fixed;
  //  right: -200px;
  //
  //  top: 0;
  //  transition: right 0.7s ease;
  //
  //  &.is-open {
  //    right: 0;
  //
  //    transition: right 0.7s ease;
  //  }
  //}
</style>
