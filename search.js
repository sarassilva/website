 var content = [
    {
      "title": "Cloud & Cyber Security Expo",
      "text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "link":"event.html",
    },
       {
      "title": "Is PHP a good choice nowadays?",
      "text":"Currently, PHP is still at the top of the web development world. A considerable share of all websites run on this programming language, and the easy-to-use CMS Wordpress continues to gain popularity. It allows users to design and deploy their own websites on free or paid hosting platforms with just a couple of clicks. That’s why the near future of the PHP language seems bright as it will continue to evolve and be used extensively. It offers plenty of benefits like a scripting language, famous online businesses such as Yahoo, Facebook, Wikipedia, and more are using PHP scripting language. As per some statistics, 81.3% of all websites use PHP in a server-side programming language.",
      "link":"article.html",
    },
    {
      "title": "Artificial Intelligence: What you need to know",
      "text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "link":"article.html",
    },
    {
      "title": "What are the benefits of using a relational database?",
      "text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "link":"article.html",
    },
       {
      "title": "Machine Learning for beginners",
      "text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "link":"event.html",
    },
       {
      "title": "Data Science Weekend",
      "text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "link":"event.html",
    },
    {
      "title": "The Future of Cloud Computing",
      "text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "link":"event.html",
    },
    {
      "title": "Short Course - Intro to ML with Python",
      "text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "link":"event.html",
    },
    {
      "title": "Data Hackathon",
      "text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "link":"event.html",
    },
    {
      "title": "Create Mini Python Projects",
      "text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "link":"event.html",
    },
    {
      "title": "Machine Learning for Healthcare",
      "text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "link":"event.html",
    },
    {
      "title": "Learn Python Fundamentals",
      "text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "link":"event.html",
    },
  ]
  
  var render = function(data) {
    var app = document.getElementById('app');
    var booksHTMLString = '<ul>'+
      data.map(function(content){
        return '<li>'+
                "<a class='name' href='" + content.link + "'>" + content.title + "</a>" + '<br/>' +
                '<p>' + content.text + '</p>' + 
              '</li>';
      }).join('');
      + '</ul>';

    app.innerHTML = booksHTMLString;
  }
  
  //render(content); 

  var handleSearch = function(event) {
    event.preventDefault();
    // Get the search terms from the input field
    var searchTerm = event.target.elements['search'].value;
    // Tokenize the search terms and remove empty spaces
    var tokens = searchTerm
                  .toLowerCase()
                  .split(' ')
                  .filter(function(token){
                    return token.trim() !== '';
                  });
   if(tokens.length) {
    //  Create a regular expression of all the search terms
    var searchTermRegex = new RegExp(tokens.join('|'), 'gim');
    var filteredList = content.filter(function(content){
      // Create a string of all object values
      var contentString = '';
      for(var key in content) {
        if(content.hasOwnProperty(key) && content[key] !== '') {
          contentString += content[key].toString().toLowerCase().trim() + ' ';
        }
      }
      // Return book objects where a match with the search regex if found
      return contentString.match(searchTermRegex);
    });
    // Render the search results
    render(filteredList);
   }
  };

  document.addEventListener('submit', handleSearch);
  document.addEventListener('reset', function(event){
    event.preventDefault();
    render(content);
  })