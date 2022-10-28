import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import 'uikit/dist/css/uikit.min.css';

import { startVueUi } from './vue/index.js';

export function startUi () {
	UIkit.use(Icons);
	UIkit.notification('Game Started');
	startVueUi ();
}
