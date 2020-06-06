<template>
  <div>
    <h1>Exercises</h1>
    <card class="exercises">
      <exercises-list />
    </card>
  </div>
</template>

<script>
import Card from '@/components/ui/Card';
import ExercisesList from '@/components/ExercisesList';

export default {
  components: { Card, ExercisesList },
};
</script>

<style scoped>
.exercises {
  width: 100%;
}
</style>
