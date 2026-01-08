<template>
	<Button label="Toggle Dark Mode" @click="() => (isDark = !isDark)"></Button>
</template>

<script setup lang="ts">
import { useDark } from "@vueuse/core";
import { Button } from "primevue";

const isDark = useDark();
</script>
