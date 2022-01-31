Foundation.Interchange.SPECIAL_QUERIES['medium down'] = 'screen and (max-width: 63.9375em)';
$(document).foundation();
$(document).on('replaced.zf.interchange', function(e)
{
  $(this).foundation();
});
$("button[data-toggle]").on("click", function()
{
  if ($(this).parent().hasClass("js-button-toggled"))
  {
    $(this).parent().removeClass("js-button-toggled");
  }
  else
  {
    $(this).parent().addClass("js-button-toggled");
  }
});
window.onload = function() {};

var back_top = function() {
  $(window).scroll(function() {
      if ($(this).scrollTop() > 50 ) {
          $('.scrolltop:hidden').stop(true, true).fadeIn();
      } else {
          $('.scrolltop').stop(true, true).fadeOut();
      }
  });
  $(function(){
    $(".scroll").click(function(){
      $("html,body").animate(
        {scrollTop: $(".thetop").offset().top}, "1000");
      return false
    }
  )});
}

/**
 * @param {collection} data
 **/
var show_relatives = function(data) {
  var ul = $("#relatives");
  if(ul.length) {
    var global_tags = data[0];

    if(!page_tags.length) {
      $('#relatives-box').hide();
    }

    $.each(page_tags, function(index, tag) {
      $.each(global_tags[tag], function(index, post) {
        if(post.url != page_url) {
          var li = $('<li/>').appendTo(ul);
          var a = $('<a/>').text(post.title).attr('href',post.url).appendTo(li);
        }
      });
    });
  }
}
