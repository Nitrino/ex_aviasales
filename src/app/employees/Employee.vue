<template>
    <div v-bind:id="employee.name" v-bind:class="[employee.is_hired ? 'hired' : '', 'employee']">
      <div class="employee__photo">
          <img v-bind:src="employee.photo" v-bind:alt="employee.name">
      </div>
      <div class="employee__text">
        <div class="employee__text__name" rel="nofollow">
            {{employee.name}}
        </div>
        <div class="employee__text__position" rel="nofollow">
            {{employee.job_title}}
        </div>
        <div class="employee__text__feature" rel="nofollow">
            {{employee.description}}
        </div>
        <div class="employee__text__links">
          <template v-for="(value, key, index) in employee.contacts">
            <a rel="nofollow" target="_blank" v-bind:href="value">{{key}}</a>
            <span class="employee__text__links -dot">•</span>
         </template>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Employee',
  props: ['employee']
};
</script>
