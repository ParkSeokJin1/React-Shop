import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ItemType } from "../types/ItemType";
import { useRecoilState } from "recoil";
import { cartListState } from "../recoil_state";
import { StyledMiniNav } from "../components/MiniNav.styled";
import { Link } from "react-router-dom";
import getListName, { getListPath } from "../utils/getListName";
import Button from "../components/Button.Style";
import { StyledItem } from "./Product.style";

const fetchItem = async (itemId: number) => {
  try {
    const item = await axios.get<ItemType>(
      `https://fakestoreapi.com/products/${itemId}`
    );
    return item.data;
  } catch (error) {
    console.error(error);
  }
};

function Product() {
  const [item, setItem] = useState<ItemType>({} as ItemType);
  const { id: itemIdParam } = useParams();
  const itemId = Number(itemIdParam);
  const [cartList, setCartList] = useRecoilState(cartListState);

  useEffect(() => {
    fetchItem(itemId).then((res) => setItem(res ?? ({} as ItemType)));
  }, [itemId]);

  const handleAddClick = () => {
    if (itemId === null || itemId === undefined) {
      return;
    }

    if (cartList[itemId]) {
      const itemNum = cartList[itemId].number;
      setCartList({
        ...cartList,
        [itemId]: { ...cartList[itemId], number: itemNum + 1 },
      });
    } else {
      setCartList({
        ...cartList,
        [itemId]: {
          id: item.id,
          title: item.title,
          image: item.image,
          price: item.price,
          number: 1,
        },
      });
    }
  };

  return (
    <StyledItem>
      <StyledMiniNav>
        <Link to="/">홈</Link>
        <span>{" > "}</span>
        <Link to={getListPath(item.category)}>
          {getListName(item.category)}
        </Link>
      </StyledMiniNav>
      <div className="item-container">
        <div className="img">
          <img src={item.image} />
        </div>
        <div className="info">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <span className="price">$ {item.price}</span>
          <div className="button-container">
            <Button onClick={handleAddClick}>장바구니에 담기</Button>
            <Link to={"/cart"}>
              <Button className="reversal">장바구니로 이동</Button>
            </Link>
          </div>
        </div>
      </div>
    </StyledItem>
  );
}

export default Product;
