import styles from "@/module/ItemList.module.css"

function ItemList({ data }) {
  return (
    <div className={styles.container}>
      {data.length ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>هیچ موردی وجود ندارد</p>
      )}
    </div>
  );
}

export default ItemList;
