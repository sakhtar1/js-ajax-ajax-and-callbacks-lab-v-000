$(document).ready(function (){
    function searchRepositories(event, data) {
    const repos = JSON.parse(this.responseText);
    const src = document.getElementById('repository-template').innerHTML;
    const template = Handlebars.compile(src);
    const repoList = template(repos);
    document.getElementById('repositories').innerHTML = repoList;
  }

    function showCommits() {
      const commits = JSON.parse(this.responseText)
      const commitsList = `<ul>${commits.map(commit => '<li><strong>' + commit.sha + commit.author.name + '</strong> - ' + commit.author.login + commit.author.avatar_url + '</li>').join('')}</ul>`
      document.getElementById("commits").innerHTML = commitsList
  }


  $.get('this_doesnt_exist.html', function(data) {
    // This will not be called because the .html file request doesn't exist
    displayError();
  }).fail(function(error) {
      // This is called when an error occurs
      console.log( "I'm sorry, there's been an error. Please try again." + error.statusText);
  });
});
