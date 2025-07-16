import { useOutletContext } from 'react-router'
import styles from './styles/Shop.module.css'
import Card from './Card.jsx'
import { useState } from 'react';
export default function Shop() {
  const [counter,setCounter]= useOutletContext();

  return (
    <>
      <h1>SHop</h1>
      <div className={styles.item_list}>
        <Card imgId={0} counter={counter} setCounter={setCounter} defaultCount={0} buttonOption={true} />
        <Card imgId={1} counter={counter} setCounter={setCounter} defaultCount={0} buttonOption={true} />
        <Card imgId={2} counter={counter} setCounter={setCounter} defaultCount={0} buttonOption={true} />
        <Card imgId={3} counter={counter} setCounter={setCounter} defaultCount={0} buttonOption={true} />
        <Card imgId={4} counter={counter} setCounter={setCounter} defaultCount={0} buttonOption={true} />
        <Card imgId={5} counter={counter} setCounter={setCounter} defaultCount={0} buttonOption={true} />
        <Card imgId={6} counter={counter} setCounter={setCounter} defaultCount={0} buttonOption={true} />
        <Card imgId={7} counter={counter} setCounter={setCounter} defaultCount={0} buttonOption={true} />
        <Card imgId={8} counter={counter} setCounter={setCounter} defaultCount={0} buttonOption={true} />
      </div>
    </>

  )
}
