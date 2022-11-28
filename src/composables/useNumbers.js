import {ref} from "vue";

export default function () {
    // let's have the state here
    const numbers =
        ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    // let's have the methods here
    const addNumber = (num) => {
        numbers.value.push(num);
    }
    const filterMinNumber = (minNum) => {
        return numbers.value.filter(num => num > minNum);
    }


    return {
        numbers,addNumber,filterMinNumber
    }
}
