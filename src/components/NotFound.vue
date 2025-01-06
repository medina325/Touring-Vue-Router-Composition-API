<template>
  <div class="container">
    <div class="error">
      <h1>404</h1>
      <p class="message">Ops! Não encontramos o que você estava procurando.</p>
      <RouterLink class="btn" :to="{ name: 'event-list' }"
        >Voltar para a página inicial</RouterLink
      >
    </div>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
}

.error h1 {
  font-size: 120px;
  font-weight: bold;
  color: #ff4d4d;
  margin-bottom: 20px;
}

.message {
  font-size: 20px;
  color: #555;
  margin-bottom: 30px;
}

.btn {
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #0056b3;
}

.error {
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
