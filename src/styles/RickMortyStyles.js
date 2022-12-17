import { css } from 'lit';
export default css`
:host {
        width: 100%;
        box-sizing: border-box;
        display: block;
        
      }
      .container{
        text-align: center;

      }
      get-data{
        display: none;
      }
      .card{
        background-color: #fff;
        border-radius: 2px;
        display: inline-block;
        height: 300px;
        width: 200px;
        margin: 1rem;
        position: relative;
        text-align: center;
        box-shadow: 1px 1px 5px rgba(0,0,0,0.9);
        transition: all 0.1s cubic-bezier(0.25, .8, .25, .1);
        
      }
      .card:hover{
          box-shadow: 1px 1px 20px gray;
        }
      .card img{
        width: 70%;
      }
      .card h2{
        font-size: 15px;
      }
`;