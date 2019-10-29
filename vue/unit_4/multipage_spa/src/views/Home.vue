<template>
  <div class="home">
    <Message msg="Do you want to adopt a pet?"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Message from '@/components/Message.vue'

export default {
  name: 'home',
  components: {
    Message
  }
}
</script>
