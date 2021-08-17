<template>
  <div>
    <v-row class="mt-16" v-for="item in items" :key="item.title">
      <v-col class="mt-5" cols="2">
        <v-icon x-large color="black" class=" ms-5">{{ item.icon }}</v-icon>
      </v-col>
      <v-col cols="8" class="mt-5">
        <v-row justify="start" class=" black--text text-h6 font-weight-bold"
          ><label>{{ item.title }}</label></v-row
        >
        <v-row class="text-start white--text text-body-1 mt-4">{{
          item.content
        }}</v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Verified Drivers",
          content:
            "A background check is performed on the registered drivers from our team.",
          icon: "mdi-car",
        },
        {
          title: "Cost Effective",
          content: "Get a cost effective commute with our subscription plan.",
          icon: "mdi-cash-usd-outline",
        },
        {
          title: "Safe and Secure",
          content:
            "We have live tracking and many other features to make sure you have a safe experience",
          icon: "mdi-security",
        },
      ],
    };
  },
};
</script>
