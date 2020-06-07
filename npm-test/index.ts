import jsonIgnore from 'ignore-field';


const objectToProcess = {
  field1: 'field1',
  field2: 'field2',
  fieldToRemove: 'hihi'
}

const result = jsonIgnore(['fieldToRemove'], objectToProcess);
console.log(result);
