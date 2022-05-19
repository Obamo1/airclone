import { Button } from "@material-ui/core";
import React from "react";
import SearchResult from "./SearchResult";
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays · 26 august to 30 august · 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://a0.muscache.com/im/pictures/2a2c27cf-66c1-4c7e-97d9-638cef196801.jpg?im_w=1200"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.73}
        price="£30 / night"
        total="£117 total"
      />

      <SearchResult
        img="https://aio.stedlo.com/img/large/5880_340031-placering-kan-lejlighed-sovevarelse-samme.jpg"
        location="Private room in center of London"
        title="Independant luxury studio apartment"
        description="2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen"
        star={4.3}
        price="£40 / night"
        total="£157 total"
      />

      <SearchResult
        img="https://www.galliardhomes.com/sites/default/files/images/videos/2022-03/zzhYE3eZdiK.jpg"
        location="Private room in center of London"
        title="London Studio Apartments"
        description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
        star={3.8}
        price="£35 / night"
        total="£207 total"
      />
      <SearchResult
        img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
        location="Private room in center of London"
        title="30 mins to Oxford Street, Excel London"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.1}
        price="£55 / night"
        total="£320 total"
      />
      <SearchResult
        img="https://media.architecturaldigest.com/photos/5eac5fa22105f13b72dede45/master/pass/111LexowAve_Aug18-1074.jpg"
        location="Private room in center of London"
        title="Spacious Peaceful Modern Bedroom"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning"
        star={5.0}
        price="£60 / night"
        total="£450 total"
      />
      <SearchResult
        img="https://www.thebusinessdesk.com/_files/images/jun_21/Bluerooms-Studios-Trinity-11-e1623846821437.jpeg"
        location="Private room in center of London"
        title="The Blue Room In London"
        description="2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine"
        star={4.23}
        price="£65 / night"
        total="£480 total"
      />
      <SearchResult
        img="https://images.nigeriapropertycentre.com/properties/images/1146254/061982a2185ce3-richies-5-star-luxury-apartment-terraced-duplexes-short-let-osapa-lekki-lagos.jpg"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={3.85}
        price="£90 / night"
        total="£650 total"
      />
    </div>
  );
}

export default SearchPage;
