import { createMuiTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Roboto"',
    fontSize: 12,
    h1: {
      // could customize the h1 variant as well
    },
  },
  palette: {
    primary: { main: '#DF1B1B' },
  },
});

export const useStyles = makeStyles((theme) => ({
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
      length: '400ch',
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '30px',
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: colors.darkBlue
    },
    "& .MuiOutlinedInput-input": {
      color: 'black'
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "black"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: 'black'
    },
    "& .MuiInputLabel-outlined": {
      color: "gray"
    },
    "&:hover .MuiInputLabel-outlined": {
      color: "gray"
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: colors.darkBlue
    }
  },
  signUpForm: {
    marginLeft: '40px',
    display: 'flex',
    width: '30%',
  },
  loginImage: {
    float: 'left',
    paddingRight: '40px',
  },
  loginInSignUpContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
  },
  getStarted: {
    color: '#484848',
    marginLeft: '10px',
  },
  loginContainer: {
    width: 'inherit',
    top: '0',
    position: 'fixed',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: '20px',
  },
  alreadyHaveAccount: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    fontFamily: 'Roboto',
    color: colors.charcoalGray,
  },
  loginSignupWrapperRoot: {
    overflow: 'hidden',
    height: '100vh',
    width: '100vw',
    position: 'relative'
  },
  formField: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
  },
  dashboardContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pastPracticesText: {
    fontSize: '40px',
    color: colors.darkBlue,
  },
  interviewTable: {
    width: 1000,
    margin: 'auto',
    borderWidth: 1,
    borderColor: 'black',
  },
  interviewTableHeader: {
    backgroundColor: colors.darkBlue,
  },
  headerFont: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  infoFormDiv: {
    marginLeft: '10px',
    marginBottom: '2px',
    fontWeight: 'bold',
  },
  infoDropdown: {
    marginLeft: '10px',
    marginRight: '10px',
    marginBottom: '20px',
    paddingLeft: '16px',
    paddingBottom: '8px',
    paddingTop: '8px',
    borderRadius: '5px',
    border: `1px solid ${colors.lightGray}`,
    width: '50%',
    height: '40px',
  },
  starRating: {
    marginLeft: '10px',
    marginTop: '5px',
    marginBottom: '7px',
  },
  interviewLevelDiv: {
    marginLeft: '10px',
    color: `${colors.darkBlue}`,
    fontWeight: 'Bold',
  },
  interviewLevelDesc: {
    marginLeft: '10px',
    color: `${colors.darkGray}`,
    marginBottom: '30px',
  },
  interviewContainer: {
    overflow: 'hidden',
    position: 'relative'
  },
  interviewHeader: {
    backgroundColor: colors.darkBlue,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: '85px',
    alignItems: 'center'
  },
  interviewDetailsContainer: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  interviewTextEditor: {
    backgroundColor: 'rgba(30,30,30, 1)',
    height: '100vh'
  },
  interviewOutput: {
    backgroundColor: 'yellow',
    bottom: '0',
    position: 'absolute',
    height: '15vh',
    width: '66%',
    marginBottom: '25px',
    borderRadius: '25px'
  },
  interviewOutputHeader: {
    backgroundColor: 'gray',
    width: '100%',
    borderTopLeftRadius: '25px',
    borderTopRightRadius: '25px',
    height: '25%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  textMarginRight: {
    marginRight: '10px'
  },
  textMarginLeft: {
    marginLeft: '10px'
  },
  questionDetailsContainer: {
    marginTop: '30px',
    textAlign: 'left',
    width: '25vw',
    height: '85vh'
  },
  questionTopicText: {
    color: colors.darkBlue,
    fontSize: '35px',
    marginBottom: '40px'
  },
  funcDescText: {
    fontWeight: 'bold',
    fontSize: '25px'
  },
  questionDescText: {
    color: 'gray',
    fontSize: '18px'
  },
  answerSolutionContainer: {
    marginTop: '30px'
  },
  questionAnswerButtonHighlighted: {
    borderRadius: 35,
    height: 50,
    width: 150,
    padding: "18px 36px",
    fontSize: "15px",
    color: colors.darkBlue,
    marginRight: '15px',
    boxShadow: `0 1px 5px 2px ${colors.shadow}`,
  },
  questionAnswerButtonUnhighlighted: {
    borderRadius: 35,
    height: 50,
    width: 150,
    padding: "18px 36px",
    fontSize: "15px",
    color: colors.charcoalGray,
    marginRight: '15px',
    boxShadow: `0 1px 5px 2px ${colors.shadow}`,
  },
  questionAnswerButtonContainer: {
    display: 'flex',
    flexDirection: 'row'
  }
}));

export const colors = {
  darkBlue: '#516BF6',
  lightBlue: 'rgba(73, 145, 203, .8)',
  darkGray: 'rgba(105, 105, 105, .8)',
  lightGray: 'rgba(169, 169, 169, .8)',
  shadow: 'rgba(125, 123, 135, .3)',
  charcoalGray: 'rgba(30,30,30, .8)'
};
