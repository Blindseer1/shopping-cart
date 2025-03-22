import { useOutletContext } from 'react-router'
import styles from './styles/Shop.module.css'
import Card from './Card.jsx'
export default function Shop() {
  const setCounter = useOutletContext();
  return (
    <>
      <h1>SHop</h1>
      <div className={styles.item_list}>
        <Card imgId={0} setCounter={setCounter} defaultCount={1} buttonOption={true} />
        <Card imgId={1} setCounter={setCounter} defaultCount={1} buttonOption={true} />
        <Card imgId={2} setCounter={setCounter} defaultCount={1} buttonOption={true} />
        <Card imgId={3} setCounter={setCounter} defaultCount={1} buttonOption={true} />
        <Card imgId={4} setCounter={setCounter} defaultCount={1} buttonOption={true} />
        <Card imgId={5} setCounter={setCounter} defaultCount={1} buttonOption={true} />
        <Card imgId={6} setCounter={setCounter} defaultCount={1} buttonOption={true} />
        <Card imgId={7} setCounter={setCounter} defaultCount={1} buttonOption={true} />
        <Card imgId={8} setCounter={setCounter} defaultCount={1} buttonOption={true} />
      </div>
    </>

  )
}
