<template>
  <div>
    <v-row class="mt-16" v-for="item in items" :key="item.title">
      <v-col class="mt-5" cols="2">
        <v-icon x-large color="black" class=" ms-5">{{ item.icon }}</v-icon>
      </v-col>
      <v-col cols="8" class="mt-5">
        <v-row justify="start" class=" black--text text-body-1 font-weight-bold"
          ><label>{{ item.title }}</label></v-row
        >
        <v-row class="text-start white--text text-body-1">{{
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
          title: "Live Tracking & Chat",
          content: "Track your driver in real time and chat or call drivers.",
          icon: "mdi-map-marker-radius",
        },
        {
          title: "Live Tracking & Chat",
          content: "Track your driver in real time and chat or call drivers.",
          icon: "mdi-map-marker-radius",
        },
        {
          title: "Live Tracking & Chat",
          content: "Track your driver in real time and chat or call drivers.",
          icon: "mdi-map-marker-radius",
        },
      ],
    };
  },
};
</script>
