<script setup lang="ts">
import NavBar from '@/components/PageHeader/components/NavBar/NavBar.vue';
import LocaleSwitcher from '@/components/PageHeader/components/LocaleSwitcher/LocaleSwitcher.vue';
import LogoField from '@/components/PageHeader/components/Logo/LogoField.vue';
</script>

<template>
    <header>
        <LogoField/>
        <NavBar />
        <LocaleSwitcher />
    </header>
</template>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 20px;
}
</style>
