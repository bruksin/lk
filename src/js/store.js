import { writable } from 'svelte/store';
export let myuserdata = writable(JSON.parse(localStorage.getItem('userdata')));