<template>

    <section>
        <NavbarWidget @material="stepper = 1" @agent="stepper = 2" @acquisition="stepper = 3"
            @reservation="stepper = 4" />



        <!-- --------------- NAVIGATION --------------- -->
        <MaterialFormLayout v-if="stepper == 1" />
        <AgentFormLayout v-else-if="stepper == 2" />
        <AcquisitionFormLayout v-else-if="stepper == 3" />
        <ReservationFormLayout v-else-if="stepper == 4" />

    </section>
</template>

<script setup lang="ts">
import AgentFormLayout from '@/components/layout/agentForm.layout.vue';
import MaterialFormLayout from '@/components/layout/materialForm.layout.vue';
import NavbarWidget from '@/components/widget/navbar.widget.vue';
import { ref } from 'vue';
import AcquisitionFormLayout from '@/components/layout/acquisitionForm.layout.vue';
import ReservationFormLayout from '@/components/layout/reservationForm.layout.vue';



const stepper = ref(1)
</script>

<style scoped></style>