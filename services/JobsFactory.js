moriartysDen.factory('JobsFactory', function JobsFactory() {
  var factory = {};
  factory.jobs = [
    {
      jobTitle: "Bank Heist",
      jobDescription: "Steal a bunch of money from the bank and keep it for ourselves",
      jobId: 1,
      jobCategory: "Heist",
      jobImg: "css/img/mrcrabs.gif"
    },
    {
      jobTitle: "Kidnapping",
      jobDescription: "Kidnap a high profile figure and hold for ransom",
      jobId: 2,
      jobCategory: "Kidnapping",
      jobImg: "css/img/ransom.gif"
    },
    {
      jobTitle: "Jewelry Heist",
      jobDescription: "Steal the Royal jewels and switch them with fakes",
      jobId: 3,
      jobCategory: "Jewelry Heist",
      jobImg: "css/img/jewelthief.gif"
    }

  ];


  return factory;
});
