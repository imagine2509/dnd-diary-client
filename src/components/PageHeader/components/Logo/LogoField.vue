<script setup lang="ts">
</script>

<template>
    <div class="logo_container">
        <img :src="'/assets/img/logoDice.png'" alt="Logo" />
        <div class="logo_name_container">
        <h1>{{ $t('header.Name') }}</h1>
        </div>
    </div>
</template>

<style scoped>
.logo_container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 30%;
}

.logo_name_container {
    display: flex;
    align-items: center;
    margin-left: 10px;
    text-wrap: nowrap;
}
h1 {
    font-size: 24px;
}
img {
    width: 50px;
    height: 50px;
}
</style>
