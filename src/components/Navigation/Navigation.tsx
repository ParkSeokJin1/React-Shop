import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import cartImg from "../../assets/cart.svg";
import sunImg from "../../assets/sun.svg";
import moonImg from "../../assets/moon.svg";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { itemState } from "../../recoil_state";

import { cartListNumState, themeState } from "../../recoil_state";
import {
  BlankBlock,
  HeaderRight,
  HeaderWrapper,
  Nav,
} from "./Navigation.style";

function Navigation() {
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useRecoilState(themeState);
  const cartNumber = useRecoilValue(cartListNumState);
  const searchRef = useRef<HTMLInputElement>(null);
  const productList = useRecoilValue(itemState);

  const handleChangeSearch = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setSearch(value);
  };

  const handleThemeClick = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const filterProduct = (search: string) => {
    return productList.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  };

  const handleInputClear = () => {
    if (searchRef.current) {
      searchRef.current.value = "";
    }
    setSearch("");
  };

  return (
    <>
      <HeaderWrapper>
        <div className="header-container">
          <h1>
            <Link to={"/"}>React Shop</Link>
          </h1>
          <Nav>
            <NavLink to={"fashion"}>패션</NavLink>
            <NavLink to={"accessory"}>악세서리</NavLink>
            <NavLink to={"digital"}>디지털</NavLink>
          </Nav>

          <HeaderRight>
            <button
              className="theme-button"
              aria-hidden={"true"}
              onClick={handleThemeClick}
            >
              <img
                src={sunImg}
                alt="라이트 모드"
                className={theme === "light" ? "selected" : ""}
              />
              <img
                src={moonImg}
                alt="다크 모드"
                className={theme === "dark" ? "selected" : ""}
              />
            </button>
            <Search>
              <input
                type={"search"}
                placeholder="검색"
                id="search-bar"
                value={search}
                onChange={handleChangeSearch}
                ref={searchRef}
              />
              <SearchUl>
                {search &&
                  filterProduct(search).map((product) => (
                    <LinkLi
                      to={`product/${product.id}`}
                      key={product.id}
                      onClick={handleInputClear}
                    >
                      <LinkText>{product.title}</LinkText>
                    </LinkLi>
                  ))}
              </SearchUl>
            </Search>
            <Link className="cart-button" to={"cart"}>
              <img src={cartImg} alt="장바구니" />
              <span className="cart-number">{cartNumber}</span>
            </Link>
          </HeaderRight>
        </div>
      </HeaderWrapper>
      <BlankBlock />
    </>
  );
}

const Search = styled.div`
  position: relative;
`;

const SearchUl = styled.ul`
  width: 16rem;
  max-height: 26rem;
  overflow: scroll;
  overflow-x: hidden;
  list-style: none;
  padding: 0px;
  margin: 0px;
  position: absolute;
  top: 56px;
  left: 65px;

  display: flex;
  flex-direction: column;
  // box-shadow: 0px 0px 1px 1px whitesmoke;
  border-radius: 0px 0px 10px 10px;
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: #fff;
    border-radius: 10px;
  }
`;

const LinkLi = styled(Link)`
  display: block;
  padding: 12px 16px;
  border-radius: 6px;
  &:hover {
    transition: background-color 0.5s;
  }

  &:focus {
    outline: none;

    transition: background-color 0.5s;
  }
`;

const LinkText = styled.span`
  display: block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default Navigation;
