<template>

    <section>
        Creation compte administrateur

        <VaForm class="form" tag="form" @submit.prevent="handleSubmit">
            <VaInput class="input" v-model="userData.mail" label="Email" />

            <VaInput class="input" v-model="userData.password" type="password" label="Password" />

            <VaSelect v-model="userData.role" class="input" label="Role" :options="options" clearable />

            <VaButton class="input" @click="handleSubmit">
                Creer compte
            </VaButton>
        </VaForm>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IUser } from '@/model/user';
import { UserService } from '@/service/user.service';
import { useToast } from 'vuestic-ui'
import { IAPI_AUTH_ERROR } from '@/enum/error.enum';

const { init, notify, close, closeAll } = useToast()
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
    password: ''
});

const handleSubmit = async () => {
    const res = await UserService.uploadUser(userData.value);

    if (res.success) {
        notify({
            title: "Succes",
            message: "Utilisateur cree avec succes",
            color: "success",
            position: "top-center"

        });
    } else {
        if (res.message === IAPI_AUTH_ERROR.DUPLICATE_EMAIL)
            notify({
                title: "Erreur",
                message: "Email deja utilise",
                color: "danger",
                position: "top-center"

            });

        else

            notify({
                title: "Erreur",
                message: "Une erreur est survenue lors de la creation de l'utilisateur",
                color: "danger",
                position: "top-center"
            });
    }
};
const options = [
    "ADMIN",
    "UTILISATEUR"
];
</script>

<style scoped>
section {
    padding: 5vw;
    padding-top: 20vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: auto;
}

.input {
    width: 90vw;
    margin-bottom: 1vh;
    margin-top: 1vh;
}
</style>