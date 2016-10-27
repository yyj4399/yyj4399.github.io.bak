window.onload=function(){
    var this_url = window.location.host;
    var ajax_url = '';
    if(this_url == 'git_view.local.xyz'){
        ajax_url='http://git_back.local.xyz/';
    } else {
        ajax_url='https://www.cloudring.cc/';
    }
    console.log($.get(ajax_url+'github/index/index'));
}
