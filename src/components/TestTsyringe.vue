<script setup lang="ts">
import { useService } from "../composables/useService";
import { MyService } from "../services/myService";

const myService = useService(MyService);
const value = myService.get();
</script>

<template>
  <div>
    Result :
    {{ value }}
  </div>
</template>
