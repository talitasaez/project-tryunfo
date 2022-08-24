import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = { cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    // hasTrunfo: false,
    // isSaveButtonDisabled: true,
  };

  handleChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { cardName, cardDescription, cardImage, cardAttr1, cardAttr2,
      cardAttr3, cardRare, cardTrunfo } = this.state;
    return (
      <div>
        <Form onInputChange={ this.handleChange } />
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
      </div>
    );
  }
}
export default App;
