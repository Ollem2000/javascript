class CardSample extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({
            mode: "open" //Define se essa classe haverá ou não modificação externa
        });        
        
        build();
        
    }
}

customElements.define("card-sample", CardSample);