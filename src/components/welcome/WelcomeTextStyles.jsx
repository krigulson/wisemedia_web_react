import WebFont from 'webfontloader';
WebFont.load({
  google: {
    families: ['Montserrat:100,400,500,600', 'sans-serif', 'Raleway Dots', 'cursive']
  }
});
export default {
  hello: {
    composes: ['animated', 'fadeInUpBig'],
    fontSize: '5rem',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'Raleway Dots, cursive',
    fontWeight: 500,
  },
};
