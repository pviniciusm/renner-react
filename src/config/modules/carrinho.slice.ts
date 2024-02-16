import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Carrinho } from "../../models/carrinho.model";
import { Produto } from "../../models/produto.model";

const carrinhoSlice = createSlice({
    name: "carrinho",
    initialState: [] as Carrinho,
    reducers: {
        adicionarProduto: (state, action: PayloadAction<Produto>) => {
            return [
                ...state,
                {
                    produto: action.payload,
                    quantidade: 1,
                },
            ];
        },
    },
});

export default carrinhoSlice.reducer;

export const { adicionarProduto } = carrinhoSlice.actions;
