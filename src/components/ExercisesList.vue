<template>
  <div>
    <div
      class="exercise"
      :class="{ stripe: i % 2 === 0 }"
      v-for="(exercise, i) in exercises"
      :key="exercise.id"
    >
      {{ exercise.name }}
    </div>
  </div>
</template>

<script>
import ExerciseService from '@/services/ExerciseService';

export default {
  data() {
    return {
      exercises: [],
    };
  },
  async created() {
    const exerciseService = new ExerciseService();
    this.exercises = await exerciseService.getAll();
  },
};
</script>

<style scoped>
.exercise {
  display: flex;
  border-bottom: 1px solid #add8e6;
  width: 100%;
  padding: 15px;
  font-weight: 600;
  cursor: pointer;
}

.exercise:hover {
  background-color: rgba(1, 141, 255, 0.1);
}

.stripe {
  background-color: #f5f5f5;
}
</style>
