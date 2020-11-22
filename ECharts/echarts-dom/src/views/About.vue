<template>
  <div class="about">
    about
    <Bar :optionData="optionData"></Bar>
    <Lines></Lines>
  </div>
</template>

<script>
export default {
  name: 'about',
  component: {},
  data() {
    return {
      optionData: [
        {
          name: '衬衫',
          money: 1,
        },
        {
          name: '羊毛衫',
          money: 2,
        },
        {
          name: '雪纺衫',
          money: 3,
        },
        {
          name: '裤子',
          money: 4,
        },
        {
          name: '高跟鞋',
          money: 5,
        },
      ],
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>

<style scoped>

</style>
