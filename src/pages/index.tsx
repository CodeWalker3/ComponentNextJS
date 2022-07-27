import type { NextPage } from 'next'
import Lista from '../components/Lista'
import Item from '../components/Item'

const Home: NextPage = () => {
  return (
    <>
    <Lista>
      <Item> Bolo</Item>
      <Item>Tijolo</Item>
      <Item>Maçã</Item>
    </Lista>
    </>
  )
}
export default Home