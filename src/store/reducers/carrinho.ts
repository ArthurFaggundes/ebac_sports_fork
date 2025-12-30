import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Produto {
  id: number
  [key: string]: any
}

interface CarrinhoState {
  itens: Produto[]
}

const carrinhoSlice = createSlice({
  name: 'Carrinho',
  initialState: { itens: [] } as CarrinhoState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((p) => p.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicionarAoCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
