/*
Usage : 
$("#id").text('123456789.001').digits();
*/
(function($){
        $.fn.digits = function(){
            return this.each(
                       function(){
                                      var r = /(^[+-]?\d+)(\d{3})/;
                                      while( r.test( $(this).text() ) ){
                                              $(this).text( $(this).text().replace(/(^[+-]?\d+)(\d{3})/, "$1,$2") ); 
                                      }                                                                                                         
            })
        }
})(jQuery);