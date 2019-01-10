<template>
  <div>
    <!-- Navigation Bar -->
    <nav>
      <div class="logo">
          <img src="../assets/Logo-assets/Logo.png"><span>Proximity Rentals</span>
      </div>
      <ul>
        <li>Login</li>
        <li>Signup</li>

        <li class="drop-down-parent" @click="tog"><span>EN</span> <i class="fa fa-angle-down"></i>
          <ul class="drop-down-list" :class="{ drop: filter == 'drop' }">
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
            <ul :class="{drop: categories == 'drop'}">
              <li>Sheos</li>
              <li>Dress</li>
              <li>Cars</li>
              <li>Laptops</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filter: '',
      categories: null
    }
  },
  methods: {
    tog() {
      if(this.filter == 'drop'){
        this.filter = ''
      }else {
        this.filter = 'drop'
      }
    },
    togForSearch() {
      if(this.categories == 'drop'){
        this.categories = ''
      }else {
        this.categories = 'drop'
      }
    }
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
      height: 70px;
    .drop-down-list
      padding: 0 2px;
      position: absolute;
      left: 0;
      top: 50px;
      width: 120px;
      height: 0px;
      display: block;
      transition: all ease-in-out 0.3s;
      background: $base-color;
      overflow: hidden;
      li
      text-align: left;
  section
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    margin: 0 auto;
    text-align: center;
    margin-top: 100px;
    .search
      grid-column: 2/3;
      img
        height: 100px;
      p
        font-size: 20px;
        letter-spacing: 5px; 
        color: $base-color;
      input[type="search"]
        padding: 5px 5px 5px 30px;
        width: 350px;
        font-size: 19px;
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
          height: 169px;
          transition: all ease-in-out 0.3s;
          border-left: 1px solid darken($white-color, 40%);
          border-right: 1px solid darken($white-color, 40%);
          border-bottom: 1px solid darken($white-color, 40%);
          border-bottom-right-radius: 10px;

        ul
          list-style-type: none;
          min-width: 150px;
          height: 0px;
          overflow: hidden;
          text-align: left;
          position: absolute;
          top: 0;
          transition: all ease-in-out 0.3s;
          li
            background: darken($white-color, 5%); 
            margin: 7px 0px;     
            padding: 4px 10px;
            cursor: pointer;
            border-bottom: 1px solid darken($white-color, 10%);
            &:hover
              background: lighten($base-color,0%);
              color: $white-color;
              transition: all ease-in-out 0.1s;
</style>

