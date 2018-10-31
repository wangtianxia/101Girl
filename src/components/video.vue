<template>
  <div class="videoContainerCont">
    <section class="videoPage1" v-show="!isShow" @click="onClickPlayVideo">
        <div class="videoFenMianImg">
          <img :src="videoPoster" alt="">
        </div>
        <div class="toPlayVideoIcon">
          <img src="../../static/101/sy_play1.png" alt="">
        </div>
    </section>
    <div class="videoBox" v-show="isShow" @click="onClickPaused">
        <video ref="myVideo" webkit-playsinline="true" playsinline="true">
          <source :src="videoSrc1" type="video/mp4" :poster="videoPoster"/>
        </video>
    </div>
    <a :href="toAddGroupUrl">
      <div class="toAddGroupBox">
        <img src="../../static/img/toGoupBtn.png" alt="">
      </div>
    </a>
    <div class="toReturnPage" @click="returnToIndex">
    </div>
    <ReturnComent @returnToIndex="returnToIndex"></ReturnComent>
  </div>
</template>
<script>
  import  ReturnComent from './return/index.vue'
  export default {
    data (){
      return {
        videoSrc1: '',
        videoPoster: '',
        isShow: false,
        isVideoIcon: true,
        starName: '',

        qqGroupName1: '',
        groupHeadIcon1: '',
        toAddGroupUrl: '',
        videoSrc33: '',

        listArr: [
          //吴宣仪(新)
          {
            src: 'static/101/wuxuanyi.png',
            name: '吴宣仪',
            playIcon: 'static/101/sy_play.png',
            videoSrc: 'https://starcdn.xintiao100.com/starResources/videos/ads101/wuxuanyi.mp4',
            toAddGroupUrl: 'https://jq.qq.com/?_wv=1027&k=5RWZXqD',
          },
          //孟美岐(新)
          {
            src: 'static/101/mengmeiqi.png',
            name: '孟美岐',
            playIcon: 'static/101/sy_play.png',
            videoSrc: 'https://starcdn.xintiao100.com/starResources/videos/ads101/mengmeiqi.mp4',
            toAddGroupUrl: 'https://jq.qq.com/?_wv=1027&k=5zxiOXY',
          },

          //杨超越
          {
            src: 'static/101/yangchaoyue.png',
            name: '杨超越',
            playIcon: 'static/101/sy_play.png',
            videoSrc: 'https://starcdn.xintiao100.com/starResources/videos/ads101/yangchaoyue.mp4',
            toAddGroupUrl: 'https://jq.qq.com/?_wv=1027&k=5PNqcWO',
          },
          //段奥娟(新)
          {
            src: 'static/101/duanaojuan.png',
            name: '段奥娟',
            playIcon: 'static/101/sy_play.png',
            videoSrc: 'https://starcdn.xintiao100.com/starResources/videos/ads101/duanaojuan.mp4',
            toAddGroupUrl: 'https://jq.qq.com/?_wv=1027&k=5SgrjqJ',
          },

          //赖美云
          {
            src: 'static/101/laimeiyun.png',
            name: '赖美云',
            playIcon: 'static/101/sy_play.png',
            videoSrc: 'https://starcdn.xintiao100.com/starResources/videos/ads101/laimeiyun.mp4',
            toAddGroupUrl: 'https://jq.qq.com/?_wv=1027&k=5tf4xYy',
          },
          //Yamy
          {
            src: 'static/101/yamy.png',
            name: 'Yamy',
            playIcon: 'static/101/sy_play.png',
            videoSrc: 'https://starcdn.xintiao100.com/starResources/videos/ads101/yamy.mp4',
            toAddGroupUrl: 'https://jq.qq.com/?_wv=1027&k=51jZE3C',

          },

          //李子璇(新)
          {
            src: 'static/101/lizixuan.png',
            name: '李子璇',
            playIcon: 'static/101/sy_play.png',
            videoSrc: 'https://starcdn.xintiao100.com/starResources/videos/ads101/lizixuan.mp4',
            toAddGroupUrl: 'https://jq.qq.com/?_wv=1027&k=5Chismb',

          },
          //李紫婷(新)
          {
            src: 'static/101/liziting.png',
            name: '李紫婷',
            playIcon: 'static/101/sy_play.png',
            videoSrc: 'https://starcdn.xintiao100.com/starResources/videos/ads101/liziting.mp4',
            toAddGroupUrl: 'https://jq.qq.com/?_wv=1027&k=5KMuL3b',
          },
          //紫宁(新)
          {
            src: 'static/101/zining.png',
            name: '紫宁',
            playIcon: 'static/101/sy_play.png',
            videoSrc: 'https://starcdn.xintiao100.com/starResources/videos/ads101/zining.mp4',
            toAddGroupUrl: 'https://jq.qq.com/?_wv=1027&k=5ToG9y2',
          },
          //傅菁
          {
            src: 'static/101/fuqing.png',
            name: '傅菁',
            playIcon: 'static/101/sy_play.png',
            videoSrc: 'https://starcdn.xintiao100.com/starResources/videos/ads101/fuqing.mp4',
            toAddGroupUrl: 'https://jq.qq.com/?_wv=1027&k=5dNtMIj',
          },
          //徐梦洁
          {
            src: 'static/101/xumengjie.png',
            name: '徐梦洁',
            playIcon: 'static/101/sy_play.png',
            videoSrc: 'https://starcdn.xintiao100.com/starResources/videos/ads101/xumengjie.mp4',
            toAddGroupUrl: 'https://jq.qq.com/?_wv=1027&k=5wACeOb',
          },
          //刘人语
          {
            src: 'static/101/liurenyu.png',
            name: '刘人语',
            playIcon: 'static/101/sy_play.png',
            videoSrc: 'https://starcdn.xintiao100.com/starResources/videos/ads101/liurenyu.mp4',
            toAddGroupUrl: 'https://jq.qq.com/?_wv=1027&k=5FfwDhA',
          },
          //戚砚笛
          {
            src: 'static/101/qiyandi.png',
            name: '戚砚笛',
            playIcon: 'static/101/sy_play.png',
            videoSrc: 'https://starcdn.xintiao100.com/starResources/videos/ads101/qiyandi.mp4',
            toAddGroupUrl: 'https://jq.qq.com/?_wv=1027&k=5myyD6t',
          },
          //高秋梓新
          {
            src: 'static/101/gaoqiuzi.png',     ////////////
            name: '高秋梓',
            playIcon: 'static/101/sy_play.png',
            videoSrc: 'https://starcdn.xintiao100.com/starResources/videos/ads101/gaoqiuzi.mp4',
            toAddGroupUrl: 'https://jq.qq.com/?_wv=1027&k=5NrVPHp',
          },
          //杨芸晴（sunnee）新
          {
            src: 'static/101/yangyunqing.png',     ////////////
            name: '杨芸晴',
            playIcon: 'static/101/sy_play.png',
            videoSrc: 'https://starcdn.xintiao100.com/starResources/videos/ads101/yangyunqing.mp4',
            toAddGroupUrl: 'https://jq.qq.com/?_wv=1027&k=5viBDMs',
          },
          //许靖韵
          {
            src: 'static/101/xujingyun.png',
            name: '许靖韵',
            playIcon: 'static/101/sy_play.png',
            videoSrc: 'https://starcdn.xintiao100.com/starResources/videos/ads101/xujingyun.mp4',
            toAddGroupUrl: 'https://jq.qq.com/?_wv=1027&k=57fIWmy',
          },
          //高颖浠
          {
            src: 'static/101/gaoyingxi.png',
            name: '高颖浠',
            playIcon: 'static/101/sy_play.png',
            videoSrc: 'https://starcdn.xintiao100.com/starResources/videos/ads101/gaoyingxi.mp4',
            toAddGroupUrl: 'https://jq.qq.com/?_wv=1027&k=5gkrpow',
          },

          //王菊（新）
          {
            src: 'static/101/wangju.png',
            name: '王菊',
            playIcon: 'static/101/sy_play.png',
            videoSrc: 'https://starcdn.xintiao100.com/starResources/videos/ads101/wangju.mp4',
            toAddGroupUrl: 'https://jq.qq.com/?_wv=1027&k=5NkAUku',
          },
          //吕小雨
          {
            src: 'static/101/lvxiaoyu.png',
            name: '吕小雨',
            playIcon: 'static/101/sy_play.png',
            videoSrc: 'https://starcdn.xintiao100.com/starResources/videos/ads101/lvxiaoyu.mp4',
            toAddGroupUrl: 'https://jq.qq.com/?_wv=1027&k=55Je9SG',
          },
          //陈意涵
          {
            src: 'static/101/chenyihan.png',
            name: '陈意涵',
            playIcon: 'static/101/sy_play.png',
            videoSrc: 'https://starcdn.xintiao100.com/starResources/videos/ads101/chenyihan.mp4',
            toAddGroupUrl: 'http://qm.qq.com/cgi-bin/qm/qr?k=duVOHjcYSBTNflcBC-V2wF9LwPUBzWxn',
          },
          //强东玥(新)
          {
            src: 'static/101/qiangdongyue.png',
            name: '强东玥',
            playIcon: 'static/101/sy_play.png',
            videoSrc: 'https://starcdn.xintiao100.com/starResources/videos/ads101/qiangdongyue.mp4',
            toAddGroupUrl: 'https://jq.qq.com/?_wv=1027&k=5An5h0e',
          },
          //吴映香
          {
            src: 'static/101/wuyinxiang.png',
            name: '吴映香',
            playIcon: 'static/101/sy_play.png',
            videoSrc: 'https://starcdn.xintiao100.com/starResources/videos/ads101/wuyinxiang.mp4',
            toAddGroupUrl: ' https://jq.qq.com/?_wv=1027&k=5PtIe5v',
          },
          //蒋申
          {
            src: 'static/101/jiangshen.png',
            name: '蒋申',
            playIcon: 'static/101/sy_play.png',
            videoSrc: 'https://starcdn.xintiao100.com/starResources/videos/ads101/jiangshen.mp4',
            toAddGroupUrl: 'https://jq.qq.com/?_wv=1027&k=5eBcGHo',
          },
          //赵尧珂
          {
            src: 'static/101/zhaoyaoke.png',
            name: '赵尧珂',
            playIcon: 'static/101/sy_play.png',
            videoSrc: 'https://starcdn.xintiao100.com/starResources/videos/ads101/zhaoyaoke.mp4',
            toAddGroupUrl: 'https://jq.qq.com/?_wv=1027&k=5gsCy1j',
          },
          //苏芮琪（新）
          {
            src: 'static/101/suruiqi.png',
            name: '苏芮琪',
            playIcon: 'static/101/sy_play.png',
            videoSrc: 'https://starcdn.xintiao100.com/starResources/videos/ads101/suruiqi.mp4',
            toAddGroupUrl: 'https://jq.qq.com/?_wv=1027&k=5jr8Dfg',
          },
          //陈芳语（新）
          {
            src: 'static/101/chenfangyu.png',
            name: '陈芳语',
            playIcon: 'static/101/sy_play.png',
            videoSrc: 'https://starcdn.xintiao100.com/starResources/videos/ads101/chenfangyu.mp4',
            toAddGroupUrl: 'https://jq.qq.com/?_wv=1027&k=58uoyRy',
          },
          //吴芊盈
          {
            src: 'static/101/wuqianyin.png',
            name: '吴芊盈',
            playIcon: 'static/101/sy_play.png',
            videoSrc: 'https://starcdn.xintiao100.com/starResources/videos/ads101/wuqianyin.mp4',
            toAddGroupUrl: 'https://jq.qq.com/?_wv=1027&k=5hotk8X',
          },
          //范薇
          {
            src: 'static/101/fanwei.png',
            name: '范薇',
            playIcon: 'static/101/sy_play.png',
            videoSrc: 'https://starcdn.xintiao100.com/starResources/videos/ads101/fanwei.mp4',
            toAddGroupUr1: 'https://jq.qq.com/?_wv=1027&k=5I4ZE0o',
          },
          //王莫涵
          {
            src: 'static/101/wangmohan.png',
            name: '王莫涵',
            playIcon: 'static/101/sy_play.png',
            videoSrc: 'https://starcdn.xintiao100.com/starResources/videos/ads101/wangmohan.mp4',
            toAddGroupUrl: 'https://jq.qq.com/?_wv=1027&k=51AFLmf',
          },
          //魏瑾
          {
            src: 'static/101/weijing.png',
            name: '魏瑾',
            playIcon: 'static/101/sy_play.png',
            videoSrc: 'https://starcdn.xintiao100.com/starResources/videos/ads101/weijing.mp4',
            toAddGroupUrl: 'https://jq.qq.com/?_wv=1027&k=5Io1ork',
          },
          //王婷
          {
            src: 'static/101/wangting.png',
            name: '王婷',
            playIcon: 'static/101/sy_play.png',
            videoSrc: 'https://starcdn.xintiao100.com/starResources/videos/ads101/wangting.mp4',
            toAddGroupUrl: 'https://jq.qq.com/?_wv=1027&k=5aZXF04',
          },
          //鹿小草
          {
            src: 'static/101/luxiaocao.png',
            name: '鹿小草',
            playIcon: 'static/101/sy_play.png',
            videoSrc: 'https://starcdn.xintiao100.com/starResources/videos/ads101/luxiaocao.mp4',
            toAddGroupUrl: 'https://jq.qq.com/?_wv=1027&k=5CStfYU',
          },
          //刘丹萌
          {
            src: 'static/101/liudanmeng.png',
            name: '刘丹萌',
            playIcon: 'static/101/sy_play.png',
            videoSrc: 'https://starcdn.xintiao100.com/starResources/videos/ads101/liudanmeng.mp4',
            toAddGroupUrl: 'https://jq.qq.com/?_wv=1027&k=5qdS6hR',
          },
          //罗怡恬
          {
            src: 'static/101/luoyitian.png',
            name: '罗怡恬',
            playIcon: 'static/101/sy_play.png',
            videoSrc: 'https://starcdn.xintiao100.com/starResources/videos/ads101/luoyitian.mp4',
            toAddGroupUrl: 'https://jq.qq.com/?_wv=1027&k=5Tb71Mk',
          },
          //罗奕佳
          {
            src: 'static/101/luoyijia.png',
            name: '罗奕佳',
            playIcon: 'static/101/sy_play.png',
            videoSrc: 'https://starcdn.xintiao100.com/starResources/videos/ads101/luoyijia.mp4',
            toAddGroupUrl: 'https://jq.qq.com/?_wv=1027&k=5O7co8A',
          }
        ]
      }
    },
    mounted(){
      let tempNum = this.$route.params.tempNum;
      for (let i = 0; i < this.listArr.length; i++) {
        if (i == tempNum) {
          this.videoSrc1 = this.listArr[i]['videoSrc'];
          this.videoPoster = this.listArr[i]['src'];
          this.toAddGroupUrl = this.listArr[i]['toAddGroupUrl'];
          console.log(i)
        }
      }

      if (!tempNum) {
        return;
      }

//        let myVideo = this.$refs.myVideo;
//        myVideo.play();
//        myVideo.addEventListener('play', (e) => {
//          this.isShow = true;
//          this.isVideoIcon = false
//        });
//        audio.addEventListener('ended', (e) => {
//          this.isShow = false;
//          this.isVideoIcon = true;
//        });
//        audio.addEventListener('pause', (e) => {
//          this.isShow = false;
//          this.isVideoIcon = true;
//        })
    },
    methods: {
      onClickPlayVideo(){
        this.isShow = false;
        let myVideo = this.myVideo = this.$refs.myVideo;
        this.myVideo.play();
        myVideo.addEventListener('play', (e) => {
          this.isShow = true;
        });
        myVideo.addEventListener('ended', (e) => {
          this.isShow = false;
        });
        myVideo.addEventListener('pause', (e) => {
          this.isShow = false;
        });
      },
      //暂停播放
      onClickPaused(){
        let myVideo = this.myVideo = this.$refs.myVideo;
        if (myVideo.paused) {
          this.isShow = true;
          myVideo.play()
        } else {
          this.isShow = false;
          myVideo.pause();
        }
      },
      //去加群
      toAddGoup1(i){
        window.location.href = 'toAddGroupUrl1'
      },
      returnToIndex(){
        this.$router.go(-1)
      },
    },
    components: {
      ReturnComent
    }
  }
</script>
<style>
  .videoContainerCont {
    width: 100%;
    height: 13.3rem;
    background: url('../../static/img/kuang.png') no-repeat;
    background-size: 100% 100%;
  }

  .videoPage1 {
    /*width:100%;*/
    position: absolute;
    top: 3.14rem;
    left: .38rem;
    height: 7.60rem;
    overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .videoFenMianImg {
    position: relative;
    line-height: 1;
    width:6.65rem;
  }

  .videoPage1 img {
    width:6.65rem;
    display: inline-block;
  }

  .toPlayVideoIcon {
    width:.75rem;
    height: .75rem;
    position: absolute;
    top: 50%;
    left: 44%;
    z-index: 101;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .toPlayVideoIcon>img {
    width: .75rem;
  }

  .addGroupContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .qqGroupUrl a {
    width: 1.19rem;
    height: .57rem;
    margin-right: .45rem;
    display: inline-block;
  }

  /*视频在框内播放*/
  .videoBox {
    width:100%;
    height: 7.60rem;
    overflow: hidden;
    /*position:relative;*/
    text-align: center;
  }

  .videoBox video {
    position: absolute;
    top: 3.14rem;
    left: .38rem;
    height: 7.60rem;
  }

  .toAddGroupBox{
    /*width:100%;*/
    height:.94rem;
    position:absolute;
    top:10.4rem;
    left:.8rem;
    z-index:999;
  }
  .toAddGroupBox img{
    width:5.70rem;
    height:.94rem;
  }

  .toReturnPage{
    width: 3.63rem;
    height: .72rem;
    position: absolute;
    top: 11.5rem;
    left: .5rem;
    z-index:999
  }
</style>
