<template>
  <footer>
    <div class="text">Copyright © Cloud Town Exquisite Craft 2023</div>
    <div class="dash">-</div>
    <div class="link">
      <a href="https://discord.com/invite/ctec">discord</a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  height: 50px;
  font-size: 12pt;
  color: #ecf0f1;
  background-color: #000;
  justify-content: center;
  align-items: center;

  .text {
    user-select: none;
  }

  .dash {
    margin: 0 15px;
    user-select: none;
  }

  .link {
    user-select: none;

    a {
      color: #fff;
      text-decoration: none;
    }
  }
}
</style>
