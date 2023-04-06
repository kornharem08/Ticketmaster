import { defineStore } from 'pinia'
export const useTicketStore = defineStore('ticket', {
    state: () => ({ name: '', price: 0, quantity : 1 }),
    getters: {
      sumprice: (state) => state.price * state.quantity
    },
    actions: {
      increment() {
        this.quantity++
      },
      decrement() {
        if(this.quantity > 1){
        this.quantity--
        }
      },
      setticket (data:any) {
        this.name = data.name
        this.price = data.price
        this.quantity = 1
      }
    },
  })