<template>
    <div class="h-52 navbar">


        <VaSidebar v-model="enabled">

            <VaSidebarItem>
                <VaSidebarItemContent>
                    <X @click="() => enabled = false" />
                    <VaSidebarItemTitle>
                        Fermer

                    </VaSidebarItemTitle>
                </VaSidebarItemContent>
            </VaSidebarItem>
            <VaSidebarItem @click="seeMaterial">
                <VaSidebarItemContent>
                    <PackagePlus />
                    <VaSidebarItemTitle>

                        Ajout Materiel
                    </VaSidebarItemTitle>
                </VaSidebarItemContent>
            </VaSidebarItem>
            <VaSidebarItem>
                <VaSidebarItemContent>
                    <PackagePlus />

                    <VaSidebarItemTitle>

                        Creation compte admin
                    </VaSidebarItemTitle>
                </VaSidebarItemContent>
            </VaSidebarItem>
            <VaSidebarItem @click="seeAgent">
                <VaSidebarItemContent>
                    <PackagePlus />

                    <VaSidebarItemTitle>

                        Ajout agent
                    </VaSidebarItemTitle>
                </VaSidebarItemContent>
            </VaSidebarItem>
            <VaSidebarItem @click="seeAcquisition">
                <VaSidebarItemContent>
                    <PackagePlus />

                    <VaSidebarItemTitle>

                        Effectuer une acquisition
                    </VaSidebarItemTitle>
                </VaSidebarItemContent>
            </VaSidebarItem>
            <VaSidebarItem @click="seeReservation">
                <VaSidebarItemContent>
                    <PackagePlus />

                    <VaSidebarItemTitle>

                        Demande de reservation
                    </VaSidebarItemTitle>
                </VaSidebarItemContent>
            </VaSidebarItem>
        </VaSidebar>

        <VaButton class="humberger" preset="secondary" @click="enabled = true" v-show="!enabled">
            <Menu />
            <span>Menu</span>
        </VaButton>
    </div>


</template>

<script setup lang="ts">
import { ref } from "vue";
import { Menu, PackagePlus, X } from "lucide-vue-next";

const emit = defineEmits(["material", "agent", "acquisition", "reservation"])
const enabled = ref(false);

const options = ref([
    { label: "Open", value: true },
    { label: "Close", value: false },
]);
const resetNav = () => enabled.value = false;
const seeMaterial = () => {
    emit("material")
    resetNav()
}
const seeAgent = () => {
    emit("agent")
    resetNav()
}
const seeAcquisition = () => {
    emit("acquisition")
    resetNav()
}

const seeReservation = () => {
    emit("reservation")
    resetNav()
}

</script>
<style scoped>
.navbar {
    position: fixed;
    top: 0;
}

/* .humberger {
    position: fixed;
    top: 5vw;
    left: 5vw;
} */
</style>