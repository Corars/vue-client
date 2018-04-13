<template>
    <v-alert :type="color" value="true">
      {{ message }}
    </v-alert>
</template>

<script>
export default {
  props: {
    message: {
      type: [String, Number],
      required: true,
      validator: value => value.length > 0,
    },
    color: {
      type: String,
      required: true,
    },
  },
  methods: {
    tikla() {
      this.message = 'tikladilar';
    },
  },
};
</script>

