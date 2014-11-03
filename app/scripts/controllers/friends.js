'use strict';

/**
 * @ngdoc function
 * @name partyFinderApp.controller:
 * @description
 * Controller of the partyFinderApp
 */
angular.module('partyFinderApp')
  .controller('FriendsCtrl', function ($scope) {
    $scope.friendList = [
      {
      	'name': 'Rachel Green',
      	'location': '1524 Chicago Ave',
      	'image': 'https://pbs.twimg.com/profile_images/2418446743/image.jpg'
      },
      {
      	'name': 'Joey Tribbiani',
      	'location': '555 Lincoln St',
      	'image': 'http://storm.usc.edu/~kathytra/IML-400/assignment-6/images/JoeyHead.jpg'
      },
      {
      	'name': 'Monica Geller',
      	'location': '1042 Garnett St',
      	'image': 'http://hellogiggles.com/wp-content/uploads/2014/07/25/Rachel-Monica-friends-22472100-500-500.jpg'
      },
      {
      	'name': 'Chandler Bing',
      	'location': '2285 Sheridan Rd',
      	'image': 'https://pbs.twimg.com/profile_images/2484089403/image.jpg'
      },
      {
      	'name': 'Phoebe Buffay',
      	'location': '720 Noyes St',
      	'image': 'http://i1132.photobucket.com/albums/m571/Akini_Morris/phoebe_buffay_zpsa647dec8.jpg'
      },
      {
      	'name': 'Ross Geller',
      	'location': '2235 Ridge Ave',
      	'image': 'http://skeletonscribble.files.wordpress.com/2013/06/ross.jpg'
      }
    ];
  });
