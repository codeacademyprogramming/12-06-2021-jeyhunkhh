class ProductItem {
    constructor({product,onClick}){
        this.product = product;
        this.onClick = onClick;
    }

    handleClick = ()=>{
        this.onClick(this.product);
    }

    render = () => {
        return `<div onclick=${this.handleClick}></div>`;
    }
}