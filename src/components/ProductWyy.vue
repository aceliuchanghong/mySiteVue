<template>
  <div>
    <h3>产品列表:{{ $route.params.id }}</h3>
    <h3>产品列表第二种:{{ id }}</h3>
  </div>
</template>

<script>
export default {
  name: 'ProductX',
  props: ["id"]
}
</script>
