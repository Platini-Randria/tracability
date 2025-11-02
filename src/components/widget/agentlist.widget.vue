<template>

    <section>

        <div>
            <va-list>
                <va-list-label>Agents</va-list-label>
                <va-list-item v-for="(agents, index) in agents" :key="index" class="list__item" to="/">
                    <va-list-item-section avatar>
                        <va-avatar>
                            <img :src="agents.img">
                        </va-avatar>
                    </va-list-item-section>

                    <va-list-item-section>
                        <va-list-item-label>
                            {{ agents.name }}
                        </va-list-item-label>
                        <va-list-item-label caption>
                            {{ agents.address }}
                        </va-list-item-label>

                        <va-list-item-section icon>
                            <div class="d-flex gap-2">
                                <!-- ------Update Button--------->
                                <VaButton color="info" size="small" preset="plain" @click="editModal = !editModal">
                                    Modifier
                                    <VaIcon name="edit" class="mr-2" />
                                </VaButton>

                                <!-- ------Delete Button--------->
                                <VaButton color="danger" size="small" preset="plain"
                                    @click="deleteModal = !deleteModal">
                                    Supprimer
                                    <VaIcon name="delete" class="mr-2" />
                                </VaButton>

                            </div>
                        </va-list-item-section>


                    </va-list-item-section>

                    <va-list-item-section icon>
                        <va-icon />
                    </va-list-item-section>
                </va-list-item>
            </va-list>
        </div>


        <!-- ------Modal de modification --------->
        <div>
            <VaModal v-model="editModal" ok-text="Appliquer">
                <h3 class="va-h3">
                    Modification du profil agent
                </h3>

                <VaForm ref="myForm" class="flex flex-col gap-2">

                    <div>
                        <VaInput class="mb-6 input" messages="" label="Nom" placeholder="Entrer le nom de l'agent" />

                        <VaInput class="mb-6 input" messages="" label="Matricule"
                            placeholder="Entrer le numero matricule" />

                        <VaInput class="mb-6 input" messages="" label="Service" placeholder="Son service" />

                        <VaInput class="mb-6 input" messages="" label="Poste" placeholder="Son poste de travail" />

                        <VaInput class="mb-6 input" messages="" label="E-mail"
                            placeholder="Saisir son adresse e-mail" />

                        <VaInput class="mb-6 input" messages="" label="Telephone"
                            placeholder="Entrer le numero de telephone" />

                        <VaSelect class="input" v-model="userData.sex" label="Sexe" :options="sexOptions" />

                        <VaInput class="mb-6 input" messages="" label="Adresse" placeholder="Entrer l'adresse" />

                        <VaInput class="mb-6 input" type="number" label="Âge" placeholder="Entrer l'âge" :min="0"
                            :max="120" :step="1" />

                        <VaSelect class="input" v-model="userData.family" label="Sexe" :options="familyOptions" />

                        <VaSelect class="input" v-model="userData.role" label="Role" :options="roleOptions" />


                    </div>

                </VaForm>

            </VaModal>
        </div>

        <!-- ------Modal de suppression --------->
        <div>
            <VaModal v-model="deleteModal" title="Confirmation de suppression"
                message="Êtes-vous sûr de vouloir supprimer cet agent ? Cette action est irréversible." ok-text="Oui"
                cancel-text="Non" @ok="" @cancel="deleteModal = false" blur />
        </div>

        <div>
            <VaScrollContainer class="max-h-52" vertical>
                <VaList>
                    <VaListLabel> Agents</VaListLabel>

                    <VaListItem v-for="(Agents, index) in Agents" :key="index" class="list__item">
                        <VaListItemSection avatar>
                            <VaAvatar>
                                <img :src="Agents.img" alt="">
                            </VaAvatar>
                        </VaListItemSection>

                        <VaListItemSection>
                            <VaListItemLabel>
                                {{ Agents.name }}
                            </VaListItemLabel>

                            <VaListItemLabel caption>
                                {{ Agents.address }}
                            </VaListItemLabel>
                        </VaListItemSection>

                        <VaListItemSection icon>
                            <VaIcon name="remove_red_eye" color="background-element" />
                        </VaListItemSection>
                    </VaListItem>
                </VaList>
            </VaScrollContainer>
        </div>
    </section>
</template>


<script setup lang="ts">
import { FAMILY, ROLE, SEX } from '@/enum/user.enum';
import { IUser } from '@/model/user';
import { UserService } from '@/service/user.service';
import { ref } from 'vue';

import { IMaterial } from '@/model/material';

import { imgPath } from "@/const/img.const";
import { text } from 'stream/consumers';
import { VaValue } from 'vuestic-ui';

import { useForm } from 'vuestic-ui'



const userData = ref<IUser>({
    name: '',
    IM: '',
    service: '',
    post: '',
    mail: '',
    phone: '',
    sex: '',
    address: '',
    age: 0,
    family: '',
    role: '',
    password: '',
})

const { isLoading, isValid } = useForm('myForm')

const asyncRule = (v: string) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(v.length > 3 || 'Should be more than 3 symbols')
        }, 3000)
    })
}

interface Agent {
    name: string;
    address: string;
    img: string;
}

const agents: Agent[] = [
    {
        name: "Audrey Clay",
        address: "644 Vermont Court, Freelandville, Kentucky, 2619",
        img: imgPath.Logo,
    },
    {
        name: "Aguirre Klein",
        address: "626 Carroll Street, Roulette, Ohio, 1477",
        img: imgPath.Logo,
    },
    {
        name: "Tucker Kaufman",
        address: "887 Winthrop Street, Tryon, Florida, 3912",
        img: imgPath.Logo,
    },
    {
        name: "Herbert Keller",
        address: "286 NW. Shore St.Longwood, FL 32779",
        img: imgPath.Logo,
    },
];

const Agents = [
    {
        name: "Luke Skywalker",
        address: "644 Vermont Court, Freelandville, Kentucky, 2619",
        img: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
        name: "C-3PO",
        address: "626 Carroll Street, Roulette, Ohio, 1477",
        img: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        name: "Obi-Wan Kenobi",
        address: "887 Winthrop Street, Tryon, Florida, 3912",
        img: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
        name: "Jabba Desilijic Tiure",
        address: "286 NW. Shore St.Longwood, FL 32777",
        img: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        name: "Yoda",
        address: "353 NW. Shore St.Longwood, FL 32778",
        img: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        name: "Darth Vader",
        address: "265 NW. Shore St.Longwood, FL 32779",
        img: "https://randomuser.me/api/portraits/men/6.jpg",
    },
];



interface formCollapse {
    value: boolean;
}

const formCollapse: formCollapse[] = [
    {
        value: false,
    }
]

const editModal = ref<boolean>(false)

const deleteModal = ref<boolean>(false)

</script>

<style scoped>
.list__item+.list__item {
    margin-top: 20px;
}

section {
    width: 100vw;
    height: 100vh;
    padding: 8vw;
}
</style>