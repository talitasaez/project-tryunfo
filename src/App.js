/* eslint-disable no-use-before-define */
import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    // hasTrunfo: false,
    isSaveButtonDisabled: true,
    saveButtonArray: [],
  };

  handleChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value,
    }, () => {
      this.saveButton();
    });
  };

  saveButton = () => {
    // console.log('oi');
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage } = this.state;

    const maxValue = 90;
    const maxSom = 210;
    const minValue = 0;
    const att1Number = Number(cardAttr1);
    const att2Number = Number(cardAttr2);
    const att3Number = Number(cardAttr3);
    const somAtt = att1Number + att2Number + att3Number;
    const valIpt = (cardName === '') || (cardDescription === '') || (cardImage === '');
    this.setState({ isSaveButtonDisabled: (valIpt
        || att1Number > maxValue || att1Number < minValue
        || att2Number > maxValue || att2Number < minValue
        || att3Number > maxValue || att3Number < minValue
        || somAtt > maxSom) });
  };

  saveClick = () => {
    const { cardName, cardDescription, cardImage,
      cardAttr1, cardAttr2, cardAttr3, cardRare } = this.state;
    const info = { cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare };
    this.setState((e) => ({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      saveButtonArray: [...e.saveButtonArray, info],
    }));
  };

  render() {
    const { cardName, cardDescription, cardImage, cardAttr1, cardAttr2,
      cardAttr3, cardRare, cardTrunfo, isSaveButtonDisabled } = this.state;
    const { saveButtonArray } = this.state;
    return (
      <div>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.saveClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        { saveButtonArray.map((e) => (<Card
          key={ e.cardName }
          cardName={ e.cardName }
          cardDescription={ e.cardDescription }
          cardImage={ e.cardImage }
          cardAttr1={ e.cardAttr1 }
          cardAttr2={ e.cardAttr2 }
          cardAttr3={ e.cardAttr3 }
        />))}
      </div>
    );
  }
}
export default App;
