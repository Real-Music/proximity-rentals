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
  </div>
</template>

<script>
export default {
  data() {
    return {
      filter: ''
    }
  },
  methods: {
    tog() {
      if(this.filter == 'drop'){
        this.filter = ''
      }else {
        this.filter = 'drop'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  $base-color: #744e64;
  $white-color: #ffffff;
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
          

</style>

