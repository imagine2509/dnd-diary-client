<script setup lang="ts">
import NavBar from '@/components/PageHeader/components/NavBar/NavBar.vue';
import LocaleSwitcher from '@/components/PageHeader/components/LocaleSwitcher/LocaleSwitcher.vue';
</script>

<template>
    <header>
        <NavBar />
        <LocaleSwitcher />
    </header>
</template>

<style scoped>
header {
    display: flex;
    justify-content: space-around;
    align-content: center;
    padding: 10px;
}
</style>
