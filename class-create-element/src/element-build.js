class CardBuild extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({
            mode: "open" //Define se essa classe haverá ou não modificação externa
        });
        
        build(){
            const componentRoot = createElement("div");
            componentRoot.setAttribute("class", "card");

                const cardLeft = document.createElement("div");
                cardLeft.setAttribute("class", "card__left");

                    const author = document.createElement("span");
                    const linkTitle = document.createElement("a");
                    const newsContent = document.createElement("p");
                    cardLeft.appendChild(author);
                    cardLeft.appendChild(linkTitle);
                    cardLeft.appendChild(newsContent);

                const cardRight = document.createElement("div");
                cardRight.setAttribute("class", "card__right");

                    const newsImage = document.createElement("img");
                    cardRight.appendChild(newsImage);

            componentRoot.appendChild(cardLeft);
            componentRoot.appendChild(cardRight);

            return componentRoot;
        };
        
        style(){

        };
    }
}

customElements.define("card-build", CardBuild);