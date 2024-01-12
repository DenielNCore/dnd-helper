<script setup lang="ts">
  import { computed } from 'vue';
  import { Class } from '@/types/character';
  import BardIcon from '@/assets/filterIcons/Bard.png';
  import ClericIcon from '@/assets/filterIcons/Cleric.png';
  import DruidIcon from '@/assets/filterIcons/Druid.png';
  import PaladincIcon from '@/assets/filterIcons/Paladin.png';
  import RangerIcon from '@/assets/filterIcons/Ranger.png';
  import SorcererIcon from '@/assets/filterIcons/Sorcerer.png';
  import WarlockIcon from '@/assets/filterIcons/Warlock.png';
  import WizardIcon from '@/assets/filterIcons/Wizard.png';

  const props = defineProps<{
    type: Class;
  }>();

  const classIcon = computed(() => {
    switch (props.type) {
      case Class.Bard:
        return BardIcon;
      case Class.Cleric:
        return ClericIcon;
      case Class.Druid:
        return DruidIcon;
      case Class.Paladin:
        return PaladincIcon;
      case Class.Ranger:
        return RangerIcon;
      case Class.Sorcerer:
        return SorcererIcon;
      case Class.Warlock:
        return WarlockIcon;
      case Class.Wizard:
        return WizardIcon;
      default:
        return '';
    }
  });
</script>

<template>
  <img :src="classIcon" />
</template>

<style scoped lang="scss"></style>
