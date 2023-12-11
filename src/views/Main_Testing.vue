<template>
  <div
    class="Main_Testing CC pt-2.5"
    style="margin-top: -20px; padding-bottom: 50px"
  >
    <div class="container relative" style="padding-top: 160px">
      <AddTest
        @Close="CloseAndOpenAddTest"
        @GetData="GetData"
        v-if="ShowAddTest"
      />
      <ShowTest @Close="Close" v-if="ShowTest" :TestIndex="this.TestIndex" />
      <nav
        aria-label="breadcrumb"
        class="nav_1 flex items-center justify-between"
      >
        <nav aria-label="breadcrumb">
          <MDBBreadcrumb>
            <MDBBreadcrumbItem
              ><router-link to="/">{{ Type }}</router-link></MDBBreadcrumbItem
            >
            <MDBBreadcrumbItem>
              <router-link to="/">{{ Lang }}</router-link></MDBBreadcrumbItem
            >
            <MDBBreadcrumbItem>
              <router-link to="/Main_Class">{{ Class }}</router-link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active>{{ Sub }}</MDBBreadcrumbItem>
          </MDBBreadcrumb>
        </nav>
        <span
          class="bg-[#fff] p-2.5 rounded cursor-pointer flex items-center gap-2.5 hover-0"
          @click="CloseAndOpenAddTest"
          v-if="UserAdmin === 'Admin'"
          style="
            border: 1px solid var(--main-color);
            margin: 10px;
            color: var(--main-color);
            font-weight: bold;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
          "
        >
          <font-awesome-icon :icon="['fas', 'plus']" />
          <span>اضف اختبار</span>
        </span>

        <!-- @click="CloseAndOpenAddSub" -->
      </nav>
      <div
        class="text-right my-2.5 p-2.5 text-[--main-color] font-bold"
        style="
          background: #fff;
          width: fit-content;
          border-radius: 5px;
          padding: 10px;
          box-shadow: 0 0 10px #ddd;
        "
      >
        ({{ AllTest.length }}) اختبار
      </div>
      <div class="data flex flex-wrap gap-2.5 justify-between mt-2.5">
        <img
          src="../assets/animation_lolk2w1w_small.gif"
          alt="animation"
          class="m-auto"
          v-if="ShowLoding"
        />
        <div v-if="ShowMsg" class="text-center">{{ MsgEmpty }}</div>
        <div
          class="box w-48 border-1 p-2.5 rounded relative"
          v-for="(test, index) in AllTest"
          :key="index"
          style="
            background: #ffffffa1;
            box-shadow: 0 0 10px #ddd;
            font-family: system-ui;
          "
        >
          <div class="flex justify-between">
            <div
              class="number"
              style="
                font-size: 21px;
                font-weight: bold;
                font-family: system-ui;
                color: var(--main-color);
              "
            >
              اختبار رقم (<span>{{ index + 1 }}</span
              >)
            </div>
            <div style="display: flex; gap: 10px; align-items: center">
              <!-- <div v-if="test.Type === 'مجاني'">
                <font-awesome-icon :icon="['fas', 'file-circle-check']" />
              </div>
              <div v-if="test.Type === 'مدفوع'">
                <font-awesome-icon :icon="['fas', 'file-invoice-dollar']" />
              </div> -->
              <div
                style="
                  font-size: 14px;
                  font-weight: bold;
                  font-family: system-ui;
                  color: var(--main-color);
                  background: #eee;
                  padding: 10px;
                  border-radius: 5px;
                "
              >
                {{ test.Type }}
              </div>
            </div>
          </div>
          <div
            style="
              font-size: 18px;
              margin: 10px 0;
              font-weight: bold;
              color: #595555;
            "
          >
            ميعاد بدأ الإختبار
          </div>
          <div
            class="flex gap-2.5 items-center"
            style="
              background: #eee;
              padding: 10px;
              border-radius: 5px;
              font-weight: bold;
              font-family: system-ui;
              margin-bottom: 10px;
            "
          >
            <font-awesome-icon :icon="['fas', 'clock']" />
            <p class="Time">{{ test.Time }}</p>
          </div>
          <div
            class="flex gap-2.5 items-center"
            style="
              background: #eee;
              padding: 10px;
              border-radius: 5px;
              font-weight: bold;
              font-family: system-ui;
              margin-bottom: 10px;
            "
          >
            <font-awesome-icon :icon="['fas', 'calendar-days']" />
            <p class="Date">{{ test.Date }}</p>
          </div>
          <div
            class="mt-2.5 hover-0"
            style="
              color: var(--main-color);
              font-size: 15px;
              border: 1px solid var(--main-color);
              height: 45px;
              width: 106px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: bold;
              cursor: pointer;
              border-radius: 5px;
              font-size: 16px;
            "
            @click="CheckTimeAndData(index)"
          >
            أختبر نفسك
          </div>
        </div>
      </div>
    </div>
  </div>
  <PayTest v-if="PayTest" @ColseAndOpen="ColseAndOpen" />
</template>
<script>
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-vue-ui-kit";
import AddTest from "../components/Add_Test.vue";
import ShowTest from "../components/ShowTest.vue";
import PayTest from "../components/PayTest.vue";

import {
  getDoc,
  getFirestore,
  doc,
  query,
  where,
  collection,
  getDocs,
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
import moment from "moment";
import "moment/locale/ar";
export default {
  name: "Main_Testing",
  emits: ["GetData"],
  computed: {
    UserAdmin() {
      return this.$store.state.UserAdmin;
    },
  },
  mounted() {
    this.getvalues();
    setTimeout(() => {
      this.GetData();
    }, 1000);
  },
  data() {
    return {
      ShowAddTest: null,
      ShowAddQu: null,
      MsgEmpty: "",
      ShowMsg: null,
      ShowLoding: true,
      ShowPopup: null,
      ShowTest: null,
      AllTest: [],
      AllQu: [],
      TestIndex: "",
      Type: "",
      Lang: "",
      Class: "",
      Sub: "",
      PayState: true,
      PayTest: null,
    };
  },
  components: {
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    AddTest,
    ShowTest,
    PayTest,
  },
  methods: {
    Time() {
      for (let i = 0; i < this.AllTest.length; i++) {
        moment(this.AllTest[i].Time, "HH:mm").locale("ar").format("h:mm A");
        let AllTime = document.querySelectorAll(".box .Time");
        AllTime[i].innerHTML = moment(this.AllTest[i].Time, "HH:mm")
          .locale("ar")
          .format("h:mm A");
      }
    },
    ColseAndOpen() {
      this.PayTest = !this.PayTest;
    },
    async CheckTimeAndData(index) {
      this.TestIndex = index;
      const currentDate = new Date();
      const currentTime = moment(currentDate).format("HH:mm");
      let currentYear = moment().locale("ar").format("YYYY");
      let currentMonth = moment().locale("ar").format("MM");
      let currentDay = moment().locale("ar").format("DD");
      const year = moment(this.AllTest[index].Date, "DD/MM/YYYY").format(
        "YYYY"
      );
      const Month = moment(this.AllTest[index].Date, "DD/MM/YYYY").format("MM");
      const Day = moment(this.AllTest[index].Date, "DD/MM/YYYY").format("DD");
      let state;
      if (currentYear > year) {
        state = true;
      } else {
        if (currentMonth > Month) {
          state = true;
        } else {
          if (currentDay > Day) {
            state = true;
          } else {
            state = "Day";
          }
        }
      }
      if (state === "Day") {
        if (currentTime >= this.AllTest[index].Time) {
          if (this.AllTest[index].Type === "مدفوع") {
            const q = query(
              collection(db, "الطلاب"),
              where("userid", "==", localStorage.getItem("userid"))
            );
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
              const user = doc.data();
              for (let i = 0; i < user.pay.length; i++) {
                if (
                  user.pay[i].BillName === "جميع الإختبارات" &&
                  user.pay[i].BillType === this.Type &&
                  user.pay[i].BillClass === this.Class &&
                  user.pay[i].BillLang === this.Lang
                ) {
                  if (user.pay[i].success === "true") {
                    this.ShowTest = true;
                  } else {
                    this.PayTest = true;
                  }
                }
              }
            });
          } else {
            this.ShowTest = true;
          }
        }
      }
      if (state) {
        if (this.AllTest[index].Type === "مدفوع") {
          const q = query(
            collection(db, "الطلاب"),
            where("userid", "==", localStorage.getItem("userid"))
          );
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            const user = doc.data();
            for (let i = 0; i < user.pay.length; i++) {
              if (
                user.pay[i].BillName === "جميع الإختبارات" &&
                user.pay[i].BillType === this.Type &&
                user.pay[i].BillClass === this.Class &&
                user.pay[i].BillLang === this.Lang
              ) {
                if (user.pay[i].success === "true") {
                  this.ShowTest = true;
                } else {
                  this.PayTest = true;
                }
              }
            }
          });
        } else {
          this.ShowTest = true;
        }
      }
    },
    getvalues() {
      setTimeout(() => {
        this.Type = localStorage.getItem("updateType");
        this.Lang = localStorage.getItem("updateLang");
        this.Class = localStorage.getItem("updateClass");
        this.Sub = localStorage.getItem("updateSub");
      }, 100);
    },
    Close() {
      this.ShowTest = !this.ShowTest;
    },
    ToggelPopop() {
      this.ShowPopup = !this.ShowPopup;
    },
    async GetData() {
      let sentence = localStorage.getItem("updateType");
      let words = sentence.split(" ");
      let firstWord = words[0];
      const collectionPath = `اختبارات - ${firstWord} - ${localStorage.getItem(
        "updateLang"
      )} - ${localStorage.getItem("updateClass")}`;

      const docRef = doc(db, collectionPath, this.Sub);
      const docSnap = await getDoc(docRef);
      this.ShowLoding = false;
      if (docSnap.exists()) {
        let arr = [];
        arr.push(docSnap.data());
        this.AllTest = arr[0].test;
        this.AllQu = arr[0].test;
        this.ShowMsg = false;
      } else {
        this.MsgEmpty = `لا توجد إختبارات متاحة الآن لمادة ${this.Sub}`;
        this.ShowMsg = true;
      }
      setTimeout(() => {
        this.Time();
      }, 100);
    },
    CloseAndOpenAddQu() {
      this.ShowAddQu = !this.ShowAddQu;
    },
    CloseAndOpenAddTest() {
      this.ShowAddTest = !this.ShowAddTest;
    },
  },
};
</script>
<style lang="scss" scoped>
.Main_Testing {
  background-image: url("../assets/WhatsApp Image 2023-12-04 at 11.00.58 PM.jpeg");
  background-size: cover;
  background-position: center top;
  background-attachment: fixed;
}

nav {
  background: #fff;
  padding: 15px;
  border-radius: 5px;
  font-size: 14px;
  &.nav_1 {
    padding: 0;
    box-shadow: 0 0 10px #ddd;
  }
  nav ol.breadcrumb {
    margin: 0 !important;
    li {
      transition: 0.3s;
      font-weight: bold;
      &:hover {
        color: var(--main-color) !important;
      }
    }
    li.breadcrumb-item.active {
      font-weight: bold;
      color: var(--main-color);
    }
  }
}
.border-[--main-color] {
  border: 1px solid var(--main-color) !important;
}

.hover-0 {
  transition: 0.3s;
}
.hover-0:hover {
  background: var(--main-color);
  color: #fff;
}
.hover-0:hover svg,
.hover-0:hover span {
  color: #fff;
}
.table_1 {
  height: 35px;
  border: 1px solid var(--main-color);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  border-bottom: none;
  &:last-child {
    border: 1px solid var(--main-color);
  }
}
.table_2 {
  border: 1px solid var(--main-color);
  height: 35px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: none;
  border-top: none;

  &:last-child {
    border-top: 1px solid var(--main-color);
  }
}

@media (min-width: 1200px) {
}

@media (min-width: 768px) and (max-width: 1199px) {
  // .body .main_box {
  //   width: 100% !important;
  // }
}

@media (max-width: 767px) {
  .data {
    flex-direction: column;
    > div {
      width: 100%;
    }
  }
  .body .main_box {
    width: 100% !important;
  }
  section {
    flex-direction: column;
    & > div {
      width: 100%;
    }
  }
  .nav_1 {
    flex-direction: column;
    align-items: stretch;
    & > div {
      justify-content: center;
    }
  }
}
</style>
