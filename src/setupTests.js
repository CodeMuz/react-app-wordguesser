import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

window.scrollTo = () => { let a; };
window.alert = (msg) => { global.console.log(msg); };

window.matchMedia = window.matchMedia || function() {
  return {
    addListener : function() { let a;},
    matches : false,    
    removeListener: function() { let a;}
  };
};