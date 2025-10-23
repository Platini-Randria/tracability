<template>

    <section>
        <div>
            <VaCollapse class="min-w-96" header="Formulaire pour ajouter agent">
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

                        <VaButton class="input" @click="submit">
                            Enregistrer
                        </VaButton>

                    </div>

                </VaForm>
            </VaCollapse>
        </div>
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
                    </va-list-item-section>

                    <va-list-item-section icon>
                        <va-icon />
                    </va-list-item-section>
                </va-list-item>
            </va-list>
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

import platini from '@/assets/sary.jpg'
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

const sexOptions = [
    {
        text: SEX.M,
        value: SEX.M
    }
]

const familyOptions = [
    {
        text: FAMILY.SINGLE,
        value: FAMILY.SINGLE
    },
    {
        text: FAMILY.ENGAGED,
        value: FAMILY.ENGAGED
    },
    {
        text: FAMILY.DIVORCED,
        value: FAMILY.DIVORCED
    },
    {
        text: FAMILY.WIDOWED,
        value: FAMILY.WIDOWED
    },
    {
        text: FAMILY.OTHER,
        value: FAMILY.OTHER
    },
]

const roleOptions = [
    {
        text: ROLE.ADMIN,
        VaValue: ROLE.ADMIN
    },
    {
        text: ROLE.USER,
        VaValue: ROLE.USER
    }
]

const submit = async () => {
    const response = await UserService.uploadUser(userData.value)
}


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
        img: "platini",
    },
    {
        name: "Aguirre Klein",
        address: "626 Carroll Street, Roulette, Ohio, 1477",
        img: "platini",
    },
    {
        name: "Tucker Kaufman",
        address: "887 Winthrop Street, Tryon, Florida, 3912",
        img: "platini",
    },
    {
        name: "Herbert Keller",
        address: "286 NW. Shore St.Longwood, FL 32779",
        img: "platini",
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