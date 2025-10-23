<template>
    <section>
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
import { IAcquisition } from '@/model/acquisition'
import { ref } from 'vue';
import { useForm } from 'vuestic-ui'

const { isLoading, isValid } = useForm('myForm')

const asyncRule = (v: string) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(v.length > 3 || 'Should be more than 3 symbols')
        }, 3000)
    })
}

const acquisitionData = ref<IAcquisition>({
    batiment_acqui: '',
    batiment_remise: '',
    etage_acqui: '',
    etage_remise: '',
    porte_acqui: '',
    porte_remise: '',
    date_acquisition: new Date(), 
    date_remise: new Date(),
    id_material: 0,
    id_user: 0,
})
</script>


<style scoped>
section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5vw;
    max-height: 40vh;

}
</style>