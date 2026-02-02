import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "../../redux/filters/filtersSlice";
import { fetchCampers } from "../../redux/campers/campersOps";
import { selectFilters } from "../../redux/filters/selectors";
import styles from "./Filters.module.css";

export default function Filters() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const handleSearch = () => {
    dispatch(fetchCampers(filters));
  };

  return (
    <aside className={styles.filters}>
      <p className={styles.label}>Location</p>
      <input
        className={styles.input}
        placeholder="Kyiv, Ukraine"
        value={filters.location}
        onChange={e => dispatch(setLocation(e.target.value))}
      />

<p className={styles.title}>Filters</p>

{/* Vehicle equipment */}
<div className={styles.block}>
  <p className={styles.subtitle}>Vehicle equipment</p>
  <div className={styles.grid}>
    <label className={styles.card}>
      <input type="checkbox" />
      <img src="/public/icons/ac.svg" alt="AC" />
      <span>AC</span>
    </label>

    <label className={styles.card}>
      <input type="checkbox" />
      <img src="/public/icons/automatic.svg" alt="Automatic" />
      <span>Automatic</span>
    </label>

    <label className={styles.card}>
      <input type="checkbox" />
      <img src="/public/icons/kitchen.svg" alt="Kitchen" />
      <span>Kitchen</span>
    </label>

    <label className={styles.card}>
      <input type="checkbox" />
      <img src="/public/icons/tv.svg" alt="TV" />
      <span>TV</span>
    </label>

    <label className={styles.card}>
      <input type="checkbox" />
      <img src="/public/icons/bathroom.svg" alt="Bathroom" />
      <span>Bathroom</span>
    </label>
  </div>
</div>

{/* Vehicle type */}
<div className={styles.block}>
  <p className={styles.subtitle}>Vehicle type</p>
  <div className={styles.grid}>
    <label className={styles.card}>
      <input type="radio" name="type" defaultChecked/>
      <img src="/public/icons/van.svg" alt="Van" />
      <span>Van</span>
    </label>

    <label className={styles.card}>
      <input type="radio" name="type"/>
      <img src="/public/icons/full.svg" alt="Fully Integrated" />
      <span  className={styles.fully}>Fully <br />Integrated</span>
    </label>

    <label className={styles.card}>
      <input type="radio" name="type" />
      <img src="/public/icons/alcove.svg" alt="Alcove" />
      <span>Alcove</span>
    </label>
  </div>
</div>

      <button className={styles.search} onClick={handleSearch}>
        Search
      </button>
    </aside>
  );
}