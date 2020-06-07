<template>
  <div>
    <h1>Exercises</h1>
    <card class="exercises">
      <individual-exercises-list />
    </card>
  </div>
</template>

<script>
import Card from '@/components/ui/Card';
import ExercisesList from '@/components/ExercisesList';

export default {
  components: { Card, ExercisesList },
  props: {
    searchValue: String
  },
  computed:{
    filteredItems() {
      return this.data.filter(item => {
        return item.name.toLowerCase().includes(this.searchValue.toLowerCase())
      });
    }        
  },
}
    
</script>

<style scoped>
.exercises {
  width: 100%;
}
</style>
