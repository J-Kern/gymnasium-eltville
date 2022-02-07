<template>
  <div class="main main-container">
    <pCard>
      <template #title>
        Diese Seite wird momentan überarbeitet!
      </template>
      <template #content >
        <pMessage severity="warn" :closable="false">Wir sind bald wieder für Sie da!</pMessage>
      </template>
    </pCard>
  </div>
  <div class="main main-footer">
    
  </div>
</template>

<style>
.pad-right {
  margin-right: 5px;
}
.main {
  position: relative;
  width: 90vw;
}
.main-container {
  z-index: 1;
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
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

.main-footer {

}

</style>