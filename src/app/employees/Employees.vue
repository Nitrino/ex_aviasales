<template>
  <div class="techs-container">
    <div class="professions">
      <profession v-for="profession in professions" :profession="profession" :key="profession.name"></profession>
    </div>
    <div class="employees">
      <template v-for="profession in professions">
        <employee v-for="employee in profession.employees" :employee="employee" :key="profession.name"></employee>
     </template>
    </div>
  </div>
</template>

<script>

import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);
import employee from './Employee.vue';
import profession from './Profession.vue';

function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
}

export default {
  name: 'Employees',
  data() {
    return {
      professions: []
    };
  },
  created() {
    return this.$http
      .get('app/employees/employees.json')
      .then(response => response.json())
      .then(response => {
        this.professions = response.map(profession => {
          profession.employees = shuffle(profession.employees);
          return profession;
        });
      });
  },
  components: {profession, employee}


};
</script>
