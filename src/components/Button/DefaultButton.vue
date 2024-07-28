<script setup lang="ts">
const props = defineProps({
    content: {
        type: String,
        required: true
    }
});
</script>

<template>
    <button type="button">
        <span>{{ props.content }}</span>
    </button>
</template>

<style scoped>
button {
    min-width: 100px;
    height: 30px;
    color: var(--color--primary);
    border: 1px solid var(--color--primary);
    background: none;
    border-radius: 8px;
    cursor: pointer;
}
</style>
