<script setup lang="ts">
  import { computed } from 'vue';
  import Spell from '@/spells/list';
  import FireBall from '@/assets/fire-ball.png';

  const props = defineProps<{
    type: Spell;
  }>();

  const spellIcon = computed(() => {
    switch (props.type) {
      case Spell.Fireball:
        return FireBall;

      default:
        return '';
    }
  });
</script>

<template>
  <img :src="spellIcon" />
</template>

<style scoped lang="scss">
  //
</style>
