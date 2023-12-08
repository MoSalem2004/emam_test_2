<template>
  <div class="main_Overlay" @click="close_2" style="z-index: 101"></div>
  <div
    class="container bg-white fixed z-10 rounded p-2.5 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 max-h-90 overflow-auto"
    style="z-index: 101"
  >
    <section>
      <div class="header flex justify-between items-center">
        <h3>حساب جديد</h3>
        <font-awesome-icon :icon="['fas', 'xmark']" @click="close_2" />
      </div>

      <form action="POST">
        <div>يرجي كتابة الإسم باللغة العربية</div>
        <div class="small_container">
          <div class="flex justify-between flex-wrap TheName">
            <div class="w-32">
              <div class="input-group mb-3">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="name"
                    v-model="user.Name_1"
                  />

                  <label for="Name_1"
                    ><font-awesome-icon :icon="['fas', 'user-edit']" /> الإسم
                    الأول</label
                  >
                </div>
              </div>
            </div>
            <div class="w-32">
              <div class="input-group mb-3">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="name"
                    v-model="user.Name_2"
                  />

                  <label for="Name_2"
                    ><font-awesome-icon :icon="['fas', 'user-edit']" /> الإسم
                    الثاني</label
                  >
                </div>
              </div>
            </div>
            <div class="w-32">
              <div class="input-group mb-3">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="name"
                    v-model="user.Name_3"
                  />

                  <label for="Name_3"
                    ><font-awesome-icon :icon="['fas', 'user-edit']" /> الإسم
                    الثالث</label
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-between">
            <div class="w-48">
              <div class="input-group mb-3">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="phone"
                    placeholder="Phone Number"
                    v-model="user.phone"
                  />

                  <label for="phone"
                    ><font-awesome-icon :icon="['fas', 'phone']" /> رقم
                    الهاتف</label
                  >
                </div>
              </div>
            </div>
            <div class="w-48">
              <div class="input-group mb-3">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="parents_phone"
                    placeholder="Parent's Phone Number"
                    v-model="user.parents_phone"
                  />

                  <label for="parents_phone"
                    ><font-awesome-icon :icon="['fas', 'phone']" /> رقم هاتف ولي
                    الأمر</label
                  >
                  <div
                    class="absolute -translate-x-1/2 -translate-y-1/2 left-10 top-1/2 select"
                  >
                    اختياري
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="input-group mb-3">
              <div class="form-floating">
                <input
                  type="email"
                  class="form-control"
                  id="Email"
                  placeholder="Email"
                  v-model="user.email"
                />

                <label for="Email"
                  ><font-awesome-icon :icon="['fas', 'at']" /> الإيميل</label
                >
              </div>
            </div>
          </div>
          <div class="form-floating long mb-3">
            <select
              class="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
              @change="handleSelectChange($event)"
            >
              <option
                v-for="(option, index) in options"
                :key="index"
                :value="option"
                @click="classActiveOption"
              >
                {{ option }}
              </option>
            </select>
            <label for="floatingSelect">حدد مكان كليتك / معهدك</label>
          </div>
          <div class="border p-2.5 mb-3">
            <h5>اختر فرقتك الدراسية</h5>
            <div class="box register p-2.5 rounded">
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
                <div
                  class="selecte_1 flex justify-center gap-2.5 flex-wrap mb-2.5"
                >
                  <span
                    class="border-gray-300 border rounded flex justify-center items-center p-10 cursor-pointer hover_color_border w-5/12"
                    >كلية الشريعة و القانون</span
                  >
                  <span
                    class="border-gray-300 border rounded flex justify-center items-center p-10 cursor-pointer hover_color_border w-5/12"
                    >معهد أعوان القضاء</span
                  >
                </div>
                <div
                  class="selecte_2 hidden flex justify-center gap-2.5 flex-wrap"
                >
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
                <div
                  class="selecte_3 hidden flex justify-center gap-2.5 flex-wrap"
                >
                  <div
                    v-for="Class in classes"
                    :key="Class"
                    class="border-gray-300 border rounded flex justify-center items-center w-23 p-10 cursor-pointer hover_color_border"
                  >
                    {{ Class }}
                  </div>
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
            <div
              class="bg-[#eee] p-2.5 flex items-center justify-between"
              v-if="value"
            >
              <span>
                لقد اخترت : {{ this.type }} / {{ this.lang }} / {{ this.class }}
              </span>
              <font-awesome-icon :icon="['fas', 'circle-check']" />
            </div>
          </div>

          <div class="input-group mb-3">
            <div class="form-floating">
              <input
                :type="showPassword_1 ? 'text' : 'password'"
                class="form-control"
                placeholder="كلمة السر"
                v-model="user.password_1"
              />
              <label for="Password_1"
                ><font-awesome-icon :icon="['fas', 'lock']" /> كلمة السر
              </label>
              <div
                class="Show_Password absolute -translate-x-1/2 -translate-y-1/2 left-5 top-1/2"
                @click="showPassword_1 = !showPassword_1"
              >
                <font-awesome-icon
                  :icon="showPassword_1 ? ['fas', 'eye-slash'] : ['fas', 'eye']"
                />
              </div>
            </div>
          </div>
          <div class="input-group mb-3">
            <div class="form-floating">
              <input
                :type="showPassword_2 ? 'text' : 'password'"
                class="form-control"
                placeholder="كلمة السر"
                v-model="user.password_2"
              />
              <label for="Password_2"
                ><font-awesome-icon :icon="['fas', 'lock']" /> تأكيد كلمة السر
              </label>
              <div
                class="Show_Password absolute -translate-x-1/2 -translate-y-1/2 left-5 top-1/2"
                @click="showPassword_2 = !showPassword_2"
              >
                <font-awesome-icon
                  :icon="showPassword_2 ? ['fas', 'eye-slash'] : ['fas', 'eye']"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="error text-[red] text-center">
          {{ this.ErrorMsg }}
        </div>
        <div class="Register_Login">
          <div>
            <button
              @click.prevent="Register"
              class="p-2.5 bg-[--main-color] text-white rounded"
            >
              انشئ الحساب
            </button>
          </div>
        </div>
      </form>
    </section>
  </div>
  <div id="user"></div>
</template>
<script>
import {
  collection,
  addDoc,
  getFirestore,
  getDocs,
  where,
  query,
  updateDoc,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBOlDn6NmPGHHfdY-gYHvnA6MoM-y0Xbmo",
  authDomain: "elemam-center-for-training.firebaseapp.com",
  projectId: "elemam-center-for-training",
  storageBucket: "elemam-center-for-training.appspot.com",
  messagingSenderId: "253703295162",
  appId: "1:253703295162:web:927a97dbbc2276f30d7283",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
import bcrypt from "bcryptjs";
export default {
  name: "TheRegister",
  selectedValue: "",
  emits: ["close_2"],
  mounted() {
    this.select();
  },
  data() {
    return {
      user: {
        Name_1: "",
        Name_2: "",
        Name_3: "",
        email: "",
        phone: "",
        parents_phone: "",
        password_1: "",
        password_2: "",
      },
      ErrorMsg: "",
      errorEmailMsg: "",
      errorEmailMsg_stat: null,
      options: [
        "",
        "كلية الشريعة و القانون بالقاهرة - بنين",
        "كلية الشريعة و القانون بطنطا - بنين",
        "كلية الشريعة و القانون بتفهنا الأشراف - بنين",
        "كلية الشريعة و القانون بدمنهور - بنين",
        "كلية الشريعة و القانون بأسيوط - بنين",
        "كلية الشريعة و القانون بالقاهرة - بنات",
        "كلية الشريعة و القانون بالإسكندرية - بنات",
        "كلية الشريعة و القانون بدمنهور - بنات",
        "كلية الشريعة و القانون بالفيوم - بنات",
        "كلية الشريعة و القانون بالمنيا - بنات",
        "كلية الشريعة و القانون بالمنصورة - بنات",
        "كلية الشريعة و القانون بأسيوط - بنات",
        "معهد أعوان القضاء بالقاهرة - بنين",
        "معهد أعوان القضاء بطنطا - بنين",
        "معهد أعوان القضاء بتفهنا الأشراف - بنين",
        "معهد أعوان القضاء بدمنهور - بنين",
        "معهد أعوان القضاء بأسيوط - بنين",
        "معهد أعوان القضاء بالقاهرة - بنات",
      ],
      closeHelloUser: null,
      PhoneState: null,
      showPassword_1: false,
      showPassword_2: false,
      type: "",
      lang: "",
      class: "",
      classes: [
        "الفرقة الأولي",
        "الفرقة الثانية",
        "الفرقة الثالثة",
        "الفرقة الرابعة",
      ],
      value: false,
    };
  },
  computed: {
    UserAdmin() {
      return this.$store.state.UserAdmin;
    },
  },
  methods: {
    async State() {
      try {
        const q_Admin = query(
          collection(db, "المشرفين"),
          where("Id", "==", localStorage.getItem("userid"))
        );
        const querySnapshot_Admin = await getDocs(q_Admin);
        if (!querySnapshot_Admin.empty) {
          this.$store.commit("setUserAdmin", "Admin");
          console.log("Admin =>", this.UserAdmin);
        } else {
          this.$store.commit("setUserAdmin", "");
        }
      } catch (error) {
        console.log(error);
      }
      try {
        const q_User = query(
          collection(db, "الطلاب"),
          where("userid", "==", localStorage.getItem("userid"))
        );
        const querySnapshot_User = await getDocs(q_User);
        if (!querySnapshot_User.empty) {
          this.$store.commit("setUserAdmin", "User");
          console.log("Admin =>", this.UserAdmin);
        } else {
          this.$store.commit("setUserAdmin", "");
        }
      } catch (error) {
        console.log(error);
      }
    },
    select() {
      let numbers = document.querySelectorAll(".register .number .feat > div");
      let content = document.querySelectorAll(".register .content > div");
      document.querySelectorAll(".register .selecte_1 span")[0].onclick =
        () => {
          this.type = document.querySelectorAll(
            ".register .selecte_1 span"
          )[0].innerHTML;
          numbers.forEach((e) => e.classList.add("opacity-50"));
          numbers[1].classList.remove("opacity-50");
          content.forEach((e) => e.classList.add("hidden"));
          content[1].classList.remove("hidden");
          document
            .querySelectorAll(".register .selecte_2 span")[1]
            .classList.remove("hidden");
          document
            .querySelectorAll(".register .selecte_3 > div")[2]
            .classList.remove("hidden");
          document
            .querySelectorAll(".register .selecte_3 > div")[3]
            .classList.remove("hidden");
        };
      document.querySelectorAll(".register .selecte_1 span")[1].onclick =
        () => {
          this.type = document.querySelectorAll(
            ".register .selecte_1 span"
          )[1].innerHTML;
          numbers.forEach((e) => e.classList.add("opacity-50"));
          numbers[1].classList.remove("opacity-50");
          content.forEach((e) => e.classList.add("hidden"));
          content[1].classList.remove("hidden");
          document
            .querySelectorAll(".register .selecte_2 span")[1]
            .classList.add("hidden");
          document
            .querySelectorAll(".register .selecte_3> div")[2]
            .classList.add("hidden");
          document
            .querySelectorAll(".register .selecte_3> div")[3]
            .classList.add("hidden");
        };

      document.querySelectorAll(".register .selecte_2 span").forEach((e) => {
        e.onclick = () => {
          this.lang = e.innerHTML;
          numbers.forEach((e) => e.classList.add("opacity-50"));
          numbers[2].classList.remove("opacity-50");
          content.forEach((e) => e.classList.add("hidden"));
          content[2].classList.remove("hidden");
        };
        document.querySelector(".register .selecte_2 .button > div").onclick =
          () => {
            numbers.forEach((e) => e.classList.add("opacity-50"));
            numbers[0].classList.remove("opacity-50");
            content.forEach((e) => e.classList.add("hidden"));
            content[0].classList.remove("hidden");
          };
      });
      document.querySelectorAll(".register .selecte_3 > div").forEach((e) => {
        e.onclick = () => {
          this.class = e.innerHTML;
          localStorage.setItem("type", this.type);
          localStorage.setItem("Lang", this.lang);
          localStorage.setItem("Class", this.class);
          numbers.forEach((e) => e.classList.add("opacity-50"));
          numbers[0].classList.remove("opacity-50");
          content.forEach((e) => e.classList.add("hidden"));
          content[0].classList.remove("hidden");
          this.value = true;
        };
        document.querySelector(".register .selecte_3 .button > div").onclick =
          () => {
            numbers.forEach((e) => e.classList.add("opacity-50"));
            numbers[1].classList.remove("opacity-50");
            content.forEach((e) => e.classList.add("hidden"));
            content[1].classList.remove("hidden");
          };
      });
    },
    close_2() {
      this.$emit("close_2");
    },
    close() {
      this.closeHelloUser = !this.closeHelloUser;
    },
    handleSelectChange(event) {
      this.selectedValue = event.target.value;
    },
    async Register() {
      const arabicRegex = /[\u0600-\u06FF\s]+/;
      let en;
      let pass;
      let email;
      let phone;
      let Samephone;
      let AllData;
      let SameData;
      let SameData1;
      const q = query(
        collection(db, "الطلاب"),
        where("phone", "==", this.user.phone)
      );
      const q1 = query(
        collection(db, "الطلاب"),
        where("email", "==", this.user.email)
      );
      const querySnapshot = await getDocs(q);
      const querySnapshot1 = await getDocs(q1);
      if (!querySnapshot.empty) {
        SameData = false;
        this.ErrorMsg = "رقم الهاتف  مسجل بالفعل علي الموقع";
      } else {
        SameData = true;
      }
      if (!querySnapshot1.empty) {
        SameData1 = false;
        this.ErrorMsg = "الإيميل مسجل بالفعل علي الموقع";
      } else {
        SameData1 = true;
      }

      if (this.user.password_1 !== this.user.password_2) {
        pass = false;
        this.ErrorMsg = "يرجى التأكد من كتابة تأكيد كلمة السر بنجاح";
      } else {
        pass = true;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.user.email)) {
        email = false;
        this.ErrorMsg = "البريد الإلكتروني غير صالح";
      } else {
        email = true;
      }
      if (this.user.phone === this.user.parents_phone) {
        Samephone = false;
        this.ErrorMsg = "لا يجوز ان يتشابه رقم ولي الأمر مع رقم الطالب";
      } else {
        Samephone = true;
      }
      const egyptianPhoneNumberRegex = /^(10|11|12|15)[0-9]{8}$/;
      console.log(+`0${+this.user.phone}`);
      if (!egyptianPhoneNumberRegex.test(+`0${+this.user.phone}`)) {
        phone = false;
        this.ErrorMsg =
          "رقم الهاتف المدخل غير صحيح , ملحوظة :   يمكنك إدخال رقمك المصري فقط";
      } else {
        phone = true;
      }
      if (
        !arabicRegex.test(this.user.Name_1) ||
        !arabicRegex.test(this.user.Name_2) ||
        !arabicRegex.test(this.user.Name_3)
      ) {
        en = false;
        console.log("en");
        this.ErrorMsg = "يرجي كتابة الإسم باللغة العربية";
      } else {
        en = true;
      }
      console.log("this.value =>", this.value);
      if (
        this.user.Name_1 === "" ||
        this.user.Name_2 === "" ||
        this.user.Name_3 === "" ||
        this.user.email === "" ||
        this.user.phone === "" ||
        this.user.college_place === "" ||
        this.user.password_1 === "" ||
        this.user.password_2 === "" ||
        document.querySelector(".form-floating>.form-select").value === "" ||
        this.value === false
      ) {
        AllData = false;
        this.ErrorMsg = "يرجي إكمال كافة البينات";
      } else {
        AllData = true;
      }
      if (
        en === true &&
        pass === true &&
        email === true &&
        phone === true &&
        Samephone === true &&
        AllData === true &&
        SameData === true &&
        SameData1 === true
      ) {
        console.log("Done");
        this.ErrorMsg = "";
        const q = query(
          collection(db, "الطلاب"),
          where("phone", "==", 0 + +this.user.phone)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const user = doc.data().phone;
          console.log(user);
        });

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(this.user.password_1, salt);
        let pass = hashedPassword;
        // this.user.password = hashedPassword;
        const str = document.querySelector(".form-floating>.form-select").value;
        const wordsArray = str.split(" "); // تحويل السلسلة إلى مصفوفة من الكلمات
        const lastWord = wordsArray[wordsArray.length - 1]; // الحصول على آخر كلمة في المصفوفة
        const docRef = await addDoc(collection(db, "الطلاب"), {
          name_1: this.user.Name_1,
          name_2: this.user.Name_2,
          name_3: this.user.Name_3,
          email: this.user.email,
          phone: this.user.phone,
          parents_phone: this.user.parents_phone,
          college_place: document.querySelector(".form-floating>.form-select")
            .value,
          password: pass,
          resultes: [],
          pay: [],
          type: lastWord,
          Class: this.class,
          TypeOfClass: this.type,
          Lang: this.lang,
          userid: null,
          AllResults: 0,
        });
        await updateDoc(docRef, { userid: docRef.id });
        console.log("Document written with ID: ", docRef.id);
        setTimeout(() => {
          localStorage.setItem("username_1", this.user.Name_1);
          localStorage.setItem("username_2", this.user.Name_2);
          localStorage.setItem("username_3", this.user.Name_3);
          localStorage.setItem("userid", docRef.id);
          this.closeHelloUser = true;
        }, 100);

        this.$emit("close_2");
        setTimeout(() => {
          this.State();
        }, 100);
      }
    },
  },
};
</script>

<style lang="scss">
input {
  &.form-control {
    border-bottom: 1px solid #333 !important;
    border-radius: 0;
  }
}
.container_1 {
  section {
    display: flex;
    .imges {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      img {
        width: 100%;
        z-index: -1;
      }
    }
    .img {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      img {
        width: 100%;
        z-index: -1;
      }
    }
    form {
      font-family: Century Gothic;
      width: 50%;
      h2 {
        margin: 10px auto;
        color: var(--Black-color);

        strong {
          color: var(--main-color);
        }
      }
      p {
        color: var(--Black-color);
      }
      .small_container {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: space-between;
        & > div {
          position: relative;
          width: 48%;
          &.long {
            width: 100%;
          }
          label {
            svg {
              color: var(--main-color);
            }
          }
          input {
            &.form-control {
              border-bottom: 1px solid #333 !important;
              border-radius: 0;
            }
          }
        }
      }
      .Register_Login {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 10px auto;
        button {
          min-width: 150px;
          background: var(--main-color);
          border: none;
          min-height: 37px;
          font-weight: 700;
        }
        .social_media {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          p {
            margin: 0;
            color: var(--Black-color);
          }
          .icons_social {
            display: flex;
            gap: 10px;
            align-items: center;
            svg {
              cursor: pointer;
              border-radius: 4px;
              padding: 5px;
              width: 30px;
              height: 30px;
              color: #fff;
              &:first-child {
                background-color: #3b5998;
              }
              &:last-child {
                background-color: rgb(234, 67, 53);
              }
            }
          }
        }
      }
      .TheLogin {
        font-size: 14px;
        margin: 15px auto 0;
      }
    }
  }
}
.Error_Email_Msg {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 12;
  background: var(--main-color);
  min-width: 300px;
  transform: translate(-50%, -50%);
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  color: #fff;
  align-items: center;
  gap: 12px;
  border-radius: 4px;
  font-size: 20px;
  div {
    font-weight: bold;
  }
  button {
    border: none;
    border-radius: 6px;
    background: #fff;
    font-size: 18px;
    cursor: pointer;
    padding: 6px 12px;
  }
}
@media (min-width: 1200px) {
}

@media (min-width: 768px) and (max-width: 1199px) {
}

@media (max-width: 767px) {
  .select {
    top: 12px !important;
    left: 26px !important;
  }
  .content > div {
    flex-direction: column;
    & > span {
      width: 100%;
    }
  }
  .selecte_3 > div {
    width: 100%;
    & > span {
      flex-direction: column;
    }
  }
  .TheName {
    flex-direction: column;
    > div {
      width: 100%;
    }
  }
}
</style>
