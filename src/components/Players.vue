<script setup lang="ts">
  import Avatar from '@/components/Avatar.vue';
  import { AvatarHealth, Selection } from '@/types/avatarTypes';
  import { ref } from 'vue';

  const props = defineProps<{
    list: Array<{ health: AvatarHealth; selection: Selection; title: string; isActive: boolean }>;
  }>();

  const emit = defineEmits(['deleteAvatar']);

  const deleteAvatar = (health: AvatarHealth) => {
    emit('deleteAvatar', health);
  };

  const listNumber = ref(Array.from({ length: props.list.length }, () => false));

  const shrinkAvatar = (index: number) => {
    listNumber.value[index] = true;
    console.log(index, listNumber);
  };
</script>

<template>
  <div>
    <div class="container">
      <div class="avatar-list-container">
        <div
          class="avatar-animation-container"
          v-for="(avatar, index) in list"
          :key="index"
          @transitionend="() => deleteAvatar(avatar.health)"
          :class="{ shrink: listNumber[index] }"
        >
          <Avatar
            @animationend="() => shrinkAvatar(index)"
            :health="avatar.health"
            :selection="avatar.selection"
            :title="avatar.title"
            :isActive="avatar.isActive"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .container {
    display: flex;
    width: 100%;
    height: 250px;
    background-color: gray;
    align-items: center;
    justify-content: center;
  }

  .avatar-list-container {
    width: 100%;
    height: 200px;
    display: flex;
    align-items: flex-start;
    gap: 5px;
  }

  @keyframes falling {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(200px);
    }
  }

  @keyframes shrink {
    from {
      transform: scaleX(1);
    }
    to {
      transform: scaleX(0);
    }
  }

  .shrink {
    // animation-name: shrink;
    // animation-duration: 5s;
    // animation-fill-mode: forwards;
    transition: width 3s;
    width: 0;
  }

  .avatar-animation-container {
    transition: width 3s;
    overflow: hidden;
    width: 100px;
  }
</style>
