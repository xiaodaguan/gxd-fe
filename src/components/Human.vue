<template>
  <div>
    <hr />
    <h1>this is a human</h1>
    <br />
    <slot name="head"><p>这里是头的位置</p></slot>
    <br />
    <slot name="body"><p>这里是身体的位置</p></slot>
    <br />
    <slot name="foot"><p>这里是脚的位置</p></slot>
    <hr />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
