<template>
    <section>


         <div>
            <h1>Liste de materiel</h1>
        </div>

        <!-- -----------------Card list materiel---------------------------- -->
        <div>
            <VaCard>
                <VaCardTitle>NOM MATERIEL</VaCardTitle>
                <VaCardContent>
                    Information du materiel
                </VaCardContent>


                <!-- ------Update Button--------->
                <VaButton color="info"  @click="editModal = !editModal">
                    <VaIcon name="edit" class="mr-2" />
                </VaButton>

                <!-- ------Delete Button--------->
                <VaButton color="danger" @click="deleteModal = !deleteModal">
                    <VaIcon name="delete" class="mr-2" />
                </VaButton>

            </VaCard>

            <VaCard>
                <VaCardTitle>NOM MATERIEL</VaCardTitle>
                <VaCardContent>
                    Information du materiel
                </VaCardContent>

                <!-- ------Update Button--------->
                <VaButton color="info" @click="editModal = !editModal">
                    <VaIcon name="edit" class="mr-2" />
                    Modifier
                </VaButton>

                <!-- ------Delete Button--------->
                <VaButton color="danger" @click="deleteModal = !deleteModal">
                    <VaIcon name="delete" class="mr-2" />
                    Supprimer
                </VaButton>
            </VaCard>

            <VaCard>
                <VaCardTitle>NOM MATERIEL</VaCardTitle>
                <VaCardContent>
                    Information du materiel
                </VaCardContent>

                <!-- ------Update Button--------->
                <VaButton color="info" @click="editModal = !editModal">
                    <VaIcon name="edit" class="mr-2" />
                    Modifier
                </VaButton>

                <!-- ------Delete Button--------->
                <VaButton color="danger" @click="deleteModal = !deleteModal">
                    <VaIcon name="delete" class="mr-2" />
                    Supprimer
                </VaButton>
            </VaCard>

        </div>



        <!-- ------Modal de modification --------->
        <VaModal v-model="editModal" ok-text="Apply">
            <h3 class="va-h3">
                Modification de l'information du materiel
            </h3>
            <VaInput v-model="" class="mb-6 input" messages="Pas trop long" label="Nom du materiel"
                placeholder="Entrer le nom du materiel" />

            <VaSelect class="input" v-model="" label="Etat du materiel" :options="stateOptions" />
            <VaSelect class="input" v-model="" label="Etat du materiel"
                :options="categoryOptions" />
            <VaCounter class="input" v-model="" buttons />

        </VaModal>

        <!-- ------Modal de suppression --------->
        <VaModal v-model="deleteModal"
            message="Classic modal overlay which represents a dialog box or other interactive component, such as a dismissible alert, sub-window, etc."
            ok-text="Apply" blur />





    </section>
</template>

<script setup lang="ts">
import { MATERIAL_STATE } from '@/enum/material.enum';
import { MATERIAL_CATEGORY } from '@/enum/material.enum';
import { ref } from 'vue';

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

const editModal = ref<boolean>(false)

const deleteModal = ref<boolean>(false)

</script>