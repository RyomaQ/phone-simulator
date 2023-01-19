<template lang="">
  <div id="main">
    <div v-for = "contact in contacts" :key="contact.name" class="contactInfo">
      <p>{{ contact.name }}</p>
      <div class="numAndCall">
        <p>{{ contact.number.replace(/([a-zA-Z0-9]{2})/g, "$1 ") }}</p>
        <button id="call" @click = call(contact.name)><img src="../assets/call-purple.png" alt=""></button>
      </div>
    </div>
    <form @submit.prevent="newContact">
      <input type="text" placeholder="Nom" maxlength="20">
      <input v-model="newNumber" type="tel" placeholder="Numéro" maxlength="10">
      <button @click = submitContact() id="submit" type="submit">+</button>
    </form>
  </div>


</template>

<script>
export default {

  name: 'ContactView',
  computed: {
    // Recup les contact
    contacts() {
      return this.$store.state.contacts
    }
  },

  data() {
    return {
      newNumber: ''
    }
  },


  methods: {
    call(name, number) {
      let dateClick = new Date()
      let data = {name:name, number:number, date: dateClick.getDate() + '/' + dateClick.getMonth()+1 + '/' + dateClick.getFullYear().toString().substr(-2) + ' - ' + dateClick.getHours() + "h" + dateClick.getMinutes() + 'min'}
      this.$store.commit('call', data)
    },

    submitContact() {
      let reg = /^\d+$/
      if (!reg.test(this.newNumber) || this.newNumber.length != 10) {
        alert('Le numéro doit contenir 10 chiffres')
      }
    }

  },
}

</script>

<style>
#main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 90vh;
  margin-top: 10vh;

}

.contactInfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
}

.numAndCall {
  display: flex;
  align-items: center;
  gap: 20px;
}

p {
  color: #ffffff;
  font-family: var(--font);
  font-size: 1.5rem;
}

img {
  scale: 0.6;
}

#call {
  background: none;
  border: none;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 30px;
  transition: 0.3s;
}

#call:hover {
  background-color: #ffffff20;
}

form {
  display: flex;
  width: 500px;
  justify-content: space-between;
  margin-top: 35px;
}

input {
  border-radius: 10px;
  background-color: #ffffff10;
  border: none;
  padding-left: 20px;
  font-size: 18px;
  width: 38%;
  height: 40px;
  color: #ffffff;
}

#submit {
  background-color: var(--main-color);
  border-radius: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 100;
  font-size: 2rem;
  transition: 0.3s;
}

#submit:hover {
  scale: 1.1;
  opacity: 0.8;
}
</style>
