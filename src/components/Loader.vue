<template>
  <div class="loader">
    <!-- <ball-beat-loader color="#000000" size="20px"></ball-beat-loader> -->
   <!--  <ball-scale-ripple-multiple-loader color="green" size="80px" duration="5"></ball-scale-ripple-multiple-loader> -->
    <ball-spin-fade-loader color="green" size="20px"></ball-spin-fade-loader>
  </div>
</template>

<script>

import Vue from 'vue';
import 'vue-loaders/dist/vue-loaders.css';
import { BallBeatLoader } from 'vue-loaders';
import { BallScaleRippleMultipleLoader } from 'vue-loaders';
import { BallSpinFadeLoader } from 'vue-loaders';


  export default {
    name: "Loader",
    components: {
      BallBeatLoader,
      BallScaleRippleMultipleLoader,
      BallSpinFadeLoader
    }
    }
</script>

<style>
.loader{
  text-align: center;
  color: green;
  margin-top: 10em;
}
 
</style>