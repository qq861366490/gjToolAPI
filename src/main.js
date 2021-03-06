import Vue from 'vue'
import App from './App.vue'
import Gj from 'gjtool/dist/gjtool.js';
import router from "./router.js";

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  data() {
    return {
      show: false
    };
  },
  mounted: () => {
    const _this = this;
    var size = 1;
    var recalc = function () {
      var docEl = document.documentElement || document.body;
      var clientWidth = docEl.clientWidth;

      if (!clientWidth) return;
      docEl.style.fontSize = 100 * (clientWidth / 1366) + 'px';
      size = clientWidth / 1366;
    };
    recalc();
    Gj(window).resize(recalc);
    Gj('.container').scroll(function () {
      let top = Gj('.container').scrollTop();
      if (top >= 40 && !_this.show) {
        _this.show = true;
        Gj('#backTop').stop().fadeIn(500);
      } else if (top < 40 && _this.show) {
        _this.show = false;
        Gj('#backTop').stop().fadeOut(500);
        Gj(".container").find(".type-con .sub-nav li").removeClass('active');
      }
    })
    Gj('#backTop').on('click', function () {
      Gj('.container').animate({
        scrollTop: 0
      })
      Gj(".container").find(".type-con .sub-nav li").removeClass('active')
    });
    Gj(".container").on("click", ".type-con .sub-nav li", function () {
      const self = Gj(this), index = self.index();
      self.addClass('active').siblings().removeClass('active');
      let top = Gj(".container").find(".content li").eq(index).offset().top;
      Gj(".container").animate({
        scrollTop: top - 110
      });
    })
    Gj('.bar-left').on("click", ".type a", function () {
      Gj('.container').scrollTop(0)
    });
  }
})
