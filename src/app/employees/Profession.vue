<template>
  <div class="profession">
    <div class="profession__title">{{profession.name}}</div>
    <ul class="people">
      <li v-for="(item, index) in profession.employees">
        <noindex>
          <a rel="nofollow" v-bind:href="'#' + item.name" v-smooth-scroll>{{item.name}}</a>
        </noindex>
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
