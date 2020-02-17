<template>
    <div id="app">
        <header-bar></header-bar>
        <InfoIcons></InfoIcons>
        <Milestones></Milestones>
        <Members></Members>
        <Footer></Footer>
    </div>
</template>

<script>
    import HeaderBar from "./components/HeaderBar";
    import InfoIcons from "./components/InfoIcons";
    import Members from "./components/Members";
    import Milestones from "./components/Milestones";
    import Footer from "./components/Footer";

    export default {
        name: 'app',

        components: {
            Footer,
            Milestones,
            Members,
            HeaderBar,
            InfoIcons,
        }

    }
</script>

<style>

</style>
