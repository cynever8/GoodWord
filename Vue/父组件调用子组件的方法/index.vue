<template>
  <div class="videoPlayers">
    <video-player
      class="vjs-custom-skin"
      ref="videoPlayers"
      :options="playerOptions"
      :playsinline="true"
    >
    </video-player>
  </div>
</template>

<script>
export default {
  name: "videoPlayers",
  data() {
    return {
      playerOptions: {
        // playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
        autoplay: false, // 如果为true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 是否视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4",
            src: ""
          }
        ],
        poster: "",
        notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, // 当前时间和持续时间的分隔符
          durationDisplay: true, // 显示持续时间
          remainingTimeDisplay: false, // 是否显示剩余时间功能
          fullscreenToggle: true // 是否显示全屏按钮
        }
      }
    };
  },
  props: {
    /**
     * @description: 接收视频播放参数
     * @param {
     *  sources 数据源
     *  poster 缩略图
     *  aspectRatio 视频比例
     * }
     * @return {*}
     */
    sources: {
      type: Object,
      required: true
    }
  },
  computed: {
    player() {
      let myplayer = this.$refs.videoPlayers.player;
      return myplayer;
    }
  },
  created() {},
  mounted() {},
  methods: {
    // FIXME: 子组件方法定义
    resetDataSources(_sources) {
      if (_sources) {
        this.sources = _sources;
      }
      this.playerOptions.sources[0].src = this.sources.src;
      this.playerOptions.poster = this.sources.poster;
      this.playerOptions.aspectRatio = this.sources.aspectRatio || "16:9";
    }
  }
};
</script>

<style scoped lang="scss"></style>
