import { LitElement, html, css } from 'lit';

export class ApiTemplate extends LitElement {

    static get styles() {
        return css`
        .container{
            text-align: center;
        }
        h1{
            font-size: 60px;
        }
        .title{
            color: #0abcfc;
        }
        p{
            font-size: 20px;
        }
        `
    }
    render() {
        return html`
        <header class="container">
            <h1> <strong class="title">RICK AND MORTY</strong> API</h1>
            <p class="title">Elaborado con LitElement 
                Juan José Gonzalez Cardenas
            </p>
        </header>
        `
    }

}
customElements.define('api-template', ApiTemplate);