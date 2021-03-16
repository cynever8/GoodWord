<template>
  <div class="welfareSchool white-box">
    <TitleBox :titleName="titleName" :icon="icon"></TitleBox>
    <div class="tabbar">
      <div class="video">
        <VideoPlayers ref="videoSources" :sources="sources"></VideoPlayers>
      </div>
      <div class="title">{{ schoolData.title }}</div>
      <div class="text">{{ schoolData.company }}</div>
    </div>
  </div>
</template>

<script>
import TitleBox from "./components/titleBox";
import VideoPlayers from "@/components/videoPlayers/";
import { getWelfareContentApi } from "@/api/common";
export default {
  name: "welfareSchool",
  components: {
    TitleBox,
    VideoPlayers,
  },
  data() {
    return {
      titleName: "公益学堂",
      icon: require("@/assets/images/home/icon_3.png"),
      title: "蓝色星球环保公益讲座",
      text: "主讲人：北京大学环境科学专业王教授",
      sources: {
        src: "",
        poster: "",
        aspectRatio: "12:5",
      },
      schoolData: "",
    };
  },
  created() {
    this.getWelfareContent();
  },
  methods: {
    async getWelfareContent() {
      let params = {
        // 首页展示4个
        size: 1,
        current: 1,
        mainType: 1,
      };
      let res = await getWelfareContentApi(params);
      if (res.code === 200) {
        this.schoolData = res.data.records[0];
        this.videoProps();
      }
    },
    videoProps() {
      this.sources.src = this.schoolData.resource;
      this.sources.poster = this.schoolData.cover;
      // FIXME: 父组件调用子组件的方法
      this.$refs.videoSources.resetDataSources(this.sources);
    },
  },
};
</script>

<style scoped lang="scss">
.welfareSchool {
  .tabbar {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 216px;
    .video {
      width: 333px;
      height: 136px;
      background-color: pink;
      border-radius: 6px;
      overflow: hidden;
    }
    .title {
      font-size: 18px;
    }
    .text {
      font-size: 14px;
      color: #666;
    }
  }
}
</style>
