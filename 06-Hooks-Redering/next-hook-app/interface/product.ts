export type Category = {
    category_id:number;
    category:string;
    sort:number;
}

export type Product={
    product_id:number;
    category_id:number;
    product_name:string;
    manufacture:string;
    price:number;
    stock:number;
    image:string;
}