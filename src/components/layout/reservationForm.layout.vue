<template>
    <section>


        <!-- __________Formulaire pour une demande reservation______________-->
         
        <VaForm ref="myForm" class="flex flex-col gap-2">
            <VaProgressBar v-show="isLoading" indeterminate />

            <VaInput stateful label="Batiment" :rules="[(v) => !!v || 'Required']" />

            <VaInput stateful label="Etage" :rules="[(v) => !!v || 'Required']" />

            <VaInput stateful label="Porte" :rules="[(v) => !!v || 'Required']" />

            <VaInput stateful label="Phone" :rules="[asyncRule, (v) => !!v || 'Required']" />

            <VaButton :loading="isLoading" :disabled="isLoading || !isValid">
                Send
            </VaButton>
        </VaForm>
   

    </section>
</template>

<script setup lang="ts">
import { IReservation } from '@/model/reservation';
import { ReservationService } from '@/service/reservation.service';
import { ref } from 'vue';
import { useForm } from 'vuestic-ui'


const asyncRule = (v: string) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(v.length > 3 || 'Should be more than 3 symbols')
        }, 3000)
    })
}
const { isLoading, isValid } = useForm('myForm')
</script>

<style scoped></style>