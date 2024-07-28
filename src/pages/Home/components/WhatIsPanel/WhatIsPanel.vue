<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true,
        default: ''
    },
    description: {
        type: String,
        required: true,
        default: ''
    }
});
</script>

<template>
    <div class="article article--what_is article--card">
        <h2 class="article--card card--title">{{ props.title }}</h2>
        <p class="article--card card--text">{{ props.description }}</p>
    </div>
</template>

<style scoped>
.article--card {
    display: flex;
    flex-direction: column;
    height: 30%;
    width: 100%;

    background-color: oklch(0% 0 201.18);
    color: var(--color--primary);

    @media (min-width: 768px) {
        height: 80%;
        width: 30%;
    }
}
</style>
