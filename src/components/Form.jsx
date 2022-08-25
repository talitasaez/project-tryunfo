import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <form>
        <label htmlFor="name-input">
          Nome
          <input
            name="cardName"
            id="input-name"
            placeholder="Nome"
            type="text"
            value={ cardName }
            data-testid="name-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <textarea
            name="cardDescription"
            id="textarea"
            value={ cardDescription }
            data-testid="description-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr1-input">
          Attr01
          <input
            type="number"
            name="cardAttr1"
            id="input-att1"
            placeholder=""
            value={ cardAttr1 }
            data-testid="attr1-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr2-input">
          Attr02
          <input
            type="number"
            name="cardAttr2"
            id="input-att2"
            placeholder=""
            value={ cardAttr2 }
            data-testid="attr2-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr3-input">
          Attr03
          <input
            type="number"
            name="cardAttr3"
            id="input-att3"
            placeholder=""
            value={ cardAttr3 }
            data-testid="attr3-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image-input">
          Imagem
          <input
            name="cardImage"
            id="input-image"
            value={ cardImage }
            type="text"
            data-testid="image-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rare-input">
          Raridade
          <select
            name="cardRare"
            id="input-rare"
            value={ cardRare }
            data-testid="rare-input"
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          <input
            name="cardTrunfo"
            id="input-trunfo"
            checked={ cardTrunfo }
            type="checkbox"
            data-testid="trunfo-input"
            onChange={ onInputChange }
          />
        </label>
        <button
          id="submit-btn"
          disabled={ isSaveButtonDisabled }
          type="button"
          data-testid="save-button"
          onClick={ onSaveButtonClick }
        >
          Salvar

        </button>
      </form>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
