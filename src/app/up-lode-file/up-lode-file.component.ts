import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-up-lode-file',
  templateUrl: './up-lode-file.component.html',
  styleUrls: ['./up-lode-file.component.css']
})
export class UpLodeFileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  upload(){

    
  }
  // angular.module('app', [])
  // .controller('ctrl', function ($scope, $http) {
  //     $scope.upload = function () {
  //         var fd = new FormData();
  //         fd.append('firstName', $scope.details.firstName);
  //         fd.append('lastName', $scope.details.lastName);
  //         fd.append('file', document.getElementById('file').files[0]);

  //         $http({
  //             url: '/home/upload',
  //             method: 'POST',
  //             data: fd,
  //             headers: { 'Content-Type': undefined },
  //             transformRequest: angular.identity
  //         }).then(function (res) {
  //             console.log(res.data);
  //         });
  //     };
  // });
}
