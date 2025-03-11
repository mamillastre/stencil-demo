<script setup lang="ts">
import { MyComponent, MyLayout } from "@stencil-demo/vue";
</script>

<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <MyComponent first="First"></MyComponent>
    <MyLayout>
      <div slot="footer">Footer</div>
      test
      <div slot="header">Header</div>
    </MyLayout>
  </div>
</template>
