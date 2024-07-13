<script setup lang="ts">
</script>

<template>
    <div class="locale-changer">
        <select v-model="$i18n.locale" :style="{ background: `url(/assets/img/${$i18n.locale}.png)` }">
            <option
                v-for="locale in $i18n.availableLocales"
                :key="`locale-${locale}`"
                :value="locale">
                {{ locale }}
            </option>
        </select>
    </div>
</template>

<style scoped>
select {
    color: transparent;
    width: 32px;
    height: 32px;
    appearance: none;
    padding: 0;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
