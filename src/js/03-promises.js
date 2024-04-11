import PromisePlugin from './promise-plugin';

const formRef = document.querySelector('.form');
const promises = new PromisePlugin();

formRef.addEventListener('submit', promises.submit.bind(promises));
