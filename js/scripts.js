// Scrolling Navigation
var $root = $('html, body');
$('.navbar-nav a').click(function() {
  var href = $.attr(this, 'href');
  $root.animate({
    scrollTop: $(href).offset().top
  }, 500, function () {
    window.location.hash = href;
  });
  return false;
});
$('.glambyadelina a').click(function() {
  var href = $.attr(this, 'href');
  $root.animate({
    scrollTop: $(href).offset().top
  }, 500, function () {
    window.location.hash = href;
  });
  return false;
});
$('.glambyadelina a').click(function() {
  var href = $.attr(this, 'href');
  $root.animate({
    scrollTop: $(href).offset().top
  }, 500, function () {
    window.location.hash = href;
  });
  return false;
});
$('.booking-btn a').click(function() {
  var href = $.attr(this, 'href');
  $root.animate({
    scrollTop: $(href).offset().top
  }, 500, function () {
    window.location.hash = href;
  });
  return false;
});
$('.specials a').click(function() {
  var href = $.attr(this, 'href');
  $root.animate({
    scrollTop: $(href).offset().top
  }, 500, function () {
    window.location.hash = href;
  });
  return false;
});

// Navbar Retract
$(".navbar-nav li a").click(function(event) {
  if (!$(this).parent().hasClass('dropdown'))
  $(".navbar-collapse").collapse('hide');
});

// Yelp Review Carousel
var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
  showDivs(slideIndex += n);
}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("yelp-review");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

// Service Tabs
$('.gridtab-2').gridtab({
  grid: 6,
  borderWidth: 3,
  contentPadding: 40,
  config:{
    layout:'tab'
  },
  responsive: [{
    breakpoint: 1024,
    settings: {
      grid: 4,
    }
  }, {
    breakpoint: 767,
    settings: {
      grid: 3,
      contentPadding: 20
    }
  }, {
      breakpoint: 520,
      settings: {
        grid: 2
      }
  }]
});


// Lightbox
(function($) {

  $.fn.bsPhotoGallery = function(options) {

    var settings = $.extend({}, $.fn.bsPhotoGallery.defaults, options);
    var id = generateId();
    var classesString = settings.classes;
    var classesArray = classesString.split(" ");
    var clicked = {};

    function getCurrentUl(){
      return 'ul[data-bsp-ul-id="'+clicked.ulId+'"][data-bsp-ul-index="'+clicked.ulIndex+'"]';
    }
    function generateId() {
      var ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var ID_LENGTH = 4;
      var out = '';
      for (var i = 0; i < ID_LENGTH; i++) {
        out += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
      }
      return 'bsp-'+out;
    }
    function createModalWrap(){
      if($('#bsPhotoGalleryModal').length !== 0){
        return false;
      }
      var modal = '';
      modal += '<div class="modal fade" id="bsPhotoGalleryModal" tabindex="-1" role="dialog"';
      modal += 'aria-labelledby="myModalLabel" aria-hidden="true">';
      modal += '<div class="modal-dialog modal-lg"><div class="modal-content">';
      modal += '<div class="modal-body"></div></div></div></div>';
      $('body').append(modal);
    }
    function showHideControls(){
      var total = $(getCurrentUl()+' li[data-bsp-li-index]').length;
      if (total === clicked.nextImg){
        $('a.next').hide();
      } else {
        $('a.next').show()
      }
      if(clicked.prevImg === -1){
        $('a.previous').hide();
      }else{
        $('a.previous').show()
      }
    }
    function showModal(){

      var src = $(this).find('img').attr('src');
      var largeImg = $(this).find('img').attr('data-bsp-large-src');
      if(typeof largeImg === 'string'){
            src = largeImg;
      }
      var index = $(this).attr('data-bsp-li-index');
      var ulIndex = $(this).parent('ul').attr('data-bsp-ul-index');
      var ulId = $(this).parent('ul').attr('data-bsp-ul-id');
      var theImg = $(this).find('img');
      var pText = $(this).find('.text').html();
      var modalText = typeof pText !== 'undefined' ? pText : 'undefined';
      var alt =  typeof theImg.attr('alt') == 'string' ? theImg.attr('alt') : null;

      clicked.img = src;
      clicked.prevImg = parseInt(index) - parseInt(1);
      clicked.nextImg = parseInt(index) + parseInt(1);
      clicked.ulIndex = ulIndex;
      clicked.ulId = ulId;


      $('#bsPhotoGalleryModal').modal();

      var html = '';
      var img = '<img src="' + clicked.img + '" class="img-responsive"/>';

      html += img;
      html += '<span class="' + settings.iconClose + ' bsp-close"></span>';
      html += '<div class="bsp-text-container">';

      if(alt !== null){
        html += '<h6>'+alt+'</h6>'
      }
      if(typeof pText !== 'undefined'){
        html += '<p class="pText">'+pText+'</p>'
      }
      html += '</div>';
      html += '<a class="bsp-controls next" data-bsp-id="'+clicked.ulId+'" href="'+ (clicked.nextImg) + '"><span class="' + settings.iconRight + '"></span></a>';
      html += '<a class="bsp-controls previous" data-bsp-id="'+clicked.ulId+'" href="' + (clicked.prevImg) + '"><span class="' + settings.iconLeft + '"></span></a>';

      $('#bsPhotoGalleryModal .modal-body').html(html);
      $('.bsp-close').on('click', closeModal);
      showHideControls();
    }

    function closeModal(){
      $('#bsPhotoGalleryModal').modal('hide');
    }

    function nextPrevHandler(){

        var ul = $(getCurrentUl());
        var index = $(this).attr('href');

        var src = ul.find('li[data-bsp-li-index="'+index+'"] img').attr('src');
        var largeImg = ul.find('li[data-bsp-li-index="'+index+'"] img').attr('data-bsp-large-src');
        if(typeof largeImg === 'string'){
              src = largeImg;
        }

        var pText = ul.find('li[data-bsp-li-index="'+index+'"] .text').html();
        var modalText = typeof pText !== 'undefined' ? pText : 'undefined';
        var theImg = ul.find('li[data-bsp-li-index="'+index+'"] img');
        var alt =  typeof theImg.attr('alt') == 'string' ? theImg.attr('alt') : null;

        $('#bsPhotoGalleryModal .modal-body img').attr('src', src);
        var txt = '';
        if(alt !== null){
          txt += '<h6>'+alt+'</h6>'
        }
        if(typeof pText !== 'undefined'){
          txt += '<p class="pText">'+pText+'</p>'
        }

        $('.bsp-text-container').html(txt);

        clicked.prevImg = parseInt(index) - 1;
        clicked.nextImg = parseInt(clicked.prevImg) + 2;

        if($(this).hasClass('previous')){
          $(this).attr('href', clicked.prevImg);
          $('a.next').attr('href', clicked.nextImg);
        }else{
          $(this).attr('href', clicked.nextImg);
          $('a.previous').attr('href', clicked.prevImg);
        }
        // console.log(clicked);
      showHideControls();
      return false;
    }
    function clearModalContent(){
      $('#bsPhotoGalleryModal .modal-body').html('');
      clicked = {};
    }
    function insertClearFix(el,x){
      var index = (x+1);
      $.each(classesArray,function(e){
          switch(classesArray[e]){
            //large
            case "col-lg-1":
              if($(el).next('li.clearfix').length == 0){
                $(el).after('<li class="clearfix visible-lg-block"></li>');
              }
            break;
            case "col-lg-2":
              if(index%6 === 0){
                $(el).after('<li class="clearfix visible-lg-block"></li>');
              }
            break;
            case "col-lg-3":
            if(index%4 === 0){
              $(el).after('<li class="clearfix visible-lg-block"></li>');
            }
            break;
            case "col-lg-4":
            if(index%3 === 0){
              $(el).after('<li class="clearfix visible-lg-block"></li>');
            }
            break;
            case "col-lg-5":
            case "col-lg-6":
            if(index%2 === 0){
              $(el).after('<li class="clearfix visible-lg-block"></li>');
            }
            break;
            //medium
            case "col-md-1":
                if($(el).next('li.clearfix').length == 0){
                  $(el).after('<li class="clearfix visible-md-block"></li>');
                }
            break;
            case "col-md-2":
              if(index%6 === 0){
                $(el).after('<li class="clearfix visible-md-block"></li>');
              }
            break;
            case "col-md-3":
            if(index%4 === 0){
              $(el).after('<li class="clearfix visible-md-block"></li>');
            }
            break;
            case "col-md-4":
            if(index%3 === 0){
              $(el).after('<li class="clearfix visible-md-block"></li>');
            }
            break;
            case "col-md-5":
            case "col-md-6":
            if(index%2 === 0){
              $(el).after('<li class="clearfix visible-md-block"></li>');
            }
            break;
            //small
            case "col-sm-1":
                if($(el).next('li.clearfix').length == 0){
                  $(el).after('<li class="clearfix visible-sm-block"></li>');
                }
            break;
            case "col-sm-2":
              if(index%6 === 0){
                $(el).after('<li class="clearfix visible-sm-block"></li>');
              }
            break;
            case "col-sm-3":
            if(index%4 === 0){
              $(el).after('<li class="clearfix visible-sm-block"></li>');
            }
            break;
            case "col-sm-4":
            if(index%3 === 0){
              $(el).after('<li class="clearfix visible-sm-block"></li>');
            }
            break;
            case "col-sm-5":
            case "col-sm-6":
            if(index%2 === 0){
              $(el).after('<li class="clearfix visible-sm-block"></li>');
            }
            break;
            //x-small
            case "col-xs-1":
                if($(el).next('li.clearfix').length == 0){
                  $(el).after('<li class="clearfix visible-xs-block"></li>');
                }
            break;
            case "col-xs-2":
              if(index%6 === 0){
                $(el).after('<li class="clearfix visible-xs-block"></li>');
              }
            break;
            case "col-xs-3":
            if(index%4 === 0){
              $(el).after('<li class="clearfix visible-xs-block"></li>');
            }
            break;
            case "col-xs-4":
            if(index%3 === 0){
              $(el).after('<li class="clearfix visible-xs-block"></li>');
            }
            break;
            case "col-xs-5":
            case "col-xs-6":
            if(index%2 === 0){
              $(el).after('<li class="clearfix visible-xs-block"></li>');
            }
            break;
         }
      });
    }


    this.each(function(i){
      //ul
      var items = $(this).find('li');
      $(this).attr('data-bsp-ul-id', id);
      $(this).attr('data-bsp-ul-index', i);

      items.each(function(x){
        var theImg = $(this).find('img');
        insertClearFix(this,x);
        $(this).addClass(classesString);
        $(this).attr('data-bsp-li-index', x);
        theImg.addClass('img-responsive');
        if(settings.fullHeight){
          theImg.wrap('<div class="imgWrapper"></div>')
        }
        if(settings.hasModal === true){
          $(this).addClass('bspHasModal');
          $(this).on('click', showModal);
        }
      });
    })

    if(settings.hasModal === true){
      //this is for the next / previous buttons
      $(document).on('click', 'a.bsp-controls[data-bsp-id="'+id+'"]', nextPrevHandler);
      $(document).on('hidden.bs.modal', '#bsPhotoGalleryModal', clearModalContent);
      //start init methods
      createModalWrap();
    }

    return this;
  };
  /*defaults*/
  $.fn.bsPhotoGallery.defaults = {
    'classes' : 'col-lg-2 col-md-2 col-sm-3 col-xs-4',
    'hasModal' : true,
    'fullHeight' : true,
    'iconClose' : 'glyphicon glyphicon-remove-circle',
    'iconLeft' : 'glyphicon glyphicon-chevron-left',
    'iconRight' : 'glyphicon glyphicon-chevron-right'
  }
}(jQuery));


$(document).ready(function(){
  $('.boxInner img').on('click',function(){
    var src = $(this).attr('src');
    var img = '<img src="' + src + '" class="img-responsive"/>';
    $('#myModal').modal();
    $('#myModal').on('shown.bs.modal', function(){
        $('#myModal .modal-body').html(img);
    });
    $('#myModal').on('hidden.bs.modal', function(){
        $('#myModal .modal-body').html('');
    });
  });
})
