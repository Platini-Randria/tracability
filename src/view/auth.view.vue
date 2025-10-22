<script setup lang="ts">
</script>

<template>
  <section>
    <div>
      TRACABILITY
    </div>
    <label>Identifiant</label>
    <VaInput class="input" placeholder="Single-line message" />
    <label>
      <span>Mot de passe</span>
      <strong>Mot de passe oublie ?</strong>
    </label>
    <VaInput class="input" placeholder="Single-line message" />
    <VaButton class="btn"> 
      Se connecter
    </VaButton>
</section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
}
.input {
  margin-bottom: 16px;
   width: 70vw;

}
.btn {
 width: 70vw;
}
label {
  display: flex;
  align-items: center;
  justify-content: space-between;
   width: 70vw;
  margin-bottom: 8px;
}
</style>
