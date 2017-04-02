<template>
  <div id="root">
    <header-component></header-component>
    <main>
      <title-component></title-component>
      <employees></employees>
    </main>
    <footer-component></footer-component>
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
