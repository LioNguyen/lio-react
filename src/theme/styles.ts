const colors = {
  // Create new color
  brand: {
    900: '#003C43',
    800: '#135D66',
    700: '#77B0AA',
    600: '#E3FEF7',
  },
}

const fonts = {
  // Override default font
  body: 'Tahoma',
  heading: 'Courier New',

  // Create new font
  main: 'Menlo, monospace',
}

const styles = {
  global: {
    '*': {
      boxSizing: 'border-box',
    },
    'html, body': {
      // backgroundColor: 'gray.900',
      // color: 'whiteAlpha.800',
    },
    svg: {
      cursor: 'pointer',
    },
    // '.table': {
    //   border: '1px solid #424242',
    // },
    '.tr': {
      display: 'flex',
      width: 'fit-content',
    },
    '.th, .td': { boxShadow: 'inset 0 0 0 0.5px #424242' },
    '.th': {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'gray.400',
      padding: '0.5rem',
      fontWeight: 'bold',
      fontSize: 'xs',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
    '.td > input': {
      m: '1',
      padding: '0.2rem',
      bg: 'transparent',
      maxW: '100%',
    },
    '.date-wrapper': {
      display: 'flex',
      alignItems: 'center',
      w: '100%',
      h: '100%',
    },
    '.resizer': {
      position: 'absolute',
      opacity: 0,
      top: 0,
      right: 0,
      h: '100%',
      w: '5px',
      bg: '#27bbff',
      cursor: 'col-resize',
      userSelect: 'none',
      touchAction: 'none',
      borderRadius: '6px',
    },
    '.resizer.isResizing': {
      bg: '#2eff31',
      opacity: 1,
    },
    '*:hover > .resizer': {
      opacity: 1,
    },
  },
}

export { colors, fonts, styles }
