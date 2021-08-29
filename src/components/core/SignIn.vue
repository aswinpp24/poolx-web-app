<template>
  <v-dialog v-model="dialog" max-width="800px">
    <template v-slot:activator="{ on }">
      <v-btn
        v-on="on"
        outlined
        color="primary"
        class="mt-6 me-4 text-capitalize"
        >Sign In</v-btn
      >
    </template>
    <v-card class="pa-3">
      <v-row>
        <v-spacer></v-spacer>

        <v-icon color="black" class="me-2 mt-1" @click="close"
          >mdi-close</v-icon
        >
      </v-row>
      <v-row class="mt-n6">
        <v-col cols="6">
          <v-img :src="require('@/assets/welcome.png')" contain height="500" />
        </v-col>
        <v-col cols="6">
          <v-row class="text-end text-body-1 mt-5 me-5" justify="end">
            New User?
            <Register @click="close" />
          </v-row>
          <v-row class="text-h5 mt-14">
            Welcome Back!
          </v-row>
          <v-row class="text-body-2 grey--text">
            Login to continue
          </v-row>
          <v-form class="mt-16">
            <v-row>
              <v-col cols="10" class="pa-0">
                <v-text-field
                  outlined
                  label="Phone Number"
                  prepend-inner-icon="mdi-account"
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="10" class="pa-0">
                <v-text-field
                  label="Password"
                  prepend-inner-icon="mdi-lock"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="mt-6">
              <v-btn
                depressed
                color="primary"
                class="white--text px-12 py-6"
                rounded
              >
                Login
              </v-btn>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>
<script>
import Register from "./Register.vue";
export default {
  components: { Register },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    close() {
      this.dialog = false;
    },
  },
};
</script>
