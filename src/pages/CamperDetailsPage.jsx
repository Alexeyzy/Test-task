import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchCamperById } from "../redux/campers/campersOps";
import { selectCurrentCamper } from "../redux/campers/campersSelectors";
import BookingForm from "../components/BookingForm/BookingForm";

export default function CamperDetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const camper = useSelector(selectCurrentCamper);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  if (!camper) return <p>Loading...</p>;

  return (
    <section>
      <h1>{camper.name}</h1>
      <BookingForm />
    </section>
  );
}