class CardBuild extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({
            mode: "open" //Define se essa classe haverá ou não modificação externa
        });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    };
        
    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

            const cardLeft = document.createElement("div");
            cardLeft.setAttribute("class", "card__left");
            componentRoot.appendChild(cardLeft);

                const author = document.createElement("span");
                    author.textContent = "By "+(this.getAttribute("author")||"Anonymous");
                cardLeft.appendChild(author);

                const linkTitle = document.createElement("a");
                    linkTitle.textContent = this.getAttribute("title");
                    linkTitle.href = this.getAttribute("url")
                cardLeft.appendChild(linkTitle);

                const newsContent = document.createElement("p");
                    newsContent.textContent = this.getAttribute("content");
                cardLeft.appendChild(newsContent);

            const cardRight = document.createElement("div");
            cardRight.setAttribute("class", "card__right");
            componentRoot.appendChild(cardRight);

                const newsImage = document.createElement("img");
                    newsImage.src = this.getAttribute("img")||"https://cdn-icons-png.flaticon.com/512/5137/5137462.png";
                    newsImage.alt = "Banner";
                cardRight.appendChild(newsImage);

        return componentRoot;
    };
    
    styles(){
        const style = document.createElement("style");
        style.textContent = `
        .card{
            border-radius: 16px;
            width: 224px;
            box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
            -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
            display: flex;
            flex-direction: column;
        }
        .card__left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 16px;
        }
            .card__left > span{
                font-weight: 400;
            }
            .card__left > a{
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
            }
            .card__left > p{
                color: rgb(70, 70, 70);
                height: 36px;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
        .card__right > img{
            border-radius: 16px;
            box-sizing: border-box;
            object-fit: cover;
            height: 160px;
            width: 100%;
            padding: 8px 8px 6px 8px;
            margin: -16px 0 0 0;
        }
        `
        return style
    };
}

customElements.define("card-build", CardBuild);