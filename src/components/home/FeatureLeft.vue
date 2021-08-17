<template>
  <div>
    <v-row class="mt-16" v-for="item in items" :key="item.title">
      <v-col cols="9" class="mt-5">
        <v-row justify="end" class=" black--text text-h6 font-weight-bold"
          ><label>{{ item.title }}</label></v-row
        >
        <v-row class="text-right white--text text-body-1 mt-4">{{
          item.content
        }}</v-row>
      </v-col>
      <v-col class="mt-5" cols="2">
        <v-icon x-large color="black" class="text-end ms-5">{{
          item.icon
        }}</v-icon>
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
          title: "Live Tracking & Chat",
          content: "Track your driver in real time and chat or call driver.",
          icon: "mdi-map-marker-radius",
        },
        {
          title: "Cashless Payment",
          content: "Pay at one click through UPI apps from your mobile.",
          icon: "mdi-credit-card-check-outline",
        },
        {
          title: "Great Support",
          content:
            "Our support team is active all day to address to your queries and concerns",
          icon: "mdi-message-outline",
        },
      ],
    };
  },
};
</script>
