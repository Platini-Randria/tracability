<script setup lang="ts">
import { imgPath } from '@/const/img.const';

</script>

<template>
  <section>
    <div class="logo" :style="{ backgroundImage: `url(${imgPath.Dredd})` }">

    </div>
    <p class="title">
      Page d'authentification
    </p>
    <label>Identifiant</label>
    <VaInput class="input" placeholder="Single-line message" />
    <label>
      <span>Mot de passe</span>
    </label>
    <VaInput class="input" placeholder="Single-line message" />
    <VaButton class="btn">
      Se connecter
    </VaButton>
    <strong>Mot de passe oublie ?</strong>

  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 10vh;

}

.title {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 2vh;
}

.logo {
  width: 50vw;
  height: 50vw;
  background-color: gray;
  border-radius: 50%;

  background-size: cover;
  background-position: center;
  margin-bottom: 5vh;
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