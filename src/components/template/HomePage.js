import { categories, cities, services } from "@/constants/strings";
import CategoryCard from "@/module/CategoryCard";
import styles from "@/template/HomePage.module.css";
import { FiCircle } from "react-icons/fi";
function HomePage() {

  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.desc}>
          <h1>سامانه خرید و فروش ملک</h1>
          <ul>
            {services.map((i) => (
              <li key={i}>
                <FiCircle />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.categories}>
        {Object.keys(categories).map(i => <CategoryCard key={i}title={categories[i]} name={i} />)}
      </div>
      <div className={styles.city}>
        <h3>شهرهای پر بازدید</h3>
        <ul>
          {cities.map((i) => (
            <li key={i}>
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
