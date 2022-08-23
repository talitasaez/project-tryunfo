import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome
          <input type="text" data-testid="name-input" />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea data-testid="description-input" />
        </label>
        <label htmlFor="attr1">
          Attr01
          <input number="" data-testid="attr1-input" />
        </label>
        <label htmlFor="attr2">
          Attr02
          <input number="" data-testid="attr2-input" />
        </label>
        <label htmlFor="attr3">
          Attr03
          <input number="" data-testid="attr3-input" />
        </label>
        <label htmlFor="image">
          Imagem
          <input type="text" data-testid="image-input" />
        </label>
        <label htmlFor="rare">
          Raridade
          <select data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          <input type="checkbox" data-testid="trunfo-input" />
        </label>
        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}
