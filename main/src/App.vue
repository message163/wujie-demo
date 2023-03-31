<template>
<div>
    <h1>这是主应用</h1>
    <WujieVue url="http://127.0.0.1:5174/" name="vue3"></WujieVue> <!--子应用vue3-->
    <WujieVue url="http://127.0.0.1:5175/" name="react"></WujieVue> <!--子应用react-->
</div>
</template>

<script setup lang='ts'>
import {ref,reactive} from 'vue'
</script>

<style scoped lang='less'>
</style>