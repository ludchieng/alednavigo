<div class="app-header">
  <div class="left">
    <slot name="left" />
  </div>
  <div class="center">
    <slot name="center" />
  </div>
  <div class="right">
    <slot name="right" />
  </div>
</div>

<style>
  .app-header {
    padding: 0.625rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .app-header .left,
  .app-header .right {
    flex: 1;
  }
  
  .app-header .right {
    display: flex;
    justify-content: end;
  }
</style>
