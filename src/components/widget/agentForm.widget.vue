<template>

    <form>
        <!-- ------------ FORM ------------ -->
      
            <VaCollapse class="min-w-96" header="Formulaire pour ajouter agent" solid color="primary">
                <VaForm ref="myForm" class="form gap-2">

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
       
    </form>
    
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

.form,
form {
    width: 100vw;
    margin: auto;
    margin-top: 10vh;
    padding: 0 5vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
}

.input {
    width: 90vw;
    margin: auto;
    margin-bottom: 5px;
}
</style>