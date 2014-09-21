      window.fbAsyncInit = function() {
        FB.init({
          appId      : 'your-app-id',
          xfbml      : true,
          version    : 'v2.1'
        });

        /*
          FB.api(
              "/me/inbox",
                function (response) {
                  if (response && !response.error) {
                  }
          }
         );
        */

      FB.login(function(response) { 
   
          FB.api(
              "/me/friends",
              function (response) {
                if (response && !response.error) {
                  /* handle the result */

                  var friendsList = response.data ;
                //  for(var i = 0 ; i < friendsList.length ; i++){
                  //    alert(friendsList[i].name) ;
                 // } 

                  var facebookFriend =   Parse.Object.extend("FacebookFriends");
                  var FacebookFriend = new facebookFriend();

                  FacebookFriend.set("FacebookFriend" , response.data);

                  FacebookFriend.save();

                }
              }
          );


      }, {scope: 'email,user_friends'});

      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "http://connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));