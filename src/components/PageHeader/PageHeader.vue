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
        <LogoField />
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
    background-color: rgba(0, 0, 0, 1);
    color: var(--color--primary);
    -webkit-box-shadow: -1px 25px 26px -3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -1px 25px 26px -3px rgba(0, 0, 0, 0.75);
    box-shadow: -1px 25px 26px -3px rgba(0, 0, 0, 0.75);
}

.buttons_container {
    display: flex;
    align-items: center;
    gap: 15px;
}
</style>
