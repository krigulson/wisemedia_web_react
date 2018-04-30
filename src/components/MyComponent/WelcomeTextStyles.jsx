import WebFont from 'webfontloader';
WebFont.load({
  google: {
    families: ['Montserrat:100,400,500,600', 'sans-serif', 'Raleway Dots', 'cursive']
  }
});
export default {
  hello: {
    composes: ['animated', 'fadeInUpBig'],
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '7rem',
    color: '#000',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'Raleway Dots, cursive',
    fontWeight: 500,
    height: '100%',
    width: '100%'
  },
};
