import MyApp from './components/my-app';
import MyName from './components/my-name';
import SzCard from './components/sz-card';

customElements.define('my-app', MyApp);
customElements.define('my-name', MyName);

console.log('foo');
customElements.define('sz-card', SzCard);
