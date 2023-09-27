class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({
            mode: "open" //Define se essa classe haverá ou não modificação externa
        });
        shadow.innerHTML = "<h1>teste</h1>";
    }
}

customElements.define("card-news", CardNews);