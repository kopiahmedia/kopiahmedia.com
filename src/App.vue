<template>
    <div id="app">
        <header-bar></header-bar>
        <InfoIcons></InfoIcons>
        <Members></Members>
    </div>
</template>

<script>
    import HeaderBar from "./components/HeaderBar";
    import InfoIcons from "./components/InfoIcons";
    import Members from "./components/Members";

    export default {
        name: 'app',

        components: {
            Members,
            HeaderBar,
            InfoIcons,
        }

    }
</script>

<style>

</style>
