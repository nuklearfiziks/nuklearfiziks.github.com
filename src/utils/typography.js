import Typography from 'typography';
import TwinPeaks from 'typography-theme-twin-peaks';

TwinPeaks.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  a: {
    color: '#004e2b',
    textShadow: 'none',
    backgroundImage: 'none',
  },
});

const typography = new Typography(TwinPeaks);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const { rhythm, scale } = typography;
