  $(function(){
    $(".digits").countdown({
      image: "https://dl.dropboxusercontent.com/u/3464356/ppcsamurai/maintenance_page/img/digits.png",
      format: "hh:mm:ss",
      endTime: new Date(
        1438281623317 /*ENDTIME*/
      )
    });
    $("#cnt_1").after('<div style="float: left;vertical-align: bottom;padding-top: 57px;">Hrs</div>');
    $("#cnt_3").after('<div style="float: left;vertical-align: bottom;padding-top: 57px;">Min</div>');
    $("#cnt_5").after('<div style="float: left;vertical-align: bottom;padding-top: 57px;">Sec</div>');
  });
