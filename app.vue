<script setup>
const openMail = () => {
  window.open('mailto:poststelle@eltville-gymnasium.de', 'self');
}
</script>

<template>
  <div class="main main-container center">
    <pCard>
      <template #title>
        Diese Seite wird momentan überarbeitet!
      </template>
      <template #content >
        
        <pCard>
          <template #header>
            <img src="/images/gym-eltville-logo.png"/>
          </template>
          <template #content>
            <b>Für mehr Information:</b>
            <br>
            <br>
            Email: <pBadge size="large" value="poststelle@eltville-gymnasium.de"></pBadge>
            <br>
            <br>
            Anschrift: <pBadge size="large" value="Wiesweg 7, 65343 Eltville am Rhein"></pBadge>
            <pMessage severity="warn" :closable="false">Wir sind bald wieder für Sie da!</pMessage>
          </template>
        </pCard>
      </template>
    </pCard>
  </div>
  <pSplitter class="main main-footer">
    <pSplitterPanel class="center">
      <pButton icon="pi pi-envelope" label="Email: poststelle@eltville-gymnasium.de" @click="openMail()"></pButton>
    </pSplitterPanel>
    <pSplitterPanel class="center space-evenly">
      <img class="contain-element" src="/images/gym-eltville-logo.png"/>
    </pSplitterPanel>
  </pSplitter>
</template>

<style>
.main {
  position: relative;
  width: 90vw;
}
.main-container {
  z-index: 1;
  height: 75vh;
}

.main-footer {
  z-index: 1;
  height: 10vh;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.space-evenly {
  justify-content: space-evenly;
}

.contain-element {
  max-height: 80%; 
}

body {
  margin: 0;
  padding: 5vh 5vw;
  inset: 0;
  width: 100vw;
  min-height: 100vh;
  position: relative;
}

body::before {
  z-index: -10;
  content: '';
  position: absolute;
  inset: 0;
  background: url(/images/index.jpg) no-repeat center center fixed;
  background-blend-mode: multiply;
}

body::after {
  z-index: -5;
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5) no-repeat center center fixed;
  background-blend-mode: multiply;
}


</style>