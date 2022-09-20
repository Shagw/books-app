import React, { useState } from "react";

import { Form, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from "react-router-dom";

const Search = () => {
  const { booksData = [] } = useSelector((state) => state.dashBoardData); 
  const [searchBookItem,setSearchBookItem] = useState("");
  const [findBook,setFindBook] = useState(false);
  const navigate = useNavigate();
  const handleBookSelection = (e,item) => {
    e.preventDefault();
    navigate("/product?title="+item.title);
    setFindBook(false);
    setSearchBookItem("")
  }
  return (
    <Nav className="my-auto">
      <Form className={"searchbar fadeInWidth"}>
        <input
          className={"search-input fadeIn"}
          type="text"
          name=""
          onChange={(e)=>{
            setSearchBookItem(e.target.value);
            setFindBook(true);
          }}
          placeholder="Search..."
          value={searchBookItem}
        />
        {
          <ListGroup>
          {searchBookItem &&
            searchBookItem.length > 0 &&
            findBook &&
            booksData
              .filter(item1 =>
                item1.title
                  .toLowerCase()
                  .includes(
                    searchBookItem.toLowerCase()
                  )
              )
              .slice(0,10)
              .map(item => {
                return (
                  <ListGroup.Item
                    value={item.title}
                    className={"bookTitle"}
                    onClick={(e)=>handleBookSelection(e,item)}
                  >
                    {item.title.length>50? item.title.slice(0,50)+"...":item.title}
                  </ListGroup.Item>
                );
              })}
        </ListGroup>
        }
        <div className={"icon-bg fadeOut"}></div>
      </Form>
    </Nav>
  );
};

export default Search;
