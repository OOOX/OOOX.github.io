$(document).ready(function () {

  Pace.on('done', function (e) {
    $('#main-wrapper').fadeIn(400);
  });

  $("#owl-demo").owlCarousel({
    navigation : true,
    lazyLoad: true,
    lazyEffect: 'fade',
    slideSpeed : 300,
    navigation: false,
    paginationSpeed : 200,
    singleItem: true,
    autoPlay: 3000,
    navigationText: ['пред', 'след']
  });

  $('#footerContent').load('footer.html');

  var container = $('#services-container');

  $.ajax({
    url: 'data.json'
  }).done(function(data) {
    var source   = $("#services-template").html(),
        template = Handlebars.compile(source),
        html = template(data);
        container.append(html);
  });

  // $('#mainSignForm').submit(function(e) {
  //   e.preventDefault();
  //
  //   $.ajax({
  //   url: "https://formspree.io/shakhmanmaksym@gmail.com",
  //   method: "POST",
  //   data: {
  //     Имя: $('.inputName').val(),
  //     Телефон: $('.inputTel').val(),
  //     Дата: $('.inputDate').val(),
  //     Парикмахерские_услуги: $('.inputService1:checked').val(),
  //     Косметология: $('.inputService2:checked').val(),
  //     Ногтевой_сервис: $('.inputService3:checked').val(),
  //     Депиляция: $('.inputService4:checked').val(),
  //     Массаж: $('.inputService5:checked').val(),
  //     Визаж: $('.inputService6:checked').val()
  //   },
  //   dataType: "json"
  //   }).done(function () {
  //       $('#doneModal').modal({show:true});
  //       $('.inputName').val('');
  //       $('.inputTel').val('');
  //       $('.inputDate').val('');
  //   }).fail(function () {
  //       console.log('error');
  //       });
  // });

  $('.navbar .dropdown-menu li a').click(function(){
      $('.navbar-toggle:visible').click();
   });


  $("#scrollSpy ul li a[href^='#']").on('click', function(e) {
     e.preventDefault();
     var hash = this.hash;
     $('html, body').animate({
         scrollTop: $(hash).offset().top - 150
       }, 800, function(){
         window.location.hash = hash;
       });
  });


  $(".dropdown ul li a[href^='#']").on('click', function(e) {
     e.preventDefault();
     var hash = this.hash;
     $('html, body').animate({
         scrollTop: $(hash).offset().top - 150
       }, 800, function(){
         window.location.hash = hash;
       });
  });


  $(".sidebar__nav-affix").affix({
      offset: {
          top: 150,
          bottom: function() {
              return (this.bottom = $(".contact-form-wrapper").outerHeight(true) + 600);
          }
      }
  });


  $('body').on('click', '.back-to-top', function (e) {
  e.preventDefault();
  $('html, body').animate({scrollTop: 0}, 800);
}).on('click', '.to-sign-form', function (e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $('.contact-form-wrapper').offset().top - 150
    }, 800);
});

  $( "#departure" ).dateDropper({
    lang: 'ru',
    lock: 'from',
    init_animation: 'dropDown',
    dropPrimaryColor: '#84A113',
    dropBorder: '#326876',
    dropBorderRadius: 0,
    dropWidth: 150,
    format: 'd-m-Y'
  });

  $('#mainSignForm').validator().on('submit', function (e) {

    if (e.isDefaultPrevented()) {
      // handle the invalid form...
    } else {
      // everything looks good!
      e.preventDefault();

      $.ajax({
        url: "https://formspree.io/shakhmanmaksym@gmail.com",
        method: "POST",
        data: {
          Имя: $('.inputName').val(),
          Телефон: $('.inputTel').val(),
          Дата: $('.inputDate').val(),
          Парикмахерские_услуги: $('.inputService1:checked').val(),
          Косметология: $('.inputService2:checked').val(),
          Ногтевой_сервис: $('.inputService3:checked').val(),
          Депиляция: $('.inputService4:checked').val(),
          Массаж: $('.inputService5:checked').val(),
          Визаж: $('.inputService6:checked').val()
        },
        dataType: "json"

      }).done(function () {
          $('#doneModal').modal({show:true});
          $('.inputName').val('');
          $('.inputTel').val('');
          $('.inputDate').val('');
          $('.checkbox input').prop('checked', false);
      }).fail(function () {
          console.log('error');
          });
    };
  });


});
