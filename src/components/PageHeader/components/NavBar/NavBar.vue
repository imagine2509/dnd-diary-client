<script setup lang="ts"></script>

<template>
    <nav>
        <ul>
            <li>
                <router-link to="/">{{ $t('header.Home') }}</router-link>
            </li>
            <li>
                <router-link to="/about">{{ $t('header.About') }}</router-link>
            </li>
            <li>
                <router-link to="/contact">{{ $t('header.Contact') }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding-right: 25px;
}
ul {
    width: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;
    gap: 15px;
    justify-content: flex-end;
}
li {
    display: flex;
    align-items: center;
    a {
        text-decoration: none;
        font-size: 24px;
    }
}
</style>
