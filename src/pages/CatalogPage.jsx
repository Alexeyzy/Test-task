// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchCampers } from "../redux/campers/campersOps";
// import { selectCampers } from "../redux/campers/selectors";
// import { selectFilters } from "../redux/filters/selectors";
// import CamperCard from "../components/CamperCard/CamperCard";
// import Filters from "../components/Filters/Filters";

// export default function CatalogPage() {
//   const dispatch = useDispatch();
//   const campers = useSelector(selectCampers);
//   const filters = useSelector(selectFilters);

//   useEffect(() => {
//     dispatch(fetchCampers(filters));
//   }, [dispatch, filters]);

//   return (
//     <div style={{ display: "flex", gap: 24 }}>
//       <Filters />
//       <div>
//         {campers.map(c => (
//           <CamperCard key={c.id} camper={c} />
//         ))}
//       </div>
//     </div>
//   );
// }

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filters from "../components/Filters/Filters";
import CamperCard from "../components/CamperCard/CamperCard";
import { fetchCampers } from "../redux/campers/campersOps";
import { selectFilteredCampers } from "../redux/campers/campersSelectors";
import styles from "./CatalogPage.module.css";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const campers = useSelector(selectFilteredCampers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <section className={styles.page}>
      <Filters />

      <div className={styles.results}>
        {campers.length === 0 ? (
          <p>No campers found</p>
        ) : (
          campers.map(camper => (
            <CamperCard key={camper.id} camper={camper} />
          ))
        )}
      </div>
    </section>
  );
}