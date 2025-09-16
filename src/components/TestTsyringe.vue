<script setup lang="ts">
import { useService } from "../composables/useService";
import { MyService } from "../services/myService";

let value: any;
let errorMessage = "";

try {
  const myService = useService(MyService);
  value = myService.get();
} catch (error: any) {
  console.error(error);
  errorMessage = error.message;
}
</script>

<template>
  <div v-if="errorMessage">Error: {{ errorMessage }}</div>
  <div v-else>
    Result :
    {{ value }}
  </div>
</template>
