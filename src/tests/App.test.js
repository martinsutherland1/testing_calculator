import { fireEvent, render } from '@testing-library/react';
// import { eq } from 'cypress/types/lodash';
import App from '../App';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<App/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal).toHaveTextContent('4');
    
  })

  it('should add 1 to 4 and get 5', () => {
    const button1 = container.getByTestId('number1');
    const add = container.getByTestId('add')
    const button4 = container.getByTestId('number4');
    const equals = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(add);
    fireEvent.click(button4);
    fireEvent.click(equals);
    expect(runningTotal).toHaveTextContent('5');

  })

  it('should subtract 4 from 7 and get 3', () =>{
    const button7 = container.getByTestId('number7');
    const subtract = container.getByTestId('subtract')
    const button4 = container.getByTestId('number4');
    const equals = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(subtract);
    fireEvent.click(button4);
    fireEvent.click(equals);
    expect(runningTotal).toHaveTextContent('3');
  })

  it('should multiply 3 by 5 and get 15', () => {
    const button3 = container.getByTestId('number3');
    const multiply = container.getByTestId('multiply')
    const button5 = container.getByTestId('number5');
    const equals = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(multiply);
    fireEvent.click(button5);
    fireEvent.click(equals);
    expect(runningTotal).toHaveTextContent('15');


  })

  it('should divide 21 by 7 and get 3', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const divide= container.getByTestId('divide')
    const button7 = container.getByTestId('number7');
    const equals = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divide);
    fireEvent.click(button7);
    fireEvent.click(equals);
    expect(runningTotal).toHaveTextContent('3');
  })

  it('should concatenate multiple number button clicks', () => {
    const button2 = container.getByTestId('number2');
    const button4 = container.getByTestId('number4');
    const button6 = container.getByTestId('number6');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button4);
    fireEvent.click(button6);
    expect(runningTotal).toHaveTextContent('246');



    
    


  })

})

