<template>
  <div id="TheClasses" class="TheClasses">
    <div class="container">
      <div class="main_title">الفرق الدراسية</div>
      <div class="box shadow p-2.5 rounded">
        <div class="number flex justify-center gap-10 mb-5">
          <div class="feat relative">
            <span
              class="absolute h-1 w-10 -right-full top-1/2 bg-[--main-color]"
            ></span>
            <div
              class="bg-[--main-color] w-10 h-10 rounded-full p-2.5 flex justify-center items-center text-white text-xl"
            >
              1
            </div>
          </div>
          <div class="feat relative">
            <span
              class="absolute h-1 w-10 -right-full top-1/2 bg-[--main-color]"
            ></span>
            <div
              class="bg-[--main-color] w-10 h-10 rounded-full p-2.5 flex justify-center items-center text-white text-xl opacity-50"
            >
              2
            </div>
          </div>
          <div class="feat relative">
            <span
              class="absolute h-1 w-10 -right-full top-1/2 bg-[--main-color]"
            ></span>
            <span
              class="absolute h-1 w-10 -left-full top-1/2 bg-[--main-color]"
            ></span>
            <div
              class="bg-[--main-color] w-10 h-10 rounded-full p-2.5 flex justify-center items-center text-white text-xl opacity-50"
            >
              3
            </div>
          </div>
        </div>
        <div class="content">
          <div class="selecte_1 flex justify-center gap-2.5 flex-wrap mb-2.5">
            <span
              class="border-gray-300 border rounded flex justify-center items-center p-10 cursor-pointer hover_color_border w-5/12"
              >كلية الشريعة و القانون</span
            >
            <span
              class="border-gray-300 border rounded flex justify-center items-center p-10 cursor-pointer hover_color_border w-5/12"
              >معهد أعوان القضاء</span
            >
          </div>
          <div class="selecte_2 hidden flex justify-center gap-2.5 flex-wrap">
            <span
              class="border-gray-300 border rounded flex justify-center items-center p-10 cursor-pointer hover_color_border w-5/12"
              >عربي</span
            >
            <span
              class="border-gray-300 border rounded flex justify-center items-center p-10 cursor-pointer hover_color_border w-5/12"
              >English</span
            >
            <div class="button w-85 mb-2.5">
              <div
                class="border border-[--main-color] p-2.5 rounded cursor-pointer w-min text-[--main-color] mt-2.5 hover_color"
              >
                السابق
              </div>
            </div>
          </div>
          <div class="selecte_3 hidden flex justify-center gap-2.5 flex-wrap">
            <router-link
              to="/Main_Class"
              v-for="Class in classes"
              :key="Class"
              class="border-gray-300 border rounded flex justify-center items-center w-23 p-10 cursor-pointer hover_color_border"
            >
              {{ Class }}
            </router-link>
            <div class="button w-95 flex justify-between m-auto mb-2.5">
              <div
                class="border border-[--main-color] p-2.5 rounded cursor-pointer w-min text-[--main-color] mt-2.5 hover_color"
              >
                السابق
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheClasses",
  mounted() {
    this.select();
  },
  data() {
    return {
      type: "",
      lang: "",
      class: "",
      classes: [
        "الفرقة الأولي",
        "الفرقة الثانية",
        "الفرقة الثالثة",
        "الفرقة الرابعة",
      ],
    };
  },
  methods: {
    select() {
      let numbers = document.querySelectorAll(".number .feat > div");
      let content = document.querySelectorAll(".content > div");
      document.querySelectorAll(".selecte_1 span")[0].onclick = () => {
        this.type = document.querySelectorAll(".selecte_1 span")[0].innerHTML;
        numbers.forEach((e) => e.classList.add("opacity-50"));
        numbers[1].classList.remove("opacity-50");
        content.forEach((e) => e.classList.add("hidden"));
        content[1].classList.remove("hidden");
        document
          .querySelectorAll(".selecte_2 span")[1]
          .classList.remove("hidden");
        document.querySelectorAll(".selecte_3 a")[2].classList.remove("hidden");
        document.querySelectorAll(".selecte_3 a")[3].classList.remove("hidden");
      };
      document.querySelectorAll(".selecte_1 span")[1].onclick = () => {
        this.type = document.querySelectorAll(".selecte_1 span")[1].innerHTML;
        numbers.forEach((e) => e.classList.add("opacity-50"));
        numbers[1].classList.remove("opacity-50");
        content.forEach((e) => e.classList.add("hidden"));
        content[1].classList.remove("hidden");
        document.querySelectorAll(".selecte_2 span")[1].classList.add("hidden");
        document.querySelectorAll(".selecte_3 a")[2].classList.add("hidden");
        document.querySelectorAll(".selecte_3 a")[3].classList.add("hidden");
      };

      document.querySelectorAll(".selecte_2 span").forEach((e) => {
        e.onclick = () => {
          this.lang = e.innerHTML;
          numbers.forEach((e) => e.classList.add("opacity-50"));
          numbers[2].classList.remove("opacity-50");
          content.forEach((e) => e.classList.add("hidden"));
          content[2].classList.remove("hidden");
        };
        document.querySelector(".selecte_2 .button > div").onclick = () => {
          numbers.forEach((e) => e.classList.add("opacity-50"));
          numbers[0].classList.remove("opacity-50");
          content.forEach((e) => e.classList.add("hidden"));
          content[0].classList.remove("hidden");
        };
      });
      document.querySelectorAll(".selecte_3 a").forEach((e) => {
        e.onclick = () => {
          this.class = e.innerHTML;
          console.log(e.innerHTML);
          console.log(this.class);
          localStorage.setItem("updateType", this.type);
          localStorage.setItem("updateLang", this.lang);
          localStorage.setItem("updateClass", this.class);
          numbers.forEach((e) => e.classList.add("opacity-50"));
          numbers[0].classList.remove("opacity-50");
          content.forEach((e) => e.classList.add("hidden"));
          content[0].classList.remove("hidden");
        };
        document.querySelector(".selecte_3 .button > div").onclick = () => {
          numbers.forEach((e) => e.classList.add("opacity-50"));
          numbers[1].classList.remove("opacity-50");
          content.forEach((e) => e.classList.add("hidden"));
          content[1].classList.remove("hidden");
        };
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@media (min-width: 1200px) {
}

@media (min-width: 768px) and (max-width: 1199px) {
}

@media (max-width: 767px) {
  .content > div {
    flex-direction: column;
    & > span {
      width: 100%;
    }
  }
  .selecte_3 > a {
    width: 100%;
    & > span {
      flex-direction: column;
    }
  }
}
</style>
