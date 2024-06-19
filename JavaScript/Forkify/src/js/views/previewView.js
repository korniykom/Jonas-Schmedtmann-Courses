import View from "./View.js";
class PreviewView extends View {
  _parentElement = "";

  _generateMarkupPreview() {
    const id = window.location.hash.slice(1);
    return `
    <li class="preview">
                   <a class="preview__link ${
                     this._data.id === id ? "preview__link--active" : ""
                   }" href="#${this._data.id}">
                     <figure class="preview__fig">
                       <img src="${this._data.image}" alt="Test" />
                     </figure>
                     <div class="preview__data">
                       <h4class="preview__name">
                        ${this._data.title}
                       </h4class=>
                       <p class="preview__publisher">${this._data.publisher}</p>
                     </div>
                   </a>
                 </li> `;
  }
}
export default new PreviewView();
