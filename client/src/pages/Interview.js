import React, { useState } from 'react';
import { useStyles } from '../themes/theme';
import Grid from '@material-ui/core/Grid';
import InterviewQuestionDetails from '../components/InterviewQuestionDetails'
import TextEditor from '../components/TextEditor'
import { RunCodeButton } from '../components/Buttons';
import LanguageSelectMenu from '../components/LanguageSelectMenu'

const Interview = () => {
  const classes = useStyles();

  const [codeSnippet, setCodeSnippet] = useState('')
  const [output, setOutput] = useState('')
  const [language, setLanguage] = useState('Javascript');

  const runCode = (output) => {
    setOutput(output)
  }

  const handleCodeSnippetChange = (codeSnippet) => {
    setCodeSnippet(codeSnippet)
  }

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  }

  return (
    <div className={classes.interviewContainer}>
      <Grid container spacing={3}>
        <Grid className={classes.interviewHeader} item xs={12}>
          <div className={classes.textMarginLeft}>Interview with</div>
          <div className={classes.languageExitInterviewContainer}>
            <LanguageSelectMenu handleLanguageChange={handleLanguageChange} language={language} />
            <div className={classes.textMarginRight}>End Interview</div>
          </div>
        </Grid>
        <Grid className={classes.interviewDetailsContainer} item xs={4}>
          <InterviewQuestionDetails />
        </Grid>
        <Grid className={classes.interviewTextEditor} item xs={8}>
          <TextEditor handleCodeSnippetChange={handleCodeSnippetChange} />
          <div className={classes.interviewOutput}>
            <div className={classes.interviewOutputHeader}>
              <div className={classes.consoleText}>Console</div>
              <div onClick={() => runCode('hello')}>
                <RunCodeButton text="RUN CODE" />
              </div>
            </div>
            <div className={classes.outputText}>
              {output}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Interview;
