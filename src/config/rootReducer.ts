import { combineReducers } from "@reduxjs/toolkit";
import produtosSlice from "./modules/produtos.slice";
import paginacaoSlice from "./modules/paginacao.slice";
import carrinhoSlice from "./modules/carrinho.slice";

export const rootReducer = combineReducers({
    produtos: produtosSlice,
    paginacao: paginacaoSlice,
    carrinho: carrinhoSlice,
});
