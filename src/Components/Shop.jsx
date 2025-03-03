
import styles from './styles/Shop.module.css'
import Card from './Card.jsx'
export default function Shop() {

  return (
    <>
      <h1>SHop</h1>
      <div className={styles.item_list}>
        <Card imgId={0} />
        <Card imgId={1} />
        <Card imgId={2} />
        <Card imgId={3} />
        <Card imgId={4} />
        <Card imgId={5} />
        <Card imgId={6} />
        <Card imgId={7} />
        <Card imgId={8} />
      </div>
    </>

  )
}
