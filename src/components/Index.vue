<template>
  <div>
    <!-- Navigation Bar -->
    <nav>
      <div class="logo">
        <div class="hanbuger" @click="mobileNav"><i class="fas fa-bars"></i></div>
          <img src="../assets/Logo-assets/Logo.png"><span>Proximity Rentals</span>
      </div>
      <ul :class="{ mobile: is}">
        <li>Login</li>
        <li>Signup</li>

        <li class="drop-down-parent" @click="tog"><span>EN</span> <i class="fa fa-angle-down"></i>
          <ul class="drop-down-list" :class="{ drop: filter }">
            <li class="link">French</li>
            <li class="link">English</li>
          </ul>
        </li>

      </ul>
    </nav>

    <!-- Main -->
    <main>
      <section>
        <div class="search">
          <img src="../assets/Logo-assets/Proxi_02.png" alt="Proximity Rental" title="Proximity Rental">
          <p>The world largest rental app</p>
          <div class="search-bar">
            <span @click="togForSearch"><i class="fa fa-angle-down"></i></span>
            <input type="search" placeholder="Enter your search term here"> <span><button>Search</button></span>
          </div>
          <div class="categories">
            <ul :class="{drop: categories }" >
              <li>Recent Lease</li>
              <li>Sheos</li>
              <li>Houses</li>
              <li>Fashion</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer>
          <div class="sponsor">
            <Slider></Slider>
          </div>
          <div class="copy-right">
            <span>{{date}} &copy; PROMITY RENTALS INC</span>
            <span>Privacy & Terms</span>
          </div>
      </footer>
    </main>
  </div>
</template>

<script>
import Slider from './Slider'

export default {
  components: {
    Slider,
  },
  data() {
    return {
      filter: false,
      height: 0,
      is: false,
      categories: false,
      date: null
    }
  },
  methods: {
    tog() {
      if(this.filter){
        this.filter = false
      }else {
        this.filter = true
      }
    },
    togForSearch() {
      if(this.categories) {
        this.categories = false
      } else {
        this.categories = true
      }
    },
    mobileNav() {
      if(this.is){
        this.is = false
      }else {
        this.is = true
      }
    }
  },
  mounted() {
      this.date = new Date().getFullYear()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  $base-color: #744e64;
  $white-color: #ffffff;
  $black-color: #000000;

  // Navigation Bar
  nav
    display: grid;
    grid-template-columns: 1fr auto minmax(75%,1fr) 1fr;
    align-items: center;
    justify-content: center;
    background: $base-color;
    text-align: center;
    min-height: 70px;

    .hanbuger
      display: none;

    .logo
      grid-column: 2/3;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $white-color;
      img
        height: 55px;
      *
        cursor: pointer;
      span
        margin-left: 5px;

    ul
      list-style-type: none;
      display: flex;
      justify-content: flex-end;
      grid-column: 3/4;

      li
        padding: 3px 10px;
        margin-left: 5px;
        flex-basis: 50px;
        color: $white-color;
        cursor: pointer;
        &:hover
          color: darken( $white-color, 10% );
  .drop-down-parent
    position: relative;
    .fa
        margin-left: 7px;

    .drop-down-list.drop
      height: (35px * 2);
    .drop-down-list
      padding: 0 2px;
      position: absolute;
      right: 0;
      display: block;
      top: 47px;
      width: 90px;
      height: 0px;
      transition: all ease-in-out 0.3s;
      background: $base-color;
      overflow: hidden;

      li.link
        text-align: left;
        cursor: pointer;
        margin: unset;
        margin: 4px 0px;

  section
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    margin: 0 auto;
    text-align: center;
    margin-top: 100px;
    .search
      grid-column: 2/3;
      div
        border: 1px solid #929292;
      .categories
        border: none;
      img
        height: 100px;
      p
        font-size: 20px;
        letter-spacing: 5px; 
        color: $base-color;
      input[type="search"]
        padding: 5px 5px 5px 30px;
        width: 470px;
        font-size: 19px;
        border: none;
        &:focus
          outline: none;
      button
        padding: 7.1px 18px;
        font-size: 19px;
        cursor: pointer;
        background: $base-color;
        border: none;
        color: $white-color;
        &:focus
          outline: none;
      div
        position: relative;
        .fa
          color: $base-color;
          padding: 5px 6px;
          cursor: pointer;
          position: absolute;
          left: 5px;
          top: 50%;
          transform: translateY(-50%);
        ul.drop
          height: 149px;
          position: absolute;
          z-index: 99;
          width: 100%;
          border-left: 1px solid darken($white-color, 40%);
          border-right: 1px solid darken($white-color, 40%);
          border-bottom: 1px solid darken($white-color, 40%);
          border-bottom-right-radius: 10px;

        ul
          transition: all ease-in-out 0.3s;
          list-style-type: none;
          min-width: 150px;
          height: 0px;
          overflow: hidden;
          text-align: left;
          top: 0;
          transition: all ease-in-out 0.3s;
          li
            background: darken($white-color, 5%);   
            padding: 6px 10px;
            cursor: pointer;
            border-bottom: 1px solid darken($white-color, 10%);
            &:hover
              background: lighten($base-color,0%);
              color: $white-color;
              transition: all ease-in-out 0.1s;
  footer
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    .copy-right
      background: whitesmoke;
      padding: 15px 5px;
      text-align: center;
    span
      margin-right: 50px;
      &:first-child
        color: grey;
      &:last-child
        cursor: pointer;

  // Navigation Bar
  @media screen and (max-width: 1065px)
    section
      grid-template-columns: 20% 60% 20%;
      .search 
        img
          height: 70px;
        p
          font-size: 18px;
          letter-spacing: 3px;
        input[type="search"]
          width: 80%;
          font-size: 16px;
        button
          width: 20%;
          font-size: 16px;
        div ul.drop
          height: 137px;
        div ul li
          padding: 3px 10px;
          font-size: 18px;
  @media screen and (max-width: 715px)
    nav
      all: unset;
      display: block;
      background: $base-color;
      .logo
        display: grid;
        grid-template-columns: auto 1fr;
        justify-items: end;
        padding: 10px;
        span
          display: none;
      .hanbuger
        display: block;
        font-size: 30px;
      ul.mobile
        height: 94px;
        overflow: unset;
      ul
        all: unset;
        display: block;
        height: 0px;
        width: 100%;
        overflow: hidden;
        transition: all 0.1s ease-in-out;
        position: absolute;
        background: $base-color;
        li
          margin-left: unset;
        .drop-down-list.drop
          top: 24px;
    section
      grid-template-columns: 15% 70% 15%;

  @media screen and (max-width: 420px)
    section
      grid-template-columns: 5% 90% 5%;
      .search
        img
          height: 40px;
        p
          font-size: 16px;
          letter-spacing: 1px;
        input[type="search"]
          font-size: 15px;
        button
          padding: 7px 0px;
        div ul.drop
          height: 121px;
        div ul li
          font-size: 15px;
    footer
      .copy-right
        font-size: 12px;
        span
          margin-right: 10px;
          &:first-child
            color: grey;
          &:last-child
            cursor: pointer;

</style>
