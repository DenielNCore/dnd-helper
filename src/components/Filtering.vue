<script setup lang="ts">
  import { computed, ComputedRef, toRefs } from 'vue';
  import useSpellFilteringStore from '@/stores/spellFilteringStore';
  import { Class, LvlType } from '@/types/spell';
  import { classList } from '@/SpellList';
  import { ClassesMap, LvlMap, ActionMap, SourceMap } from '@/SpellMapping';
  import CollectingDropdown from '@/components/CollectingDropdown.vue';
  import FilteringIcons from './FilteringIcons.vue';

  const spellFilteringStore = useSpellFilteringStore();

  const { toggleClass, clearClass, updateLvlFilter, updatedActionFilter, updatedSourceFilter } =
    spellFilteringStore;
  const { selectedClasses, selectedLvls, selectedActions, selectedSources } =
    toRefs(spellFilteringStore);

  const classListFilters: ComputedRef<
    Array<{ name: string; selected: boolean; iconType: Class; toggle: () => void }>
  > = computed(() => {
    return classList.map((cl: Class) => {
      return {
        name: ClassesMap[cl],
        selected: selectedClasses.value.has(cl),
        iconType: cl,
        toggle: () => {
          toggleClass(cl);
        },
      };
    });
  });
</script>

<template>
  <div class="all-spells-filtering">
    <div class="class-filtering">
      <div
        class="class-filtering-btn all-classes"
        :class="{ selected: !selectedClasses.size }"
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
          <FilteringIcons :type="cl.iconType" />
          {{ cl.name }}
        </div>
      </div>
    </div>

    <div class="main-filtering">
      <CollectingDropdown
        :options-map="LvlMap"
        :selected-options="selectedLvls"
        title="Рівень закляття"
        @update-selected="updateLvlFilter"
      />
      <CollectingDropdown
        :options-map="ActionMap"
        :selected-options="selectedActions"
        title="Час виконання"
        @update-selected="updatedActionFilter"
      />
      <CollectingDropdown
        :options-map="SourceMap"
        :selected-options="selectedSources"
        title="Джерело"
        @update-selected="updatedSourceFilter"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .all-spells-filtering {
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.04);

    .class-filtering {
      width: calc(100% - 76px);
      display: flex;
      //border: 1px dashed black;
      //border-bottom: 1px dashed black;

      //margin-top: 50px;

      .single-class-filter-list {
        width: 100%;
        display: flex;
        overflow: scroll;
        justify-content: space-evenly;
      }

      .class-filtering-btn {
        min-width: 70px;
        height: 50px;
        display: flex;
        padding: 5px;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &.selected {
          .class-filtering-btn-icon {
            background-color: aqua;
          }
        }

        .class-filtering-btn-icon {
          //width: 60%;
          height: 100%;
          //background-color: green;
          border-radius: 50%;
        }

        &.all-classes {
          min-width: 0;
          //border-right: 1px dashed black;
          padding-left: 0;

          .class-filtering-btn-icon {
            border-radius: 0 50% 50% 0;
          }
        }
      }
    }

    .main-filtering {
      display: flex;
      flex-wrap: wrap;
    }
  }
</style>
