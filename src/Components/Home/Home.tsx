import { HomeContainer, Product } from '@/Components/Home/styles'
import Image from 'next/image'
import camiseta1 from '../../assets/1.png'
import camiseta2 from '../../assets/2.png'
import camiseta3 from '../../assets/3.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta1} alt="camiseta 1" width={520} height={480} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79.99</span>
        </footer>
      </Product>
      <Product>
        <Image src={camiseta2} alt="camiseta 1" width={520} height={480} />

        <footer>
          <strong>Camiseta y</strong>
          <span>R$ 79.99</span>
        </footer>
      </Product>
      <Product>
        <Image src={camiseta3} alt="camiseta 1" width={520} height={480} />

        <footer>
          <strong>Camiseta y</strong>
          <span>R$ 79.99</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
