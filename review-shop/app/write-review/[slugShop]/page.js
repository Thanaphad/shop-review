// import { useParams } from "next/navigation";
import Review from "@/components/reviewShop/review";
import Input from "@/components/Input/Input";
import Form from "next/form";
import shops from "@/shops.json";
import styles from "./slugshop.module.css";
import { writeReview } from "../../actions/actions";
import Image from "next/image";

export default async function SlugShopPage({ params }) {
  const { slugShop } = await params;
  const selectedShop = shops.find((shop) =>
    String(shop.id) === String(slugShop),);
  return (
    <main className={styles.mainContainer}>
      <div className={styles.shopDeatail}>
        <div className={styles.card}>
          <Image
            src={selectedShop.image}
            alt={selectedShop.name}
            width={100}
            height={100} />
          <h3>{selectedShop.name}</h3>
        </div>
        <div className={styles.reviews}>
          {selectedShop.customers.map((customer) => (
            <Review key={customer.customerID} customer={customer} />
          ))}
        </div>
      </div>

      <div className={styles.writeReview}>
        <h2>Write a Review</h2>
        <Form action={writeReview}>
          <Input inputName="username" />
          <Input inputName="review" />
          <label>rating</label>
          <select id="rating" name="rating">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input name="shopID" id="shopID" type="hidden" value={slugShop} />
          <button type="reset">Reset</button>
          <button type="submit">Submit</button>
        </Form>
      </div>
    </main>
  )

}
// export default function SlugShopPage() {

// }
