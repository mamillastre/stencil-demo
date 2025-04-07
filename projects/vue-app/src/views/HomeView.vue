<script setup lang="ts">
import { MyComponent, MyButton, MyIcon } from "@stencil-demo/vue";
import { circleUser } from "@stencil-demo/elements/icons";

const circleUserIcon = circleUser;
</script>

<template>
  <main>
    <MyComponent first="first" last="last" />

    <hr />

    <MyButton>
      <MyIcon :icon="circleUserIcon" slot="start" />
      Label
    </MyButton>
  </main>
</template>
