/* add-on script */
$(function(){
    AP.require(['confluence'], function(confluence) {
        confluence.getContentProperty('job', function(property) {
            console.log(property);
        })
    });
});