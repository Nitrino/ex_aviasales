<template>
  <div id="root">
    <header-component></header-component>
    <main>
      <title-component></title-component>
      <employees></employees>
      <footer-component></footer-component>
    </main>
  </div>
</template>

<script>
import Header from './Header.vue';
import Title from './Title.vue';
import Employees from './employees/Employees.vue';
import Footer from './Footer.vue';

export default {
  name: 'Main',
  components: {
    'header-component': Header,
    'title-component': Title,
    'employees': Employees,
    'footer-component': Footer
  }
};
</script>
