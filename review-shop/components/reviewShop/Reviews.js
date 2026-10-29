import Review from "./review";
import styles from "./review.module.css";
export default function Reviews ({ customers,onToggle }) {
  return (
    <>
      <div className={styles.reviews}>
        {customers.map((customer) => (
          <Review key={customer.customerID} customer={customer} />

        ))}
      </div>
      <div className={styles.overlay} onClick={onToggle}></div>
    </>
  );
}
