<template>
  <div id="TheGallary" class="TheGallary">
    <div class="container">
      <div class="main_title">معرض الصور</div>
      <div class="buttons">
        <div class="active">الكل</div>
        <div>تكريم</div>
        <div>في الأكاديمية</div>
      </div>
      <div class="box flex justify-between gap-2.5 flex-wrap">
        <img
          class=""
          src="../assets/370163562_754495903355628_2280858242050324458_n.jpg"
          alt=""
        />
        <img
          class=""
          src="../assets/370163562_754495903355628_2280858242050324458_n.jpg"
          alt=""
        />
        <img
          class=""
          src="../assets/370163562_754495903355628_2280858242050324458_n.jpg"
          alt=""
        />
        <img
          class=""
          src="../assets/370163562_754495903355628_2280858242050324458_n.jpg"
          alt=""
        />
        <img
          class=""
          src="../assets/370163562_754495903355628_2280858242050324458_n.jpg"
          alt=""
        />
        <img
          class=""
          src="../assets/370163562_754495903355628_2280858242050324458_n.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheGallary",
  data() {
    return {
      imges: 4,
    };
  },
};
</script>
<style lang="scss" scoped>
.buttons {
  display: flex;
  gap: 10px;
  text-align: center;
  justify-content: center;
  margin: -40px auto 40px;
  div {
    border: 1px solid var(--main-color);
    cursor: pointer;
    color: var(--main-color);
    width: 90px;
    height: 40px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    &.active {
      background: var(--main-color);
      color: #fff;
    }
  }
}
@media (min-width: 1200px) {
  .box {
    & > div {
      // width: 24%;
    }
  }
}
img {
  width: 30%;
  border-radius: 6px;
}
@media (min-width: 768px) and (max-width: 1199px) {
  .box {
    & > div {
      width: 24%;
    }
  }
}

@media (max-width: 767px) {
  .box {
    flex-wrap: wrap;
    & > div {
      width: 48%;
    }
  }
}
</style>
