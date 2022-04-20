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
    rowsOutput,
    isInputNotCorrect,
    incorrectInputMessage,
    handleInputChange,
    tranformJSONToCSV,
    formatJSON,
    cleanTexts,
    showExamples,
    auto_grow  } = useConverter();

  return (
    <Main>
      <Header/>
        <TextArea 
        rows={rowsInput}
        onChange={handleInputChange}
        value={inputText}
        onInput={auto_grow}
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
        rows={rowsOutput}
        value={outputText}
        onInput={auto_grow}
        readOnly
        />
    </Main>
  );
}

export default App;
