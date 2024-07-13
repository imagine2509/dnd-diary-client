<script setup lang="ts"></script>

<template>
    <div class="locale-changer">
        <select v-model="$i18n.locale">
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
    appearance: none;
    background: none;
    padding: 15px;
    border-radius: 50%;
}
</style>
