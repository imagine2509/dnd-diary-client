<script setup lang="ts"></script>

<template>
    <nav>
        <ul>
            <li><router-link to="/">{{ $t('header.Home') }}</router-link></li>
            <li><router-link to="/about">{{ $t('header.About') }}</router-link></li>
            <li><router-link to="/contact">{{ $t('header.Contact') }}</router-link></li>
        </ul>
    </nav>
</template>

<style scoped>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
}
</style>
