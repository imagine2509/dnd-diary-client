<script setup lang="ts">
import NavBar from '@/components/PageHeader/components/NavBar/NavBar.vue';
import LocaleSwitcher from '@/components/PageHeader/components/LocaleSwitcher/LocaleSwitcher.vue';
import LogoField from '@/components/PageHeader/components/Logo/LogoField.vue';
import DefaultButton from '@/components/Button/DefaultButton.vue';

const handleClick = (): void => {
    console.log('Button clicked');
};
</script>

<template>
    <header>
        <LogoField/>
        <NavBar />
        <div class="buttons_container">
        <DefaultButton :content="$t('header.Login')" @click="handleClick" />
            <DefaultButton :content="$t('header.Register')" @click="handleClick" />
        <LocaleSwitcher />
        </div>
    </header>
</template>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 20px;
}

.buttons_container {
    display: flex;
    align-items: center;
    gap: 15px;
}
</style>
