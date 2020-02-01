<template>
    <div id="app">
        <header-bar></header-bar>
        <InfoIcons></InfoIcons>
    </div>
</template>

<script>
    import HeaderBar from "./components/HeaderBar";
    import InfoIcons from "./components/InfoIcons"

    export default {
        name: 'app',

        components: {
            HeaderBar,
            InfoIcons
        }

    }
</script>

<style>

</style>
