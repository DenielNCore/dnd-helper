<script setup lang="ts">
  import { Ref, ref, ComputedRef, computed, watch } from 'vue';
  import CloseSVG from '@/assets/close.svg';
  import { onClickOutside, useElementSize } from '@vueuse/core';

  type OptionT = string | number;
  interface IOptionMap {
    [key: string]: string;
  }

  const props = withDefaults(
    defineProps<{
      optionsMap: IOptionMap;
      selectedOptions: Array<OptionT>;
      title?: string;
    }>(),
    {
      title: 'Title',
    },
  );

  const emit = defineEmits(['updateSelected']);

  const inputRef: Ref<HTMLInputElement> = ref() as Ref<HTMLInputElement>;
  const containerRef: Ref<HTMLDivElement> = ref() as Ref<HTMLDivElement>;

  const { height } = useElementSize(containerRef);

  const dropDownTop = computed(() => `${height.value}px`);

  const showSelect: Ref<boolean> = ref(false);
  const selectedOptions: Ref<Array<OptionT>> = ref([...props.selectedOptions]);

  const options: ComputedRef<Array<OptionT>> = computed(() => {
    return Object.keys(props.optionsMap).filter(
      (opt: OptionT) => !selectedOptions.value.includes(opt),
    );
  });

  watch(
    () => selectedOptions.value,
    (opts: Array<OptionT>) =>
      emit(
        'updateSelected',
        opts.map((opt: OptionT) => opt),
      ),
    { deep: true },
  );

  const click = (e, dontSelect: boolean = false) => {
    inputRef.value.focus();

    if (!dontSelect) showSelect.value = !showSelect.value;
  };

  const select = (e, option: OptionT) => {
    selectedOptions.value.push(option);

    click(e, true);
  };

  const close = () => {
    showSelect.value = false;
  };

  const removeSelected = (option: OptionT) => {
    const index = selectedOptions.value.indexOf(option);
    selectedOptions.value.splice(index, 1);
  };

  onClickOutside(containerRef, close);
</script>

<template>
  <div ref="containerRef" class="collecting-container">
    <div class="collecting-title">{{ title }}</div>
    <div class="all-collected-container" @click="click">
      <div class="selected-list">
        <div
          v-for="option in selectedOptions"
          :key="option"
          class="selected-option"
          @click.stop="() => removeSelected(option)"
        >
          <CloseSVG />
          <div>{{ props.optionsMap[option] }}</div>
        </div>
      </div>

      <input ref="inputRef" class="input" />
    </div>
    <div class="select-container" :class="{ hide: !showSelect }">
      <div
        v-for="option in options"
        :key="option"
        class="select-option"
        @click="e => select(e, option)"
      >
        {{ props.optionsMap[option] }}
      </div>
      <div v-if="!options.length">Більше нема</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .collecting-container {
    margin: 10px;
    width: 200px;
    position: relative;
    display: flex;
    flex-direction: column;

    .collecting-title {
      font-size: 14px;
    }

    .all-collected-container {
      border: 1px solid black;
      background-color: white;
    }

    .select-container {
      position: absolute;
      top: v-bind(dropDownTop);
      z-index: 2;
      padding: 0 0 0 4px;
      margin: 4px 4px 4px 0;
      background-color: white;
      box-shadow: inset 0 0 4px 0 rgba(138, 177, 198, 0.48);
      border: solid 1px #d8dde3;

      &.hide {
        display: none;
      }

      .select-option {
        padding: 3px 7px 4px;

        &:hover {
          background-color: #bbb;
        }
      }
    }
  }

  .selected-list {
    display: flex;
    flex-wrap: wrap;

    .selected-option {
      box-shadow: inset 0 0 4px 0 #dcdcdc;
      border: 1px solid #cbcbcb;
      padding: 3px 5px;
      margin: 3px 0 3px 5px;
      font-size: 12px;
      font-weight: bold;

      display: flex;
      align-items: center;

      svg {
        stroke: #888;
        margin-right: 2px;

        &:hover {
          stroke: black;
        }
      }
    }
  }

  .input {
    all: unset;
    margin-left: 10px;
  }
</style>
