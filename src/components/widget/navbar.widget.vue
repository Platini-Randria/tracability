<template>
    <div class="navbar">


        <VaSidebar class="nav" v-model="enabled">

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

            <VaSidebarItem @click="seeAdmin">
                <VaSidebarItemContent>
                    <PackagePlus />

                    <VaSidebarItemTitle>

                        Creation compte administrateur
                    </VaSidebarItemTitle>
                </VaSidebarItemContent>
            </VaSidebarItem>

            <VaSidebarItem @click="seeUser">
                <VaSidebarItemContent>
                    <PackagePlus />

                    <VaSidebarItemTitle>

                        Creation compte utilisateur
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
import { ref, watch } from "vue";
import { Menu, PackagePlus, X } from "lucide-vue-next";

const emit = defineEmits(["material", "agent", "acquisition", "reservation", "enabled", "disabled", "user", "admin"]);
const enabled = ref(false);
watch(() => enabled.value, () => {
    if (enabled.value) {
        emit("enabled");
    } else {
        emit("disabled");
    }
});
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

const seeUser = () => {
    emit("user")
    resetNav()
}

const seeAdmin = () => {
    emit("admin")
    resetNav()
}

</script>
<style scoped>
.navbar {
    position: fixed;
    top: 0;

}

.nav {
    height: 100vh;
    width: 100vw;
    z-index: 999;
}

/* .humberger {
    position: fixed;
    top: 5vw;
    left: 5vw;
} */
</style>