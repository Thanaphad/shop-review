import Form from "next/form"
import Input from "@/components/Input/Input"
import {addShop} from "../actions/actions"

export default function AddShopPage(){
    return(
         <main className="addshop-form">
        <h1>Add the shop</h1>
        <Form action={addShop}>
            <Input inputName="shopName" topic="shop name" />
            <Input inputName="description" />
            {/* <Input inputName="image" type="file" /> */}

            <button type="reset">Reset</button>
            <button type="submit">Add Shop</button>
            
        </Form>
        </main>
       
    )
}