<template>
  <div class="appBox">
    <div class="content" @tap="func" @touchmove="handleMove" @touchstart="handleTouch" @touchend="handleEnd">
      <div class="appMenu rightMenu " :style="{'left':pageIndex==1? '0':'-100vw','transition':'1000ms'}" >
          <div class="appIcon">
              <router-link to="">
                  <img src="https:////m.360buyimg.com/mobilecms/s120x120_jfs/t1/125678/35/5947/4868/5efbf28cEbf04a25a/e2bcc411170524f0.png.webp"
                  class="img" alt="京东超市"><br/>
                  <span>京东超市</span>
              </router-link>

          </div>
          <div class="appIcon">
              <router-link to="">
                  <img src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/135931/4/3281/5598/5efbf2c0Edbdc82c7/ed9861b4ddfb9f30.png"
                  class="img" alt="数码电器"><br/>
                  <span>数码电器</span>
              </router-link>
          </div>
          <div class="appIcon">
              <router-link to="">
                  <img src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/140012/8/1804/3641/5efbf318E38bd5dad/0db99d859ab16ce9.png"
                  class="img" alt="京东服饰"><br/>
                  <span>京东服饰</span>
              </router-link>
          </div>
          <div class="appIcon">
              <router-link to="">
                  <img src="https:///m.360buyimg.com/mobilecms/s120x120_jfs/t1/129215/21/5978/3618/5efbf344Ebec23ae8/59712d986b10bb0a.png"
                  class="img" alt="京东生鲜"><br/>
                  <span>京东生鲜</span>
              </router-link>
          </div>
          <div class="appIcon">
              <router-link to="">
                  <img src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/116602/7/11200/3796/5efbf375Ebba41029/f07cc166f368fa05.png"
                  class="img" alt="京东到家"><br/>
                  <span>京东到家</span>
              </router-link>
          </div>
          <div class="appIcon">
              <router-link to="">
                  <img src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/146390/3/1846/4909/5efbf39aEe5f5f797/300071558a9ab078.png"
                  class="img" alt="充值缴费"><br/>
                  <span>充值缴费</span>
              </router-link>
          </div>
           <div class="appIcon">
              <router-link to="">
                  <img src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/143365/25/1824/3716/5efbf3c0E5175e1fb/88f6227257a29f1d.png"
                  class="img" alt="京喜购物"><br/>
                  <span>京喜购物</span>
              </router-link>
          </div>
           <div class="appIcon">
              <router-link to="">
                  <img src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/113589/24/11332/4897/5efbf3feE705d87db/e5c12d5e943266b9.png.webp"
                  class="img" alt="领券"><br/>
                  <span>领券</span>
              </router-link>
          </div>
           <div class="appIcon">
              <router-link to="">
                  <img src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/131663/33/3380/3674/5efbf50fEf79cf314/af4b57d2383e605d.png"
                  class="img" alt="领金贴"><br/>
                  <span>领金贴</span>
              </router-link>
          </div>
           <div class="appIcon">
              <router-link to="">
                  <img src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/123730/37/5924/4189/5efbf567E0a226121/d04df7c74c87cf68.png"
                  class="img" alt="尊享"><br/>
                  <span>Plus会员</span>
              </router-link>
          </div>
      </div>
      <div class="appMenu leftMenu" :style="{'left':pageIndex==2? '0':'-100vw','transition':'1000ms'}">
           <div class="appIcon">
              <router-link to="">
                  <img src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/143365/25/1824/3716/5efbf3c0E5175e1fb/88f6227257a29f1d.png"
                  class="img" alt="京喜购物"><br/>
                  <span>京喜购物</span>
              </router-link>
          </div>
           <div class="appIcon">
              <router-link to="">
                  <img src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/113589/24/11332/4897/5efbf3feE705d87db/e5c12d5e943266b9.png.webp"
                  class="img" alt="领券"><br/>
                  <span>领券</span>
              </router-link>
          </div>
           <div class="appIcon">
              <router-link to="">
                  <img src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/131663/33/3380/3674/5efbf50fEf79cf314/af4b57d2383e605d.png"
                  class="img" alt="领金贴"><br/>
                  <span>领金贴</span>
              </router-link>
          </div>
           <div class="appIcon">
              <router-link to="">
                  <img src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/123730/37/5924/4189/5efbf567E0a226121/d04df7c74c87cf68.png"
                  class="img" alt="尊享"><br/>
                  <span>Plus会员</span>
              </router-link>
          </div>
          <div class="appIcon">
              <router-link to="">
                  <img src="https:////m.360buyimg.com/mobilecms/s120x120_jfs/t1/125678/35/5947/4868/5efbf28cEbf04a25a/e2bcc411170524f0.png.webp"
                  class="img" alt="京东超市"><br/>
                  <span>京东超市1</span>
              </router-link>

          </div>
          <div class="appIcon">
              <router-link to="">
                  <img src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/135931/4/3281/5598/5efbf2c0Edbdc82c7/ed9861b4ddfb9f30.png"
                  class="img" alt="数码电器"><br/>
                  <span>数码电器1</span>
              </router-link>
          </div>
          <div class="appIcon">
              <router-link to="">
                  <img src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/140012/8/1804/3641/5efbf318E38bd5dad/0db99d859ab16ce9.png"
                  class="img" alt="京东服饰"><br/>
                  <span>京东服饰1</span>
              </router-link>
          </div>
          <div class="appIcon">
              <router-link to="">
                  <img src="https:///m.360buyimg.com/mobilecms/s120x120_jfs/t1/129215/21/5978/3618/5efbf344Ebec23ae8/59712d986b10bb0a.png"
                  class="img" alt="京东生鲜"><br/>
                  <span>京东生鲜</span>
              </router-link>
          </div>
          <div class="appIcon">
              <router-link to="">
                  <img src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/116602/7/11200/3796/5efbf375Ebba41029/f07cc166f368fa05.png"
                  class="img" alt="京东到家"><br/>
                  <span>京东到家</span>
              </router-link>
          </div>
          <div class="appIcon">
              <router-link to="">
                  <img src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/146390/3/1846/4909/5efbf39aEe5f5f797/300071558a9ab078.png"
                  class="img" alt="充值缴费"><br/>
                  <span>充值缴费</span>
              </router-link>
          </div>

      </div>
      <div class="pagination">
          <b :class="{'cur':pageIndex==1}"></b>
          <b :class="{'cur':pageIndex==2}"></b>
      </div>
    </div>

  </div>
</template>

<script>
export default {
    name:"appMenu",
    data:function(){
      return {
        pageIndex:2,
        startX:0,
        endX:0,
        moveX:0,
      }
    },
    methods:{
      handleTouch(e){
        this.startX=e.targetTouches[0].clientX;
      },
      handleMove(e){
        var moveX=e.targetTouches[0].clientX-this.startX;
        if(moveX<-50 && this.pageIndex==1){
          this.pageIndex=2;
        }if(moveX>50 && this.pageIndex==2){
          this.pageIndex=1;
        }
        e.preventDefault();
      },
      handleEnd(e){

      },
      func(e){
          console.log(1);
      }
    }
}
</script>

<style>

</style>
