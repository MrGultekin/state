import {defineStore} from "pinia";


export const useNumbersStore = defineStore("numbers", {
    state: () => ({
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }),
    actions: {
        addNumber(num) {
            this.numbers.push(num);
        }
    },
    getters: {
        doubleNumber: (state) => {
            return state.numbers.map(num => num * 2);
        },
        filterMinNumber: (state) => {
            return (minNumber) =>
                state.numbers.filter(num => num >= minNumber);
        }
    }
})