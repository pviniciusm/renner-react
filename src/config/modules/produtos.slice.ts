import { createSlice } from "@reduxjs/toolkit";
import { Produto } from "../../models/produto.model";

const initialState: Produto[] = [
    {
        id: 1,
        nome: "Tenis da Nike",
        valor: 299.9,
        imgUrl: "https://cdn.awsli.com.br/800x800/1203/1203218/produto/234672821/whatsapp-image-2023-09-23-at-14-17-18-bihqg9gpqa.jpeg",
    },
    {
        id: 2,
        nome: "Camiseta",
        valor: 39.99,
        imgUrl: "https://nerdstore.com.br/wp-content/uploads/2022/10/635a56445a110074be9c7993a811e806.jpg",
    },
    {
        id: 3,
        nome: "Tenis da Nike 2",
        valor: 299.9,
        imgUrl: "https://cdn.awsli.com.br/800x800/1203/1203218/produto/234672821/whatsapp-image-2023-09-23-at-14-17-18-bihqg9gpqa.jpeg",
    },
    {
        id: 4,
        nome: "Tenis da Nike 3",
        valor: 299.9,
        imgUrl: "https://cdn.awsli.com.br/800x800/1203/1203218/produto/234672821/whatsapp-image-2023-09-23-at-14-17-18-bihqg9gpqa.jpeg",
    },
    {
        id: 5,
        nome: "Tenis da Nike 4",
        valor: 299.9,
        imgUrl: "https://cdn.awsli.com.br/800x800/1203/1203218/produto/234672821/whatsapp-image-2023-09-23-at-14-17-18-bihqg9gpqa.jpeg",
    },
    {
        id: 6,
        nome: "Camiseta 2",
        valor: 39.99,
        imgUrl: "https://nerdstore.com.br/wp-content/uploads/2022/10/635a56445a110074be9c7993a811e806.jpg",
    },
];

const produtosSlice = createSlice({
    name: "produtos",
    initialState,
    reducers: {},
});

export default produtosSlice.reducer;
