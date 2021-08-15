<template>
  <v-container fluid class="ma-0 pa-0">
    <v-container
      fluid
      class="ma-0 pa-0 cover mt-3 pp"
      :style="`background-image: url(${require('@/assets/cover.png')})`"
    >
      <v-row justify="center">
        <label class="primary--text text-h3 font-weight-bold mt-16"
          ><span class="black--text">Office Commute</span> Made Easier</label
        >
      </v-row>
      <v-row justify="center">
        <label class="black--text text-h5 font-weight-bold mt-16"
          >Your one stop solution to office commute problems.
        </label>
      </v-row>
      <v-row justify="center">
        <label class="black--text text-h5 font-weight-bold mt-2"
          >Join PoolX, be the part of change.</label
        >
      </v-row>
    </v-container>
    <v-container class="mb-10">
      <v-row>
        <v-col cols="7">
          <v-img
            :src="require('@/assets/desc-poolx.png')"
            contain
            height="400"
            class="ms-n16 mt-16"
          />
        </v-col>
        <v-col cols="5">
          <v-row class="primary--text text-h4 mt-12 font-weight-bold">
            What is PoolX?
          </v-row>
          <v-row class="text-h6 black--text mt-8">
            We all like going together. PoolX is a subscription based vehicle
            pooling platform. PoolX mainly focuses on daily commuters travelling
            from and to the same location. The user can register and book
            recurring commutation like bidirectional office travel. The user can
            subscribe to a monthly based or weekly based plan, and he will be
            allocated with suitable vehicle type based on the number of
            passengers travelling in the same route. PoolX automates end to end
            process of commuting and makes safe, comfortable and affordable for
            the urban commuters.
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container
      class="ma-0 pa-0 primary pt-16 pb-16 mb-16"
      fluid
      style=" border-radius: 50% 50% 100% 9% / 12% 12% 20% 10%;
        box-shadow: 0px 4px 4px rgba(55, 198, 225, 0.19);"
    >
      <v-row class="white--text text-h3 mb-8" justify="center">
        Key Features
      </v-row>
      <v-row class="mb-16 mt-8">
        <v-col cols="4">
          <FeatureLeft class="ms-16 " />
        </v-col>
        <v-col cols="4">
          <v-img
            :src="require('@/assets/phone-poolx.png')"
            height="550"
            contain
            position="center"
          />
        </v-col>
        <v-col cols="4">
          <FeatureRight />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import FeatureLeft from "../components/home/FeatureLeft.vue";
import FeatureRight from "../components/home/FeatureRight.vue";

export default Vue.extend({
  name: "Home",
  components: {
    FeatureLeft,
    FeatureRight,
  },
});
</script>
<style>
.pp {
  height: 660px;
}
</style>
