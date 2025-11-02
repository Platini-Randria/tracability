<template>
    <section>
        <VaList>
            <VaListLabel> Contacts </VaListLabel>

            <VaListItem v-for="(contact, index) in contacts" :key="index" class="list__item">


                <VaListItemSection>
                    <VaListItemLabel>
                        {{ contact.mail }}
                    </VaListItemLabel>

                    <VaListItemLabel caption>
                        {{ contact.password }}
                    </VaListItemLabel>
                </VaListItemSection>


                <va-list-item-section icon>

                    <div class="flex space-x-2">
                        <!-- ------Delete Button--------->
                        <VaButton color="danger" size="small" preset="plain" @click="deleteModal = !deleteModal">
                            Supprimer
                            <VaIcon name="delete" class="mr-2" />
                        </VaButton>

                    </div>
                </va-list-item-section>

                <!-- ------Modal de suppression --------->
                <div>
                    <VaModal v-model="deleteModal" title="Confirmation de suppression"
                        message="Êtes-vous sûr de vouloir supprimer cet admin ? Cette action est irréversible."
                        ok-text="Oui" cancel-text="Non" @ok="deleteContact(contact.id || 0)"
                        @cancel="deleteModal = false" blur />
                </div>


            </VaListItem>




        </VaList>
    </section>
</template>
<script setup lang="ts">
import { IUser } from '@/model/user';
import { UserService } from '@/service/user.service';
import { IApiUserResponse } from '@/model/response';
import { onBeforeUnmount, onMounted, ref } from 'vue';

const contacts = ref<IUser[]>([])


const deleteModal = ref<boolean>(false)
const deleteContact = async (id: number) => {
    const response = await UserService.deleteUser(id);
};

// onBeforeUnmount(async () => {
//     const del = await UserService.deleteUser("userId");
//     if (del.success) {
//         contacts.value = del.data;
//     }
// });


// HOOKS
/*!SECTION

    onBeforeMount(() => {});
    onMounted(() => {});

    onBeforeUnmount(() => {});
    onUnmounted(() => {});



*/
onMounted(async () => {

    const res = await UserService.getAllUsers();
    if (res.success) {
        contacts.value = res.data;
    }
});


</script>