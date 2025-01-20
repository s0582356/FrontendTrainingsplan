<template>
  <div class="custom-item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="custom-details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.custom-item {
  display: flex;
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.custom-details {
  flex: 1;
  margin-left: 1rem;
}

.custom-item i {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3498db;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  font-size: 1.5rem;
}

.custom-item h3 {
  font-size: 1.2rem;
  color: #333;
  font-weight: bold;
}

.custom-item p {
  color: #666;
  font-size: 1rem;
  line-height: 1.5;
}

.custom-item a {
  color: #3498db;
  text-decoration: none;
}

.custom-item a:hover {
  text-decoration: underline;
}

@media (min-width: 1024px) {
  .custom-item {
    margin-top: 1rem;
    padding: 1.5rem;
  }

  .custom-item i {
    width: 50px;
    height: 50px;
    font-size: 2rem;
  }
}
</style>
