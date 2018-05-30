import WebFont from 'webfontloader';
WebFont.load({
  google: {
    families: [
      'Montserrat:100,400,500,600', 'sans-serif',
      'Raleway Dots', 'cursive',
      'Bangers', 'cursive'
    ]
  }
});
export default {
  hello: {
    composes: ['animated', 'fadeInUpBig', 'is-size-1-touch', 'is-size-1-desktop'],
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: props => props.font,
    color: props => props.color,
    fontSize: props => props.size,
    fontWeight: 500,
  },
  rainbow: {
    color: '#f35626',
    backgroundImage: 'linear-gradient(124deg,#ff470f,#ff3860,#b86bff,#3273dc)',
    '-webkitBackgroundClip': 'text',
    '-webkitTextFillColor': 'transparent',
    '-webkitAnimation': 'rainbow 8s ease infinite',
  }
};
