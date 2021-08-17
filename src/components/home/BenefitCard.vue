<template>
  <v-row class=" mt-16 mb-16">
    <v-col cols="4" v-for="item in items" :key="item.title" class="px-4">
      <v-card class="pt-10 pb-10" color="grey lighten-4" elevation="0">
        <v-img :src="item.image[0]" height="150" contain position="center" />
        <v-row justify="center" class="text-h5 mt-2 mb-2 font-weight-bold">
          {{ item.title }}
        </v-row>
        <v-row justify="center" class="text-body-1 px-10 text-center">
          {{ item.content }}
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: "User",
          image: [require("@/assets/user.png")],
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus nostrum quos quod, deleniti facilis veniam animi quam vero aliquid similique, omnis officiis culpa cupiditate, atque dolor possimus. Voluptas, dolor quam?",
        },
        {
          title: "Driver",
          image: [require("@/assets/driver.png")],
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus nostrum quos quod, deleniti facilis veniam animi quam vero aliquid similique, omnis officiis culpa cupiditate, atque dolor possimus. Voluptas, dolor quam?",
        },
        {
          title: "Organization",
          image: [require("@/assets/company.png")],
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus nostrum quos quod, deleniti facilis veniam animi quam vero aliquid similique, omnis officiis culpa cupiditate, atque dolor possimus. Voluptas, dolor quam?",
        },
      ],
    };
  },
};
</script>
