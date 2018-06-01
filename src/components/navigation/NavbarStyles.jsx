export default {
  navLink: {
    composes: ['nav-link', 'animated', 'fadeInRightBig', 'hvr-underline-from-left'],
    color: '#000',
    font: {
      family: 'Monteserrat, sans-serif',
      size: '1em',
      weight: '400',
    },
    textTransform: 'uppercase',
    lineHeight: 1,
    '&:before': {
      background: '#000',
      bottom: '0px',
      height: '2px'
    },
    '&:hover': {
      color: '#00000073'
    },
  }
};
