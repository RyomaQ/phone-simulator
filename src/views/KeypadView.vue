<template lang="">
  <div id="mainDiv">
    <p v-if="numberExist==false" id="typedNumber">{{ numberTyped.replace(/([a-zA-Z0-9]{2})/g, "$1 ") }}</p>
    <p v-if="numberExist==true">{{ contactNumber }}</p>
    <p></p>

      <ul>
        <button @click="numberTyping(1)">1</button>
        <button @click="numberTyping(2)">2</button>
        <button @click="numberTyping(3)">3</button>
        <button @click="numberTyping(4)">4</button>
        <button @click="numberTyping(5)">5</button>
        <button @click="numberTyping(6)">6</button>
        <button @click="numberTyping(7)">7</button>
        <button @click="numberTyping(8)">8</button>
        <button @click="numberTyping(9)">9</button>
        <button @click="deleteNum()"><img src="../assets/arrow.png" alt=""></button>
        <button @click="numberTyping(0)">0</button>
        <button @click="call2(contactNumber, numberTyped)"><img src="../assets/call.png" alt=""></button>
      </ul>
    </div>

</template>
<script>
export default {
  name: 'KeypadView',

  computed: {
    contacts() {
      return this.$store.state.contacts
    }
  },

  data() {
    return {
      numberTyped: '',
      numberExist: false,
      contactNumber: ''
    }
  },

  methods: {
    numberTyping(num) {
      this.numberTyped += num;
      for (let i = 0; i < this.contacts.length; i++) {
        if (this.contacts[i].number == this.numberTyped) {
          this.numberExist = true;
          this.contactNumber = this.contacts[i].name;
          return
        }
        else {
          this.numberExist = false;
        }
      }
      console.log(this.contactNumber + ' ' + this.numberTyped)
      //   if(this.numberTyped == "55") {
      //   alert(this.contacts[1].number)
      // }
    },
    deleteNum() {
      this.numberTyped = this.numberTyped.slice(0, -1)
    }
  },

  call2(name, number) {
    let dateClick = new Date()
      // console.log(dateClick)
      // console.log(name)
      // console.log(number)

      let data = {
        name: name,
        number: number,
        date: dateClick.getDate() + '/' + dateClick.getMonth()+1 + '/' + dateClick.getFullYear() + ' - ' + dateClick.getHours() + "h" + dateClick.getMinutes() + 'min' + dateClick.getSeconds() + 'sec',
      }
      this.$store.commit('call',data)
    },
}
</script>
<style scoped>
@import url(../main.css);

/* input {
  background: none;
  outline: solid 1px white;
  height: 80px;
  width: 35%;
  margin-bottom: 30px;
} */

#mainDiv {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

p {
  color: #ffffff;
  font-size: 3rem;
  margin-bottom: 30px;
}

#typedNumber {
  max-width: 300px;
  height: 50px;
  overflow: hidden;
}

ul {
  width: 360px;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
}

button {
  height: 100px;
  width: 100px;
  border-radius: 50px;
  margin: 10px;
  font-size: 3rem;
  background-color: #ffffff10;
  border: none;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
}

button:hover {
  background-color: #ffffff30;
}

button:nth-child(12) {
  background-color: var(--main-color);
}

button:nth-child(12):hover {
  opacity: 0.7;
}
</style>