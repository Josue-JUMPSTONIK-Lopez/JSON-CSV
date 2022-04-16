import './App.css';
import { Button } from './components/Button';
import { ButtonContainer } from './components/ButtonContainer';
import { ErrorLabel } from './components/ErrorLabel';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { TextArea } from './components/TextArea';
import { useConverter } from './hooks/useConverter';

function App() {

  const {
    inputText,
    outputText,
    rowsInput,
    colsInput,
    rowsOutput,
    colsOutput,
    isInputNotCorrect,
    incorrectInputMessage,
    setInputText,
    tranformJSONToCSV,
    formatJSON,
    cleanTexts,
    showExamples  } = useConverter();

  return (
    <Main>
      <Header/>
      <TextArea 
      cols={colsInput} 
      rows={rowsInput}
      onChange={(e) => setInputText(e.target.value)}
      value={inputText}
      />
      {
        isInputNotCorrect 
        &&
        <ErrorLabel>{incorrectInputMessage}</ErrorLabel>
      }

      <ButtonContainer>
        <Button onClick={tranformJSONToCSV}>Convert To CSV</Button>
        <Button onClick={formatJSON}>Format To JSON</Button>
        <Button onClick={cleanTexts}>Clean</Button>
        <Button onClick={showExamples} >Show example</Button>
      </ButtonContainer>
      <TextArea 
      cols={colsOutput} 
      rows={rowsOutput}
      value={outputText}
      />
    </Main>
  );
}

export default App;
