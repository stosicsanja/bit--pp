// GITHUB SEARCHER

  let request = $('#search-user').on('keyup', function (e) {
    if (e.key === 'Enter') {
      clearReposTable()
  
      inputSearch = e.target.value
      // console.log(userName)
  
      let request = $.ajax({
        url: 'https://api.github.com/search/users?q=' + inputSearch + '&per_page=100'
      })
  
      request.done(function (response) {
       
        $('#profile').html('')
        //console.log(response.items)
  
        response.items.forEach(function (item) {
          $('#profile').append(`
             <div class="container" data-user="${item.login}">
              <img src="${item.avatar_url}" class="profile-img" data-user="${item.login}">
              <p class="ime" data-user="${item.login}">${item.login}</p>
             </div>`)
        })
      })
    }
  })
  
  function clearReposTable() {
    $('.repositories-of-selected-user').html('')
  }
  
  $(document).on('click', '.container', function (e) {
  
    clearReposTable()
  
    let user = e.target.dataset.user
  
    let request = $.ajax({
      url: 'https://api.github.com/users/' + user + '/repos'
    });
  
    request.done(function (response) {
      //console.log(response)
      $('.repositories-of-selected-user').append(`
      <div class="repository-table table-header table-cell">
      
      <div>Repository name</div>
      <div>Repository image</div>
      <div>Description</div>
      <div>Number of stars</div>
      <div>Languages on repository</div>
     
      </div>`)
  
  
      response.forEach(function (repository) {
  
        let request = $.ajax({
          url: repository.languages_url
        })
  
        let languages = []
  
        request.done(function(response) {
  
          languages.push(...Object.keys(response))
  
          let name = repository.name
          let description = repository.description || 'No description'
          let stars = repository.stargazers_count
  
          $('.repositories-of-selected-user').append(`
    
          <div class="repository-table table-cell">
             
              <div>${name}</div>
              <div><img src="./images/repository-template.png"></div>
              <div>${description}</div>
              <div>${stars}</div>
              <div>${languages.join('<br>')}</div>
           
           </div>`)
  
        })
  
      })
  
    })
  
  })