import { LitElement, html, css } from 'lit';
import './components/GetData.js';
import './components/ApiTemplate.js'
import style from './styles/RickMortyStyles.js'

export class RickMortyApi extends LitElement {
  static get properties() {
    return {
      wiki: { type: Array },
    };
  }

  static get styles() {
    return [style];
  }

  constructor() {
    super();
    this.wiki = [];
    this.addEventListener('ApiData', (e) => {
      this._dataFormat(e.detail.data);
    });
  }

  _dataFormat(data) {
    let characters = [];

    data['results'].forEach(character => {
      characters.push({
        img: character.image,
        name: character.name,
        species: character.species,
        status: character.status
      })

    });
    this.wiki = characters;
  }

  render() {
    return html`
    <get-data url="https://rickandmortyapi.com/api/character" method="GET"></get-data>
    <api-template></api-template>
    <main class="container">
      ${this.dateTemplate}
    

    </main>
    `;
  }

  get dateTemplate() {
    return html`
    ${this.wiki.map(character => html`
    <section class="card">
      <section class="card-content">
        <h2>${character.name}</h2>
        <img src="${character.img}">
        <p>${character.species} | ${character.status}</p>
      </section>
    </section>
    `)}
    
    `
  }
}
