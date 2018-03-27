<template>
</template>
<script>
export default {
  created() {
        localStorage.removeItem('jwtToken')
        localStorage.removeItem('user_id')        
       window.location.href = '/login'
  }
}
</script>
