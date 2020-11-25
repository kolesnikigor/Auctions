// $(document).ready(function () {
//   $(".header__body");
//   const e = $(".header__users"),
//     t = $(".header__burger"),
//     i = $(".header__menu"),
//     n = $(".header__location"),
//     s = $("body"),
//     o = $(window);
//   function c() {
//     let t = o.width();
//     if (t < 390) {
//       if ($.contains(i[0], n[0])) return;
//       return (
//         n.appendTo(i),
//         n.css("margin", "0px 0px 0px 20px"),
//         void e.css("margin-left", "auto")
//       );
//     }
//     if (t > 390)
//       return $.contains(i[0], n[0])
//         ? (n.insertBefore(e),
//           n.css("margin", "0px 15px 0px auto"),
//           void e.css("margin-left", "0px"))
//         : void 0;
//   }
//   t.on("click", function () {
//     i.toggleClass("active"), t.toggleClass("active"), s.toggleClass("lock");
//   }),
//     o.resize(function () {
//       if (!s.hasClass("lock")) return;
//       o.width() > 767 &&
//         (i.removeClass("active"),
//         t.removeClass("active"),
//         s.removeClass("lock"));
//     }),
//     o.resize(c),
//     c();
//   const a = $(".text-block__text");
//   a.each((e, t) => {
//     const i = t.innerHTML;
//     i.length >= 215 && (a[e].innerHTML = i.slice(0, 215) + "...");
//   });
//   const r = $(".text-block");
//   function l() {
//     const e = [];
//     if (o.width() < 479) return void r.css("min-height", "auto");
//     r.css("min-height", "auto"),
//       r.each((t, i) => {
//         e.push(i.clientHeight);
//       });
//     const t = Math.max.apply(null, e);
//     r.css("min-height", t);
//   }
//   l(),
//     o.resize(() => {
//       l();
//     }),
//     $.each($(".ibg"), function (e, t) {
//       $(this).find("img").length > 0 &&
//         $(this).css(
//           "background-image",
//           'url("' + $(this).find("img").attr("src") + '")'
//         );
//     });
// });

const e = $(".header__users"),
  t = $(".header__burger"),
  i = $(".header__menu"),
  n = $(".header__location"),
  s = $("body"),
  o = $(window);
function c() {
  let t = o.width();
  if (t < 390) {
    if ($.contains(i[0], n[0])) return;
    return (
      n.appendTo(i),
      n.css("margin", "0px 0px 0px 20px"),
      void e.css("margin-left", "auto")
    );
  }
  if (t > 390)
    return $.contains(i[0], n[0])
      ? (n.insertBefore(e),
        n.css("margin", "0px 15px 0px auto"),
        void e.css("margin-left", "0px"))
      : void 0;
}
t.on("click", function () {
  i.toggleClass("active"), t.toggleClass("active"), s.toggleClass("lock");
}),
  o.resize(function () {
    if (!s.hasClass("lock")) return;
    o.width() > 767 &&
      (i.removeClass("active"), t.removeClass("active"), s.removeClass("lock"));
  }),
  o.resize(c),
  c();
const a = $(".text-block__text");
a.each((e, t) => {
  const i = t.innerHTML;
  i.length >= 215 && (a[e].innerHTML = i.slice(0, 215) + "...");
});
const r = $(".text-block");
function l() {
  const e = [];
  if (o.width() < 479) return void r.css("min-height", "auto");
  r.css("min-height", "auto"),
    r.each((t, i) => {
      e.push(i.clientHeight);
    });
  const t = Math.max.apply(null, e);
  r.css("min-height", t);
}
l(),
  o.resize(() => {
    l();
  }),
  $.each($(".ibg"), function (e, t) {
    $(this).find("img").length > 0 &&
      $(this).css(
        "background-image",
        'url("' + $(this).find("img").attr("src") + '")'
      );
  });
