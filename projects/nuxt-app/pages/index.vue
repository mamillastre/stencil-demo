<script setup lang="ts">
import { MyComponent, MyLayout, MyButton, MyIcon } from "@stencil-demo/vue";
import { circleUser } from "@stencil-demo/elements/icons";

const circleUserIcon = circleUser;
</script>

<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <MyComponent first="First"></MyComponent>

    <hr />

    <MyLayout>
      <div slot="footer">Footer</div>
      test
      <div slot="header">Header</div>
    </MyLayout>

    <hr />

    <MyButton>
      <MyIcon :icon="circleUserIcon" slot="start" />
      Label
    </MyButton>
  </div>
</template>
