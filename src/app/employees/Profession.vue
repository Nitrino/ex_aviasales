<template>
  <div class="profession">
    <div class="profession__title">{{profession.name}}</div>
    <ul class="people">
      <li v-for="(item, index) in profession.employees">
        <a href="">{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Profession',
  props: ['profession']
};
</script>
