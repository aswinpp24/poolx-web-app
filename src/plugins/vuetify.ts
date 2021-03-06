import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      dark: {
        primary: "#00B496",
        secondary: "#FFE500",
        cover: "#E8F9FF",
        footer: "#3A3A3B",
      },
      light: {
        primary: "#00B496",
        secondary: "#FFE500",
        cover: "#E8F9FF",
        footer: "#3A3A3B",
      },
    },
  },
});
