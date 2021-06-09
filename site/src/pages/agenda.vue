<template>
  <q-page padding>
    <!-- content -->
 <div style="max-width: 800px; width: 100%;">
    <q-calendar
      v-model="selectedDate"
      view="month"
      locale="en-us"
    />
  </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      selectedDate: ''
    }
  }
}
</script>
