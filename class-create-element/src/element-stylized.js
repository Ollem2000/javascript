class CardStylized extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({
            mode: "open"
        });
        
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = "Felipe";

        const style = document.createElement("style");
        style.textContent = `
            h1{
                color: red;
            }
        `;
    }
}

customElement.define("card-stylized", CardStylized);