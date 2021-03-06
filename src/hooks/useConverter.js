import {useState} from 'react'

const JSONExample = `[
    {
        "id": 1,
        "name": "Johnson, Smith, and Jones Co.",
        "amount": 345.33,
        "comment": "Pays on time"
    },
    {
        "id": 2,
        "name": "Sam Mad Dog Smith",
        "amount": 993.44,
        "comment": ""
    },
    {
        "id": 3,
        "name": "Barney & Company",
        "amount": 0,
        "comment": "Great to work with and always pays with cash."
    },
    {
        "id": 4,
        "name": "Johnson's Automotive",
        "amount": 2344,
        "comment": ""
    }
]`

const CSVExample = `id,name,amount,comment
1,Johnson, Smith, and Jones Co.,345.33,Pays on time
2,Sam Mad Dog Smith,993.44,
3,Barney & Company,0,Great to work with and always pays with cash.
4,Johnson's Automotive,2344,`

export const useConverter = () => {

    const [inputText, setInputText] = useState('')
    const [outputText, setOutputText] = useState('')
    const [isInputNotCorrect, setIsInputNotCorrect] = useState(false)
    const [incorrectInputMessage, setIncorrectInputMessage] = useState('');
    const [rowsInput, setRowsInput] = useState(10);
    const [rowsOutput, setRowsOutput] = useState(10);

    const tranformJSONToCSV = () =>{

        if (inputText !== '') {
            const formatedText = analyseInput(inputText);
            if (isInputNotCorrect) return
            const CSV = analyseInputContent(formatedText);
            if (isInputNotCorrect){
                return
            }else{

                setRowsSize(CSV.split("\n").length, setRowsOutput)
                setOutputText(CSV)
            }
        } else {
            setIsInputNotCorrect(true)
            setIncorrectInputMessage('The text above is empty. Please enter a valid JSON input.')
        }
    }

    
    const analyseInput = (input) =>{
        try {
            let formatedInput = JSON.parse(input)
            formatedInput = JSON.stringify(formatedInput, null, 2)
            setIsInputNotCorrect(false)
            setIncorrectInputMessage('')
            return formatedInput
        } catch (error) {
            setIsInputNotCorrect(true)
            setIncorrectInputMessage('The JSON is not correct. Something is missing or there is a miss input')
            return inputText
        }
    }
    
    const analyseInputContent= (text) =>{
        try {
            
            let input = JSON.parse(text)
            const keys = Object.keys(input[0])
            const areAllEqual = input.every( inputKeys =>  arrayEquals(Object.keys(inputKeys), keys))
            if (areAllEqual) {
                setIsInputNotCorrect(false)
                setIncorrectInputMessage('')
                const JSONToCSV = convertToCSV(input)
                return JSONToCSV
            } else {
                setIsInputNotCorrect(true)
                setIncorrectInputMessage('not all keys in this JSON are equal. Please verify all keys are the some to make convert from JSON to CSV')
                return "";
            }
        } catch (error) {
            setIsInputNotCorrect(true)
            setIncorrectInputMessage('Something went wrong. The structure of the JSON should be similar to the example. Press in "show example" to have an idea')
            return ""
        }
    }
    const arrayEquals = (a, b) => {
        return Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index]);
    }
    
    const convertToCSV = (obj) =>{
        const keys = Object.keys(obj[0])
        let CSV = appendKeysAndValues(keys)
        obj.forEach( val => {
            CSV += appendKeysAndValues(Object.values(val))
        })
        
        return CSV
    }
    
    const appendKeysAndValues = (items) =>{
        let concatString = ''
        for (let index = 0; index < items.length; index++) {
            if (index !== items.length - 1) {
                concatString += items[index] + ","
            }else{
                concatString += items[index] + "\n"
            }
        }
        return concatString
    }

    const formatJSON = () =>{
        if (inputText !== '') {
            const formatedJSON = analyseInput(inputText);
            if (!isInputNotCorrect ) {
                setInputText(formatedJSON)
                setRowsSize(JSONExample.split("\n").length,setRowsInput)
            } 
        } else {
            setIsInputNotCorrect(true)
            setIncorrectInputMessage('The text above is empty. Please enter a valid JSON input.')
        }
    }
    
    const cleanTexts = () =>{
        setIsInputNotCorrect(false)
        setIncorrectInputMessage('')
        setInputText('');
        setOutputText('');
        setRowsSize(0,setRowsInput)
        setRowsSize(0, setRowsOutput)
    }

    const showExamples = () =>{

        setRowsSize(JSONExample.split("\n").length,setRowsInput)
        setRowsSize(CSVExample.split("\n").length, setRowsOutput)
        setIsInputNotCorrect(false)
        setIncorrectInputMessage('')
        setInputText(JSONExample);
        setOutputText(CSVExample);
    }

    const auto_grow = (element) =>{
        element.style.height = "5px";
        element.style.height = (element.scrollHeight)+"px";
    }

    const handleInputChange = (event) =>{
        setRowsSize(event.target.value.split("\n").length, setRowsInput)
        setInputText(event.target.value)
    }

    const setRowsSize = (size, setRow) =>{
        if (size < 10) {
            setRow(10)
        } else {
            setRow(size +1)
        }

    }

  return {
        inputText,
        outputText,
        rowsInput,
        rowsOutput,
        isInputNotCorrect,
        incorrectInputMessage,
        tranformJSONToCSV,
        formatJSON,
        cleanTexts,
        showExamples,
        auto_grow,
        handleInputChange
  }
}
