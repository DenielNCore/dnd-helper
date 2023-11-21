<script setup lang="ts">
  import { computed, ComputedRef, toRefs } from 'vue';
  import useSpellFilteringStore from '@/stores/spellFilteringStore';
  import { Class, classList } from '@/SpellList';
  import { ClassesMap } from '@/SpellMapping';

  const spellFilteringStore = useSpellFilteringStore();

  const { toggleClass, clearClass } = spellFilteringStore;
  const { selectedClasses } = toRefs(spellFilteringStore);

  const classListFilters: ComputedRef<
    Array<{ name: string; selected: boolean; toggle: () => void }>
  > = computed(() => {
    return classList.map((cl: Class) => {
      return {
        name: ClassesMap[cl],
        selected: selectedClasses.value.includes(cl),
        toggle: () => {
          toggleClass(cl);
        },
      };
    });
  });

  const allClassesIsSelected = computed(() => !selectedClasses.value.length);
</script>

<template>
  <div class="all-spells-filtering">
    <div class="class-filtering">
      <div
        class="class-filtering-btn all-classes"
        :class="{ selected: allClassesIsSelected }"
        @click="clearClass"
      >
        <div class="class-filtering-btn-icon"></div>
        Всі
      </div>
      <div class="single-class-filter-list">
        <div
          v-for="cl in classListFilters"
          :key="cl.name"
          class="class-filtering-btn"
          :class="{ selected: cl.selected }"
          @click="cl.toggle"
        >
          <div class="class-filtering-btn-icon"></div>
          {{ cl.name }}
        </div>
      </div>
    </div>

    <div class="main-filtering">
      <div class="lvl-filtering"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .all-spells-filtering {
    margin: 0 auto;
    height: 200px;
    display: flex;

    align-items: center;
    justify-content: center;
    background-color: #ccc;

    .class-filtering {
      width: 100%;
      display: flex;
      border: 1px dashed black;

      .single-class-filter-list {
        width: 100%;
        display: flex;
        overflow: scroll;
      }

      .class-filtering-btn {
        min-width: 70px;
        height: 50px;
        display: flex;
        padding: 10px;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &.selected {
          .class-filtering-btn-icon {
            background-color: aqua;
          }
        }

        .class-filtering-btn-icon {
          width: 30px;
          height: 30px;
          background-color: green;
          border-radius: 50%;
        }

        &.all-classes {
          min-width: 0;
          border-right: 1px dashed black;
          padding-left: 0;

          .class-filtering-btn-icon {
            border-radius: 0 50% 50% 0;
          }
        }
      }
    }
  }
</style>
