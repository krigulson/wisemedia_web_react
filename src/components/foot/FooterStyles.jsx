import WebFont from 'webfontloader';
WebFont.load({
  google: {
    families: ['Lato:100,400,700,900', 'sans-serif']
  }
});
let currentColor = '#4a4a4a'
export default {
  footerLinkTitle: {
    color: '#363636',
    fontSize: '.8rem',
    fontWeight: '600',
    fontFamily: 'Lato, sans-serif',
    textTransform: 'uppercase'
  },
  footerLink: {
    marginTop: '.2rem',
    fontSize: '.6rem',
    fontFamily: 'Lato, sans-serif',
    textTransform: 'uppercase',
    '& a': {
      color: currentColor,
    }
  }
}
