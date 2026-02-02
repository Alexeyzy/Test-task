import toast from "react-hot-toast";
import styles from "./BookingForm.module.css";

export default function BookingForm() {
  const submit = e => {
    e.preventDefault();
    toast.success("Camper booked successfully 🚐");
    e.target.reset();
  };

  return (
    <form onSubmit={submit} className={styles.form}>
      <h3>Book your campervan now</h3>
      <input placeholder="Name" required />
      <input placeholder="Email" required />
      <input type="date" required />
      <textarea placeholder="Comment" />
      <button>Send</button>
    </form>
  );
}