<script setup lang="ts">
  import Avatar from '@/components/Avatar.vue';
  import { Health, selection } from '@/types/avatarTypes';
  // withDefaults(
  //   defineProps<{
  //     isOpen: boolean;
  //   }>(),
  //   {
  //     isOpen: false,
  //   },
  // );
</script>

<template>
  <Avatar :health="Health.full" :selection="selection.none" title="5" />
  <!-- <Avatar :health="Health.damaged" selection="current" />
  <Avatar :health="Health.nearlydead" selection="current" />
  <Avatar :health="Health.dead" selection="current" />
  <Avatar :health="Health.full" selection="none" />
  <Avatar :health="Health.damaged" selection="none" />
  <Avatar :health="Health.nearlydead" selection="none" />
  <Avatar :health="Health.dead" selection="none" />
  <Avatar :health="Health.full" selection="selected" />
  <Avatar :health="Health.damaged" selection="selected" />
  <Avatar :health="Health.nearlydead" selection="selected" />
  <Avatar :health="Health.dead" selection="selected" /> -->
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
@/types/avatarTypes
