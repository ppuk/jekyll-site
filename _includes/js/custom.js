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
