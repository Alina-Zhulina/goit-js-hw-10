import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const refs = {
    form: document.querySelector('.form'),
    inputDelay: document.querySelector('[name="delay"]'),
    inputFulfilled: document.querySelector('[value="fulfilled"]'),
    inputRejected: document.querySelector('[value="rejected"]'),
    buttonCreate: document.querySelector('[type="submit"]'),
};

refs.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const delay = Number(refs.inputDelay.value);
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (refs.inputFulfilled.checked) {
                resolve(`Fulfilled promise in ${delay}ms`);
            } else {
                reject(`Rejected promise in ${delay}ms`);
            }
        }, delay);
    });

    promise
        .then((message) => {
            iziToast.success({
                title: "Success",
                message: message,
                position: "topRight",
            });
        })
        .catch((error) => {
            iziToast.error({
                title: "Error",
                message: error,
                position: "topRight",
            });
        });
});


