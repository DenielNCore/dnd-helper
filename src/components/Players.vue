<script setup lang="ts">
  import Avatar from '@/components/Avatar.vue';
  import { AvatarHealth, Selection } from '@/types/avatarTypes';
  import { computed, ref } from 'vue';

  // const list = ref([
  //   { health: AvatarHealth.full, selection: Selection.selected, title: 'elf' },
  //   { health: AvatarHealth.damaged, selection: Selection.selected, title: 'mag' },
  //   { health: AvatarHealth.nearlydead, selection: Selection.none, title: 'fff' },
  //   { health: AvatarHealth.dead, selection: Selection.none, title: 'test' },
  //   { health: AvatarHealth.dead, selection: Selection.none, title: 'test' },
  // ]);

  const props = defineProps<{
    list: Array<{ health: AvatarHealth; selection: Selection; title: string; isActive: boolean }>;
  }>();

  // const AVATARWIDTH = 98; //98 , 196, 294,  392
  // const avatarShiftAmount = ref(0); // {value: -2}

  // const left = computed(() => {
  //   return `${avatarShiftAmount.value * AVATARWIDTH}px`; //-196px
  // });

  // function scrollRight() {
  //   avatarShiftAmount.value += 1; // ==> avatar
  // }

  // function scrollLeft() {
  //   avatarShiftAmount.value -= 1; // ==> avatar
  // }

  // const nextPlayer = list => {
  //   const firstElement = list.shift();
  //   list.push(firstElement);

  //   return list;
  // };
</script>

<template>
  <div>
    <div class="container">
      <div class="avatar-list-container">
        <Avatar
          v-for="(avatar, index) in list"
          :key="index"
          :health="avatar.health"
          :selection="avatar.selection"
          :title="avatar.title"
          :isActive="avatar.isActive"
        />
      </div>
    </div>

    <!-- <div class="arrow-container">
      <div
        class="arrow left"
        @click="scrollLeft"
        :class="{ disabled: -avatarShiftAmount > list.length - 1 }"
      ></div>
      <div
        class="arrow right"
        @click="scrollRight"
        :class="{ disabled: avatarShiftAmount === 0 }"
      ></div>
    </div> -->
    <!-- <button @click="nextPlayer(list)">Next</button> -->
  </div>
</template>

<style>
  .container {
    /* display: flex; */
    width: 100%;
    height: 250px;
    background-color: gray;
    /* align-items: center; */
    /* overflow-x: hidden;
    position: relative; */
  }

  /* .container::-webkit-scrollbar {
    display: none;
  } */

  .avatar-list-container {
    position: absolute;
    display: flex;
    /* width: 300px;
    height: 250px; */
    /* background-color: yellow; */
    align-items: center;
    /* left: v-bind(left); */
    margin-left: 10px;
    gap: 5px;
    /* transition: 3s linear; */
  }

  /* .avatar-list-container:hover {
    left: -106px;
  } */
  /* 
  .arrow {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
  } */

  /* .right {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    margin-left: 200px;
  }

  .disabled {
    pointer-events: none;
    display: none;
  }

  .left {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    margin-left: 20px;
  } */

  /* .arrow-container {
    position: absolute;
    margin-top: -20px;
    justify-content: space-around;
    width: 300px;
  } */

  /* .left,
  .right {
    cursor: pointer;
  } */

  /* button {
    background-color: aquamarine;
  } */
</style>
