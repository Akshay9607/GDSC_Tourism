import React from "react";
import { Card, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import "../index.css";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { addToFiltered, addTours, getFiltered, getTours } from "../../Redux/slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Filter = () => {
  const [name, setName] = useState("");

  const { t, i18n } = useTranslation();
  const tours = useSelector(getTours);
  const dispatch = useDispatch();
  // const dispatch = useDispatch();

  // let [filteredTours , setFilteredTours] = useState(tours);
  // console.log("Tours filter :",tours);

  let filteredTours = [];

  // console.log("Name",name);

  tours.forEach((tour) => {
    let isPresent =
      tour.englishData.destination.toLowerCase().includes(name.toLowerCase()) ||
      tour.englishData.description.toLowerCase().includes(name.toLowerCase()) ||
      tour.englishData.title.toLowerCase().includes(name.toLowerCase()) ||
      tour.englishData.city.toLowerCase().includes(name.toLowerCase()) ||
      tour.englishData.country.toLowerCase().includes(name.toLowerCase());

    console.log("ispressent", isPresent);
    if (isPresent) {
      filteredTours.push(tour);
    }
  });

  

 


  console.log("filtered:", filteredTours);

  const filteredFromRedux = useSelector(getFiltered);
  console.log("from redux : ",filteredFromRedux);

  // var filterOption = "" ;
  var getQuery = (key) => {
    name = key.target.value;
    console.log(name);
  };

  const searchHandler = (e) => {
    setName(e.target.value);
    if(name===""){
        dispatch(addToFiltered(tours))
    }else{
        dispatch(addToFiltered(filteredTours));
    }
  }

  useEffect(()=>{
    dispatch(addToFiltered(tours))
  },[]);


  // const showFilteredTours = () => {
  //     // dispatch(addTours(filteredTours));
  // }

  return (
    <>
      {/* <form  style={{margin:"1rem 1rem 4rem 1rem", boxShadow: " rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px", padding:"1rem", borderRadius:"1rem"}}> */}
      <div
        style={{
          marginBottom: "2rem",
          display: "flex",
          border: "1px solid black",
          width: "100%",
          height: "2.9rem",
          borderRadius: "2rem ",
        }}
      >
        <input
          type="search"
          style={{
            padding: ".95rem .5rem .5rem .5rem",
            border: "none",
            borderRadius: "2rem 0 0 2rem",
            width: "95%",
          }}
          id="query"
          name="q"
          placeholder={t("sfdh")}
          aria-label="Search through site content"
        //   onChange={(e) => setName(e.target.value)}
        onChange={searchHandler}
          value={name}
        />
        <span
          style={{
            padding: ".5rem",
            borderRadius: "0 2rem 2rem 0",
            border: "none",
          }}
        >
          <Link to={`/tours/${name}`}>
            <FaSearch type="submit" />{" "}
          </Link>
          {/* <FaSearch type='submit' onClick={showFilteredTours} />  */}
        </span>
      </div>
    </>
  );
};

export default Filter;
