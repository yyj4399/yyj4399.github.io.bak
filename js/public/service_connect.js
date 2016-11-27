app.service('$connect', function($http,$q) {
  this.this_url = window.location.host;
  if(this.this_url == 'git_view.local.xyz'){
    this.link_url='http://git_back.local.xyz/github/';
  } else {
    this.link_url='https://www.cloudring.cc/github/';
  }
	this.get = function (address, call_back, send_data) {
    $http.get(this.link_url + address, {withCredentials: true, params: send_data}).success(function(response){
      call_back(response);
    });
  };
	this.post = function (address, call_back, send_data) {
    $http.post(this.link_url + address, send_data, {withCredentials: true}).success(function(response){
      call_back(response);
    });
  };
});
