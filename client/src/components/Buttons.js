import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { colors } from '../themes/theme'

export const ContinueButton = withStyles({
  root: {
    background: `linear-gradient(45deg, ${colors.darkBlue} 30%, ${colors.lightBlue} 90%)`,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(125, 123, 135, .3)',
    marginLeft: '10px'
  },
})(Button);

export const RedirectPageButton = withStyles({
  root: {
    background: `linear-gradient(45deg, ${colors.darkGray} 30%, ${colors.lightGray} 90%)`,
    color: 'white',
    height: '5ch',
    padding: '0 30px',
    boxShadow: `0 3px 5px 2px ${colors.shadow}`,
    marginLeft: '10px'
  },
})(Button);
