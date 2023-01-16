import {MutableRefObject} from "react";
import {handleAlertMessage} from "./auth";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

export const validationInputs = (
    textInput: MutableRefObject<HTMLInputElement>,
    priceInput: MutableRefObject<HTMLInputElement>,
    dateInput: MutableRefObject<HTMLInputElement>
    ):boolean => {
    const textInputValue = textInput.current.value;
    const priceInputValue = priceInput.current.value;
    const dateInputValue = dateInput.current.value;
    
     const inputs = [
         textInput.current,
         priceInput.current,
         dateInput.current
     ];

     const addDangerBoardByCondition = () => {
         inputs.forEach(input => input.value.length ? input.classList.remove('border-danger') : input.classList.add('border-danger'));
     }

     if(!textInputValue || !priceInputValue || !dateInputValue) {
         handleAlertMessage({alertText: 'Заполните все поля', alertStatus: 'Warning'});
         addDangerBoardByCondition();
         return false;
     }

     if(isNaN(+priceInputValue)) {
         handleAlertMessage({alertText: 'Введите число', alertStatus: 'Warning'});
         addDangerBoardByCondition();

         priceInput.current.classList.add('border-danger');
     }

     textInput.current.value = '';
     priceInput.current.value = '';
     dateInput.current.value = '';

     inputs.forEach(input => input.classList.remove('border-danger'));

     return true;
}