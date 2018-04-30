import WebFont from 'webfontloader';
WebFont.load({
  google: {
    families: ['Roboto', 'sans-serif']
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
    color: 'red',
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    height: '100%',
    width: '100%'
  },
};
