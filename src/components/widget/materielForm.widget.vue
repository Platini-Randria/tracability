<template>


    <!-- -----------------Form ajout materiel---------------------------- -->

        <div>
            <VaCollapse v-model="value" header="Formulaire pour ajouter nouveau materiel" solid color="primary">

                <VaInput v-model="materialData.name" class="mb-6 input" messages="Pas trop long" label="Nom du materiel"
                    placeholder="Entrer le nom du materiel" />

                <VaSelect class="input" v-model="materialData.state" label="Etat du materiel" :options="stateOptions" />
                <VaSelect class="input" v-model="materialData.category" label="Etat du materiel"
                    :options="categoryOptions" />
                <VaCounter class="input" v-model="materialData.total_quantity" buttons />
                <VaButton class="input" @click="submit">
                    Enregistrer
                </VaButton>

            </VaCollapse>
        </div>


</template>

<script setup lang="ts">
import { IMaterial } from '@/model/material';
import { MaterialService } from '@/service/material.service';
import { MATERIAL_CATEGORY} from '@/enum/material.enum';
import { MATERIAL_STATE } from '@/enum/material.enum';
 import { ref } from 'vue';

const materialData = ref<IMaterial>({
    name: '',
    state: '',
    category: '',
    total_quantity: 0,

})

const submit = async () => {
    const response = await MaterialService.uploadMaterial(materialData.value)
}

const stateOptions = [
    {
        text: MATERIAL_STATE.BON,
        value: MATERIAL_STATE.BON
    },
    {
        text: MATERIAL_STATE.A_REPARER,
        value: MATERIAL_STATE.A_REPARER
    },
    {
        text: MATERIAL_STATE.MAUVAIS,
        value: MATERIAL_STATE.MAUVAIS
    },
    {
        text: MATERIAL_STATE.NEUF,
        value: MATERIAL_STATE.NEUF
    },
    {
        text: MATERIAL_STATE.USAGE,
        value: MATERIAL_STATE.USAGE
    },
]

const categoryOptions = [
    {
        text: MATERIAL_CATEGORY.CONSOMMABLES,
        value: MATERIAL_CATEGORY.CONSOMMABLES
    },
    {
        text: MATERIAL_CATEGORY.INFORMATIQUE,
        value: MATERIAL_CATEGORY.INFORMATIQUE
    },
    {
        text: MATERIAL_CATEGORY.MOBILIER,
        value: MATERIAL_CATEGORY.MOBILIER
    },

    {
        text: MATERIAL_CATEGORY.VEHICULE,
        value: MATERIAL_CATEGORY.VEHICULE
    },
    {
        text: MATERIAL_CATEGORY.OUTILS_MANUELS,
        value: MATERIAL_CATEGORY.OUTILS_MANUELS
    },
]


const value = ref<boolean>(false)


</script>