<script setup lang="ts">
  import Players from '@/components/Players.vue';
  import { AvatarHealth, Selection } from '@/types/avatarTypes';
  import { ref } from 'vue';

  // withDefaults(
  //   defineProps<{
  //     isOpen: boolean;
  //   }>(),
  //   {
  //     isOpen: false,
  //   },
  // );

  const list = ref([
    {
      health: AvatarHealth.dead,
      selection: Selection.current,
      title: 'elf',
      isActive: false,
    },
    { health: AvatarHealth.full, selection: Selection.current, title: 'mag', isActive: false },
    {
      health: AvatarHealth.dead,
      selection: Selection.selected,
      title: 'fff',
      isActive: false,
    },
    { health: AvatarHealth.full, selection: Selection.current, title: 'test', isActive: true },
    {
      health: AvatarHealth.full,
      selection: Selection.selected,
      title: 'test',
      isActive: false,
    },
    {
      health: AvatarHealth.nearlydead,
      selection: Selection.selected,
      title: 'elf',
      isActive: true,
    },
    {
      health: AvatarHealth.dead,
      selection: Selection.selected,
      title: 'elf',
      isActive: false,
    },
  ]);

  function deleteAvatar(health: AvatarHealth) {
    const index = list.value.findIndex(avatar => avatar.health === AvatarHealth.dead);

    // if (index !== -1) {
    //   list.value.splice(index, 1);
    // }
  }
</script>

<template>
  <Players :list="list" v-on:deleteAvatar="deleteAvatar" />
</template>

<style scoped lang="scss"></style>
