<template>
  <div class="networkError">
    <h1>Uh-Oh!</h1>

    <h3>
      Parece que você está passando por problemas de rede, tome um ar e
      <a class="link" href="#" @click="$router.go(-1)">clique aqui</a> para
      tentar novamente
    </h3>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

a:hover {
  color: #2f835d;
}
</style>
