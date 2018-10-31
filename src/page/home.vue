<template>
  <div class="home">
     <div class="homeBg">
       <img src="../../static/img/boxBg.jpg" alt="">
        <div class="contentBox" >
          <ul class="contentUl">
            <li v-for="(index,item) in tempData" :key="index" @click="toClickVideo(index)"></li>
          </ul>
        </div>
     </div>
  </div>
</template>
<script>
  //  import video from '../components/video.vue'
  import Ajax from '../config/ajax';
  import md5 from '../config/md5'
  export default {
    data() {
      return {
        tempData: [
                '0','1','2','3','4','5','6','7','8','9',
                '10','11','12','13','14','15','16','17','18','19',
                '20','21','22','23','24','25','26','27','28','29',
                '30','31','32','33','34'
        ]
      }
    },
    mounted(){
      this.addSdk('https://res.wx.qq.com/open/js/jweixin-1.2.0.js', () => {
        this.weReady();
      });
    },
    methods: {
      toClickVideo(index){
        this.$router.push('videoPage' + '/' + index);
      },

      clickImg(e){
        e.stopPropagation();

      },

      addSdk(src, cb) {
        var oHead = document.getElementsByTagName('HEAD').item(0);
        var oScript = document.createElement("script");
        oScript.type = "text/javascript";
        oScript.onload = function () {
          if (cb) cb();
        }
        oScript.src = src;
        oHead.appendChild(oScript);
      },

      weReady(){
        let URI = encodeURIComponent(location.href.split('#')[0]),
          title = '来自101的夏日问候',
          content = '【超级粉丝专属】 《创造101》小姐姐的夏日问候',
          shareLink = 'https://starcdn.xintiao100.com/h5video/101i/index.html';
        (new Ajax()).sendJSON('https://h5wwj.xintiao100.com/production/' + 'wx_config', {
          user_id: '3212577',
          uri: URI,
          sign: md5({
            user_id: "3212577",
            uri: URI
          })
        }, function (data) {
          var data = data.data.config;
          let arr = ['qq','onMenuShareQQ'];
          arr.unshift('hideAllNonBaseMenuItem', 'showMenuItems');
          arr = arr.concat(data['jsApiList']);

          wx.config({
            debug: false,
            appId: data.appId,
            timestamp: data.timestamp,
            nonceStr: data.nonceStr,
            signature: data.signature,
            jsApiList: arr
          });
          wx.ready(function () {
            // //分享到朋友圈
            wx.hideAllNonBaseMenuItem();

            wx.showMenuItems({
              menuList: ["menuItem:share:timeline","menuItem:share:appMessage","menuItem:share:qq","menuItem:share:QZone","menuItem:share:weiboApp"]
            });

            //分享到朋友圈
          wx.onMenuShareTimeline({
              title: '来自101的夏日问候', // 分享标题
              desc: '【超级粉丝专属】 《创造101》小姐姐的夏日问候', // 分享描述
              link: shareLink, // 分享链接
              imgUrl: 'https://starcdn.xintiao100.com/h5video/shareIcon2.jpg', // 分享图标
              success: function () {
                // 用户确认分享后执行的回调函数
              },
              cancel: function () {
                // 用户取消分享后执行的回调函数
              }
          });

            //分享给朋友
            wx.onMenuShareAppMessage({
              title: '来自101的夏日问候', // 分享标题
              desc: '【超级粉丝专属】 《创造101》小姐姐的夏日问候', // 分享描述
              link: shareLink, // 分享链接
              imgUrl: 'https://starcdn.xintiao100.com/h5video/shareIcon2.jpg', // 分享图标
              success: function () {
                // 用户确认分享后执行的回调函数
              },
              cancel: function () {
                // 用户取消分享后执行的回调函数
              }
            });

            //分享给QQ
            wx.onMenuShareQQ({
              title: '来自101的夏日问候', // 分享标题
              desc: '【超级粉丝专属】 《创造101》小姐姐的夏日问候', // 分享描述
              link: shareLink, // 分享链接
              imgUrl: 'https://starcdn.xintiao100.com/h5video/shareIcon2.jpg', // 分享图标
              success: function () {
                // 用户确认分享后执行的回调函数
              },
              cancel: function () {
                // 用户取消分享后执行的回调函数
              }
            });

            //分享都qq空间
            wx.onMenuShareQZone({
              title: '来自101的夏日问候', // 分享标题
              desc: '【超级粉丝专属】 《创造101》小姐姐的夏日问候', // 分享描述
              link: shareLink, // 分享链接
              imgUrl: 'https://starcdn.xintiao100.com/h5video/shareIcon2.jpg', // 分享图标
              success: function () {
                // 用户确认分享后执行的回调函数
              },
              cancel: function () {
                // 用户取消分享后执行的回调函数
              }
            });

            //分享到微博
             wx.onMenuShareWeibo({
               title: '来自101的夏日问候', // 分享标题
               desc: '【超级粉丝专属】 《创造101》小姐姐的夏日问候', // 分享描述
               link: shareLink, // 分享链接
               imgUrl: 'https://starcdn.xintiao100.com/h5video/shareIcon2.jpg', // 分享图标
               success: function () {
                 // 用户确认分享后执行的回调函数
               },
               cancel: function () {
                 // 用户取消分享后执行的回调函数
               }
             });

          })
        })
      }
    }
  }
</script>
<style scoped>
  .home {
    width: 100%;
    height:49.68rem;
  }
  .homeBg{
    width:100%;
    height:49.68rem;
    position:relative;
    /*background: url('../../static/img/boxBg.jpg') no-repeat;*/
    /*background-size: 100% 100%;*/
  }
  .homeBg>img{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:49.68rem;


  }
  .contentBox{
    width:6.79rem;
    height:40.68rem;
    position:absolute;
    top:5.12rem;
    left:.38rem;
    /*background-color:rgba(0,0,0,.5);*/
  }
  .contentUl{
    width:100%;
    display:flex;
    display:-webkit-flex;
    -webkit-justify-content: flex-start;
    -webkit-align-items: center;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    padding-top:.3rem;
    padding-left:.3rem;

  }
  .contentUl li{
    width:calc(100% / 3 - .2rem);
    height:3.06rem;
    /*background:rgba(0,0,0,.8);*/
    margin-right:.2rem;
    margin-bottom:.28rem;
  }
</style>
