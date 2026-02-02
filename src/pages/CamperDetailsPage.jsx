import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../redux/campers/campersOps";
import { selectFilteredCampers } from "../redux/campers/campersSelectors";
import BookingForm from "../components/BookingForm/BookingForm";

export default function CamperDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectFilteredCampers);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  if (!camper) return null;

  return (
    <>
      <h2>{camper.name}</h2>
      <BookingForm />
    </>
  );
}