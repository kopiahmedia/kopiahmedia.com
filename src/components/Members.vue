<template>
    <div class="bg-red-100 border-t-2 border-b-2 border-red-300 pt-16 pb-16">
        <modal name="haikal" v-bind:adaptive="true" height="auto" width="50%">
            <div class="flex">
                <div class="w-1/2 p-10 font-poppins text-4xl">
                    Hi I'm Haikal
                </div>
                <div class="w-1/2">
                    <img class="w-full rounded-lg" src="../assets/members/Haikal.jpg"/>
                </div>
            </div>
        </modal>
        <modal name="izzudin" v-bind:adaptive="true" height="auto" width="50%">
            <div class="flex">
                <div class="w-1/2 p-10 font-poppins text-4xl">
                    Hi I'm Izzudin
                </div>
                <div class="w-1/2">
                    <img class="w-full rounded-lg" src="../assets/members/Izzudin.jpg"/>
                </div>
            </div>
        </modal>
        <modal name="adam" v-bind:adaptive="true" height="auto" width="50%">
            <div class="flex">
                <div class="w-1/2 p-10 font-poppins text-4xl">
                    Hi I'm Adam
                </div>
                <div class="w-1/2">
                    <img class="w-full rounded-lg" src="../assets/members/Adam.jpg"/>
                </div>
            </div>
        </modal>
        <modal name="naqib" v-bind:adaptive="true" height="auto" width="50%">
            <div class="flex">
                <div class="w-1/2 p-10 font-poppins text-l">
                    <p>Good day!</p>
                    <br>
                    <p>My name is Naqib Nur Iman Bin Zakaria, a petroleum engineering graduate from University of New South Wales, one of the Group of Eight (GoE) universities in Australia. My passion is to travel to new places, explore new things, and observe the culture and human behaviour. In Kopiah Media, I am the so called ‘Ahli Aktif’ and that was still relevant 4 years ago I guess since I have not been contributing for the team during my study years.</p>
                    <br>
                    <p>8 years ago, was the moment that lead to the existence of Kopiah Media. There was opening announced for Form 4 students who wanted to join RESTU, a legendary club with the core purpose to design the annual school magazine. I decided to join and lucky me was selected. A media team was then established and being on the same interest, we combined and became a family. It was a meaningful moment for me joining the club and something I wouldn’t forget forever.</p>
                    <br>
                    <p>My hope and words to the team, since most of us have completed our studies, it’s now the time we grow back Kopiah Media. It has full potential and interest. I’m all in for new projects and would try my best to give full commitment and contribution to the team, so does all of you. Hope Kopiah Media stay strong for years to come.</p>
                    <br>
                    <p>Cheers!</p>
                </div>
                <div class="w-1/2">
                    <img class="w-full rounded-lg" src="../assets/members/Naqib.jpg"/>
                </div>
            </div>
        </modal>
        <modal name="omar" v-bind:adaptive="true" height="auto" width="50%">
            <div class="flex">
                <div class="w-1/2 p-10 font-poppins text-xl">
                    Kopiah media taught me a lot of thing. One thing for sure this team taught me a lot of editing skills such as photoshop, sony vegas, adobe after effect and many more editing software. I really appreciate my team when we were as a team. I hope we can get back together as a team.
                </div>
                <div class="w-1/2">
                    <img class="w-full rounded-lg" src="../assets/members/Omar.jpg"/>
                </div>
            </div>
        </modal>
        <modal name="sayuti" v-bind:adaptive="true" height="auto" width="50%">
            <div class="flex">
                <div class="w-1/2 p-10 font-poppins text-4xl">
                    Hi I'm Sayuti
                </div>
                <div class="w-1/2">
                    <img class="w-full rounded-lg" src="../assets/members/Sayuti.jpg"/>
                </div>
            </div>
        </modal>
        <modal name="umair" v-bind:adaptive="true" height="auto" width="50%">
            <div class="flex">
                <div class="w-1/2 p-10 font-poppins text-4xl">
                    Hi I'm Umair
                </div>
                <div class="w-1/2">
                    <img class="w-full rounded-lg" src="../assets/members/Umair.jpg"/>
                </div>
            </div>
        </modal>
        <modal name="ismail" v-bind:adaptive="true" height="auto" width="50%">
            <div class="flex">
                <div class="w-1/2 p-10 font-poppins text-4xl">
                    Hi I'm Ismail
                </div>
                <div class="w-1/2">
                    <img class="w-full rounded-lg" src="../assets/members/Ismail.jpg"/>
                </div>
            </div>
        </modal>
        <modal name="luqman" v-bind:adaptive="true" height="auto" width="50%">
            <div class="flex">
                <div class="w-1/2 p-10 font-poppins text-4xl">
                    Hi I'm Luqman
                </div>
                <div class="w-1/2">
                    <img class="w-full rounded-lg" src="../assets/members/Luqman.jpg"/>
                </div>
            </div>
        </modal>
        <modal name="fakhri" v-bind:adaptive="true" height="auto" width="50%">
            <div class="flex">
                <div class="w-1/2 p-10 font-poppins text-4xl">
                    Hi I'm Fakhri
                </div>
                <div class="w-1/2">
                    <img class="w-full rounded-lg" src="../assets/members/Fakhri.jpg"/>
                </div>
            </div>
        </modal>
        <modal name="syafiq" v-bind:adaptive="true" height="auto" width="50%">
            <div class="flex">
                <div class="w-1/2 p-10 font-poppins text-4xl">
                    Hi I'm Syafiq
                </div>
                <div class="w-1/2">
                    <img class="w-full rounded-lg" src="../assets/members/Syafiq.jpg"/>
                </div>
            </div>
        </modal>

        <div class="mx-auto w-3/4">
            <h2 class="flex justify-center align-middle text-center font-poppins text-5xl semibold mb-5">
                <img class="w-1/4 mb-5" src="../assets/kopiah-media.png"/>
            </h2>

            <div class="flex mb-5">
                <div class="w-1/5 m-1" @click="$modal.show('haikal')">
                    <div class="flex-col">
                        <div>
                            <img class="w-full rounded-lg" src="../assets/members/Haikal.jpg"/>
                        </div>
                        <div class="text-center bg-white rounded-b-lg  pt-6 pb-8 border -mt-2 shadow hover:shadow-xl">
                            <h3 class="font-semibold font-poppins">Haikal Adnin Mohd Naim</h3>
                        </div>
                    </div>
                </div>
                <div class="w-1/5 m-1" @click="$modal.show('izzudin')">
                    <div class="flex-col">
                        <div>
                            <img class="w-full rounded-lg" src="../assets/members/Izzudin.jpg"/>
                        </div>
                        <div class="text-center bg-white rounded-b-lg pt-6 pb-8 border -mt-2 shadow hover:shadow-xl">
                            <h3 class="font-semibold font-poppins">Izzudin Anuar</h3>
                        </div>
                    </div>
                </div>
                <div class="w-1/5 m-1" @click="$modal.show('adam')">
                    <div class="flex-col">
                        <div>
                            <img class="w-full rounded-lg" src="../assets/members/Adam.jpg"/>
                        </div>
                        <div class="text-center bg-white rounded-b-lg pt-6 pb-8 border -mt-2 shadow hover:shadow-xl">
                            <h3 class="font-semibold font-poppins">Adam Rosli</h3>
                        </div>
                    </div>
                </div>
                <div class="w-1/5 m-1" @click="$modal.show('naqib')">
                    <div class="flex-col">
                        <div>
                            <img class="w-full rounded-lg" src="../assets/members/Naqib.jpg" height="3024" width="2420"/>
                        </div>
                        <div class="text-center bg-white rounded-b-lg pt-6 pb-8 border -mt-2 shadow hover:shadow-xl">
                            <h3 class="font-semibold font-poppins">Naqib Nur Iman Zakaria</h3>
                        </div>
                    </div>
                </div>
                <div class="w-1/5 m-1" @click="$modal.show('omar')">
                    <div class="flex-col">
                        <div>
                            <img class="w-full rounded-lg" src="../assets/members/Omar.jpg" height="960" width="768"/>
                        </div>
                        <div class="text-center bg-white rounded-b-lg pt-6 pb-8 border -mt-2 shadow hover:shadow-xl">
                            <h3 class="font-semibold font-poppins">Omar Idiris</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex mx-auto w-5/6">
            <div class="w-1/6 m-1" @click="$modal.show('sayuti')">
                <div class="flex-col">
                    <div>
                        <img class="w-full rounded-lg" src="../assets/members/Sayuti.jpg" height="596" width="477"/>
                    </div>
                    <div class="text-center bg-white rounded-b-lg pt-6 pb-8 border -mt-2 shadow hover:shadow-xl">
                        <h3 class="font-semibold font-poppins">Sayuti Fakhri</h3>
                    </div>
                </div>
            </div>
            <div class="w-1/6 m-1" @click="$modal.show('umair')">
                <div class="flex-col">
                    <div>
                        <img class="w-full rounded-lg" src="../assets/members/Umair.jpg" height="2000" width="1500"/>
                    </div>
                    <div class="text-center bg-white rounded-b-lg pt-6 pb-8 border -mt-2 shadow hover:shadow-xl">
                        <h3 class="font-semibold font-poppins">Umair Hishamuddin</h3>
                    </div>
                </div>
            </div>
            <div class="w-1/6 m-1" @click="$modal.show('ismail')">
                <div class="flex-col">
                    <div>
                        <img class="w-full rounded-lg" src="../assets/members/Ismail.jpg" height="378" width="303"/>
                    </div>
                    <div class="text-center bg-white rounded-b-lg pt-6 pb-8 border -mt-2 shadow hover:shadow-xl">
                        <h3 class="font-semibold font-poppins">Ismail Isman</h3>
                    </div>
                </div>
            </div>
            <div class="w-1/6 m-1" @click="$modal.show('luqman')">
                <div class="flex-col">
                    <div>
                        <img class="w-full rounded-lg" src="../assets/members/Luqman.jpg" height="3024" width="2420"/>
                    </div>
                    <div class="text-center bg-white rounded-b-lg pt-6 pb-8 border -mt-2 shadow hover:shadow-xl">
                        <h3 class="font-semibold font-poppins">Luqman Shukri</h3>
                    </div>
                </div>
            </div>
            <div class="w-1/6 m-1" @click="$modal.show('fakhri')">
                <div class="flex-col">
                    <div>
                        <img class="w-full rounded-lg" src="../assets/members/Fakhri.jpg" height="960" width="768"/>
                    </div>
                    <div class="text-center bg-white rounded-b-lg pt-6 pb-8 border -mt-2 shadow hover:shadow-xl">
                        <h3 class="font-semibold font-poppins">Fakhri Fadzli</h3>
                    </div>
                </div>
            </div>
            <div class="w-1/6 m-1" @click="$modal.show('syafiq')">
                <div class="flex-col">
                    <div>
                        <img class="w-full rounded-lg" src="../assets/members/Syafiq.jpg" height="640" width="640"/>
                    </div>
                    <div class="text-center bg-white rounded-b-lg pt-6 pb-8 border -mt-2 shadow hover:shadow-xl">
                        <h3 class="font-semibold font-poppins">Syafiq Kamal Azam</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Members"
    }
</script>

<style scoped>

</style>