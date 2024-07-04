import { writable } from 'svelte/store';

// Initialize the store with a default language name
export const langName = writable(null);
