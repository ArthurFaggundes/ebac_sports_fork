import Produto from '../components/Produto'
import { Produto as ProdutoType } from '../types/produto'
import * as S from './styles'
import { useGetProdutosQuery } from '../services/request/requestSlice'

const ProdutosComponent = () => {
  const { data: produtos, isLoading, error } = useGetProdutosQuery()

  if (isLoading) return <p>Carregando...</p>
  if (error) return <p>Erro ao carregar produtos.</p>
  return (
    <>
      <S.Produtos>
        {produtos?.map((produto: ProdutoType) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
