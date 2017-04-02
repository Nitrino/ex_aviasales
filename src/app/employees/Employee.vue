<template>
    <div v-bind:id="employee.name" class="employee">
      <div class="employee__photo">
        <noindex>
          <img v-bind:src="employee.photo" v-bind:alt="employee.name">
        </noindex>
      </div>
      <div class="employee__text">
        <div class="employee__text__name" rel="nofollow">
          <noindex>
            {{employee.name}}
          </noindex>
        </div>
        <div class="employee__text__position" rel="nofollow">
          <noindex>
            {{employee.job_title}}
          </noindex>
        </div>
        <div class="employee__text__feature" rel="nofollow">
          <noindex>
            {{employee.description}}
          </noindex>
        </div>
        <div class="employee__text__links">
          <noindex v-for="(value, key, index) in employee.contacts">
            <a rel="nofollow" target="_blank" v-bind:href="value">{{key}}</a>
            <span class="employee__text__links -dot">•</span>
         </noindex>
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
