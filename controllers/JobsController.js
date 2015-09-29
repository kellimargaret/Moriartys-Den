moriartysDen.controller('JobsCtrl', function JobsCtrl($scope, JobsFactory) {
  $scope.jobs = JobsFactory.jobs;
  $scope.JobsFactory = JobsFactory;
});
