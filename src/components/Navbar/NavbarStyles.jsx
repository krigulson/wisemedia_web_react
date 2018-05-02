export default {
  navLink: {
    composes: ['nav-link', 'animated', 'fadeInRightBig', 'hvr-underline-from-left'],
    color: '#000',
    font: {
      family: 'Monteserrat, sans-serif',
      size: '20px',
      weight: '100',
    },
    textTransform: 'uppercase',
    lineHeight: 2,
    '&:before': {
      background: '#000',
      bottom: '10px',
      height: '2px'
    },
    '&:hover': {
      color: '#00000073'
    },
  }
};
