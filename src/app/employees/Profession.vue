<template>
  <div class="profession">
    <div class="profession__title">{{profession.name}}</div>
    <ul class="people">
      <li v-for="(item, index) in profession.employees">
        <a rel="nofollow" v-bind:href="'#' + item.name" v-bind:class="[item.is_hired ? 'hired' : '', '']" v-smooth-scroll>{{item.name}}</a>
        <img src="images/hired-badge-list.svg" v-bind:class="[item.is_hired ? 'hired' : '', 'people__hired_badge']">
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
