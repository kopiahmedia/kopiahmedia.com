<template>
    <div id="app">
        <header-bar></header-bar>
        <InfoIcons></InfoIcons>
        <Milestones></Milestones>
        <Members></Members>
    </div>
</template>

<script>
    import HeaderBar from "./components/HeaderBar";
    import InfoIcons from "./components/InfoIcons";
    import Members from "./components/Members";
    import Milestones from "./components/Milestones";

    export default {
        name: 'app',

        components: {
            Milestones,
            Members,
            HeaderBar,
            InfoIcons,
        }

    }
</script>

<style>

</style>
