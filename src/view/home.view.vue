<template>

    <section>
        <NavbarWidget @material="stepper = 1" @agent="stepper = 2" @acquisition="stepper = 3"
            @reservation="stepper = 4" @admin="stepper = 5" @user="stepper = 6" @enabled="watchNavbar(true)" @disabled="watchNavbar(false)" />



        <!-- --------------- NAVIGATION --------------- -->
        <MaterialFormLayout v-if="stepper == 1" />
        <AgentLayout v-else-if="stepper == 2" />
        <AcquisitionFormLayout v-else-if="stepper == 3" />
        <ReservationFormLayout v-else-if="stepper == 4" />
        <AdminLayout v-else-if="stepper == 5"/>
        <UserLayout v-else-if="stepper == 6" />
        

    </section>
</template>

<script setup lang="ts">
import MaterialFormLayout from '@/components/layout/materialForm.layout.vue';
import NavbarWidget from '@/components/widget/navbar.widget.vue';
import { ref } from 'vue';
import AcquisitionFormLayout from '@/components/layout/acquisitionForm.layout.vue';
import ReservationFormLayout from '@/components/layout/reservationForm.layout.vue';
import AgentLayout from '@/components/layout/agent.layout.vue';
import UserLayout from '@/components/layout/userForm.layout.vue';
import AdminLayout from '@/components/layout/admin.layout.vue';


const stepper = ref(1)
const tempStepper = ref(0)

const watchNavbar = (enabled: boolean) => {
    tempStepper.value = stepper.value;

    if (enabled)
    stepper.value = 0;
    else
    stepper.value = tempStepper.value;
}
</script>

<style scoped></style>