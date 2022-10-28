import { createApp } from 'vue';
import App from './component/basic/app/App.vue';

export function startVueUi () {
	createApp (App).mount ('#app');
}
