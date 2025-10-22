<template>
    <section>
        <VaForm ref="formRef" class="flex flex-col items-baseline gap-6">
            <VaInput v-model="form.firstName"
                :rules="[(value) => (value && value.length > 0) || 'First name is required']" label="firstName" />

            <VaInput v-model="form.lastName"
                :rules="[(value) => (value && value.length > 0) || 'Last name is required']" label="Last Name" />


            <div>
                <span class="va-title">Payment method</span>
                <VaOptionList v-model="form.paymentMethod" :options="['Visa', 'MasterCard', 'PayPal']"
                    :rules="[(v) => v === 'PayPal' || 'Only PayPal is currently available']" type="radio" />
            </div>

            <VaCheckbox v-model="form.acknowledgement" :rules="[(v) => v || 'You must agree with terms and conditions']"
                label="I'm okay if you lose my package" />

         
        </VaForm>   

        <div class="mt-8 flex w-full gap-3 background-element">
            <VaButton @click="validate() && submit()">
                Validate
            </VaButton>
            <VaButton @click="resetValidation">
                Reset validation
            </VaButton>
            <VaButton @click="reset">
                Reset
            </VaButton>
        </div>
    </section>
</template>
<script setup lang="ts">
import { IUser } from '@/model/user';
import { reactive, ref } from 'vue';
import { useForm } from 'vuestic-ui';

const { isValid, validate, reset, resetValidation } = useForm('formRef')

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

const form = reactive({
    firstName: '',
    lastName: '',
    country: '',
    birthDate: null as Date | null,
    time: null as Date | null,
    acknowledgement: false,
    notifications: true,
    paymentMethod: '',
    amount: 1,
    count: 1,
})

const countries = [
    { value: 'ua', text: 'Ukraine' },
    { value: 'us', text: 'USA' },
    { value: 'uk', text: 'United Kingdom' },
]

const validateBirthday = (value: Date | null) => {
    if (!value) {
        return 'Field is required'
    }

    const today = new Date()
    let yearDiff = today.getFullYear() - value.getFullYear()
    const monthDiff = today.getMonth() - value.getMonth()

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < value.getDate())) {
        yearDiff--
    }

    return yearDiff >= 18 || 'You must be at least 18 years old'
}

const submit = () => alert('Form submitted!')
</script>
<style scoped>
section {
    width: 100vw;
    height: 100vh;
    padding: 5vw;
}
</style>