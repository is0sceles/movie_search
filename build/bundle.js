(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('react'), require('react-dom')) :
	typeof define === 'function' && define.amd ? define(['react', 'react-dom'], factory) :
	(factory(global.React,global.ReactDOM));
}(this, (function (React,reactDom) { 'use strict';

var React__default = 'default' in React ? React['default'] : React;

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Reviews = function (_Component) {
  inherits(Reviews, _Component);

  function Reviews(props) {
    classCallCheck(this, Reviews);

    var _this = possibleConstructorReturn(this, (Reviews.__proto__ || Object.getPrototypeOf(Reviews)).call(this, props));

    var movieId = _this.props.movieId;
    _this.state = {
      movieId: movieId,
      review: '',
      imageUrl: ''
    };
    return _this;
  }

  createClass(Reviews, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.props.reviews[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var i = _step.value;

          if (i['movie-id'] === this.state.movieId) {
            this.setState({ review: i.review });
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.props.movies[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _i = _step2.value;

          if (_i.id === this.state.movieId) {
            this.setState({ imageUrl: _i['cover-url'] });
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: 'render',
    value: function render$$1() {
      return React__default.createElement(
        'div',
        { className: 'movie_review' },
        React__default.createElement(
          'div',
          { className: 'row' },
          React__default.createElement(
            'div',
            { className: 'col-xs-6' },
            React__default.createElement('img', { className: 'card-img-top', src: this.state.imageUrl })
          ),
          React__default.createElement(
            'div',
            { className: 'col-xs-6' },
            React__default.createElement(
              'p',
              null,
              this.state.review
            )
          )
        )
      );
    }
  }]);
  return Reviews;
}(React.Component);

var Movies = function (_React$Component) {
  inherits(Movies, _React$Component);

  function Movies(props) {
    classCallCheck(this, Movies);

    var _this = possibleConstructorReturn(this, (Movies.__proto__ || Object.getPrototypeOf(Movies)).call(this, props));

    _this.state = {
      movies: _this.props.data.movies,
      reviews: _this.props.data.reviews,
      search: '',
      yearsToDecades: {},
      filteredMovies: [],
      filteredYears: [],
      showItems: [],
      dropDownVal: ''
    };
    // bind context
    _this.filterSearch = _this.filterSearch.bind(_this);
    _this.onDropDownSelect = _this.onDropDownSelect.bind(_this);
    // compute decades
    _this.state.movies.forEach(function (movie) {
      var years = movie.year;
      var decades = Math.floor(years / 10) * 10;
      _this.state.yearsToDecades[decades] = $.merge(_this.state.yearsToDecades[decades] || [], [years]);
    });
    // populate dropDown when constructor is called
    _this.createDecadeDropDown();
    return _this;
  }
  // filter movie results based on chosen decade


  createClass(Movies, [{
    key: 'onDropDownSelect',
    value: function onDropDownSelect(e) {
      this.setState({
        filteredYears: this.state.yearsToDecades[e.target.value],
        dropDownVal: e.target.value
      });
    }
    // handling reviews (child) component by item clicked

  }, {
    key: 'onExpand',
    value: function onExpand(index) {
      var showItems = this.state.showItems.slice(0);
      showItems[index] = !showItems[index];
      this.setState({ showItems: showItems });
    }
    // dynamically create decade options for dropDown

  }, {
    key: 'createDecadeDropDown',
    value: function createDecadeDropDown() {
      var options = [React__default.createElement(
        'option',
        { key: 1, value: 'default' },
        'All Years'
      )];
      if (options.length === 1) {
        for (var decades in this.state.yearsToDecades) {
          options.push(React__default.createElement(
            'option',
            { key: Math.random(decades / 20), value: decades },
            decades
          ));
        }
      }
      return options;
    }
    // filter movie results based on input search

  }, {
    key: 'filterSearch',
    value: function filterSearch(e) {
      this.setState({
        search: e.target.value
      });
    }
  }, {
    key: 'render',
    value: function render$$1() {
      var _this2 = this;

      if (this.state.filteredYears === undefined) {
        this.state.filteredYears = [];
      }
      // filter for title and decade search
      this.state.filteredMovies = this.state.movies.filter(function (movie) {
        var result = '';
        if (!_this2.state.filteredYears.length) {
          result = movie.title.toLowerCase().indexOf(_this2.state.search.toLowerCase()) !== -1;
        }
        if (_this2.state.filteredYears.indexOf(movie.year) !== -1) {
          result = movie.title.toLowerCase().indexOf(_this2.state.search.toLowerCase()) !== -1;
        }
        return result;
      });
      return React__default.createElement(
        'div',
        null,
        React__default.createElement(
          'div',
          { className: 'filter-list' },
          React__default.createElement(
            'form',
            null,
            React__default.createElement(
              'fieldset',
              { className: 'form-group' },
              'Title contains',
              React__default.createElement('input', {
                type: 'text',
                placeholder: 'Search by title',
                onChange: this.filterSearch,
                value: this.state.search
              })
            )
          )
        ),
        React__default.createElement(
          'div',
          { className: 'drop-down' },
          'Decade',
          React__default.createElement(
            'select',
            {
              id: 'select-decade',
              onChange: this.onDropDownSelect,
              value: this.state.dropDownVal
            },
            this.createDecadeDropDown()
          )
        ),
        React__default.createElement(
          'div',
          { className: 'card' },
          React__default.createElement(
            'ul',
            { className: 'list-group list-group-flush' },
            this.state.filteredMovies.sort(function (a, b) {
              var A = a.title;
              var B = b.title;
              return A < B ? -1 : A > B ? 1 : 0;
            }).map(function (movie, index) {
              return React__default.createElement(
                'li',
                {
                  className: 'list-group-item',
                  key: movie.id
                },
                React__default.createElement(
                  'span',
                  { className: 'movie-score' },
                  ' ',
                  movie.score * 100,
                  '% '
                ),
                React__default.createElement(
                  'a',
                  { className: 'card-link', href: movie.url },
                  movie.title
                ),
                React__default.createElement(
                  'span',
                  { className: 'expand', onClick: _this2.onExpand.bind(_this2, index) },
                  React__default.createElement(
                    'span',
                    { className: 'info' },
                    ' Released: ',
                    movie.year,
                    ' '
                  )
                ),
                _this2.state.showItems[index] ? React__default.createElement(Reviews, { reviews: _this2.state.reviews, movieId: movie.id, movies: _this2.state.movies }) : null
              );
            })
          )
        )
      );
    }
  }]);
  return Movies;
}(React__default.Component);

var reviews = [{ "movie-id": 1, "review": "Loved this movie! Cerebral, engaging science fiction at its best. Do yourself a favor and don't watch any trailers or read anything about it before seeing it. You won't be disappointed!" }, { "movie-id": 2, "review": "Another fantastic science fiction, shot on an insanely low budget. Fun fact: there was actually no script for this movie. The director gave each actor/actress note cards the day-of filming with character motivations and suspicions, and the actors improvised the actual dialogue and acting. So, so, SO GOOD!" }, { "movie-id": 3, "review": "I know this movie got a lot of flak when it came out, with many disliking it passionately. I first saw it in IMAX and I was really emotionally moved by it's poignancy. I think the film posits the idea that the universe is so incomprehensibly huge that the only way to make sense of our place in it is with the human relationships we have with each other. The whole \"love will guide me\" trope is cliché, agreed, but that isn't going to stop me from really enjoying this moive for the spectacle it offers." }, { "movie-id": 4, "review": "One of my favorite space movies of all time. Makes me both incredibly proud as a member of the human race and incredibly frustrated we haven't done anything in space remotely close to what we did in the 60's & 70's since. NASA is awesome, and this film really feels great to watch. Not to mention it has an excellent musical score." }, { "movie-id": 5, "review": "Basically a one-man show with Sam Rockwell, this is a fantastic movie and directorial debut by Duncan Jones. You'll enjoy it most if you go in not knowing anything. One of the things I love most about this film is how it plays with your understanding of \"the twist\": this movie is smart." }, { "movie-id": 6, "review": "Duncan Jones' second film, equally smart science fiction as Moon. A really fun action-y mental trip through a seemingly normal sequence of events that gets progressively weirder as you dive deeper into the rabbit hole. Great film, great acting, great directing." }, { "movie-id": 7, "review": "The sci-fi film that started it all, I can hardly make this list without including this classic. I recently saw this at the San Francisco Symphony Hall, orchestrated by the symphony and choir, and it was incredible." }, { "movie-id": 8, "review": "Another classic science fiction film, Blade Runner is a must-see. It's thought-provoking and engaging, leaving you questioning whether or not Deckard is a hero or an anti-hero. Take your time with this movie and let it soak in." }, { "movie-id": 9, "review": "This is one of the best classical science fiction films ever. There's a live-action remake coming out soon that also looks pretty good, but it won't beat the original. The film is as much art as it is entertainment. There's an excellent NerdWriter analysis of this on YouTube that I highly recommend watching." }, { "movie-id": 10, "review": "I've also watched the classic version of this too, but for some reason I prefer the remake, personally. It's hauntingly beautiful and the soundtrack is ASMR-inducing. It's a very slow movie (the original is even slower), so be warned." }, { "movie-id": 11, "review": "With the discovery of CRISPR, I feel like this might not be too far-future science fiction. Very much a social commentary on what it would mean for humans to be genetically designed. Great acting and an engaging plot." }, { "movie-id": 12, "review": "I actually found out about this movie by seeing a movie poster for a screening on the sidewalk in SF randomly, and I'm so glad I followed through to finding it an watching it. A fantastic (and fantastical) science fiction story that starts slow then really starts to screw with your brain. Gravity is one of those things that we take for granted that it's really cool to see a movie play with our basic understanding of it." }, { "movie-id": 13, "review": "I wasn't expecting to like this movie as much as I did. It feels at first like your average slice-of-life film about high schoolers, but the deeper you get into the movie, the more you realize how interconnected things are and how layered the film has been from the start. Like all great time-travel movies, the depth and intersection of the plot lines keeps you really engaged." }, { "movie-id": 14, "review": "Beautifully shot and cerebral, not to mention the acting is really good here too. Chistopher is one of my favorite directors for a reason. Lots of the crazy action scenes were shot \"in real life\" (meaning no CG), which makes them even more impressive!" }, { "movie-id": 15, "review": "One of the better movies relating to time. Hard to say more without spoiling it. One of Tom Cruises better performances (though typical), and Emily Blunt is a total bad-ass. Definitely worth seeing!" }, { "movie-id": 16, "review": "One of the random movies I picked up at Blockbuster (haha, remember those?) back in the day because the cover looked cool. Aaronofsky's tale about the mathematician who discovers the pattern in π, realizes how powerful it is, and subsequently goes mad. It's a rough movie to watch (visually), but its primal nature is part of its appeal." }, { "movie-id": 17, "review": "The best time travel movie ever. Full Stop. Nothing else comes close. There's nothing more I need to say about this." }, { "movie-id": 18, "review": "Very art-haus, as you would expect from Von Trier. The movie is as close as you can get to the physical manifestation of depression, and it is very depressing to watch. But it is beautiful and haunting." }, { "movie-id": 19, "review": "Spielberg classic sci-fi. This was one of the first films that really got me into the genre and it's a classic." }, { "movie-id": 20, "review": "Unapologetic and socially charged, District 9 is also smart and visually stunning--particularly when you see the budget spent on the movie. Plus, you gotta love Sharlto Copley's entrance to the silver screen. Love that guy." }, { "movie-id": 21, "review": "I absolutely loved the book, and the movie turned out much better than I was expecting it would. If you haven't read the book, I highly recommend it, but the movie stays truthful (for the most part) to the book. Another movie about how awesome NASA is (or could be)." }, { "movie-id": 22, "review": "Another fantastic movie that's a bit more action-y than others on this list. You think you know where it's going, then it throws you for a ringer. Or looper. :P" }, { "movie-id": 23, "review": "The scene at the end with Ed Harris screaming at Mary Elizabeth Mastrantonio to come back to life gets me every... single... time. Then to follow it up with Harris' deep dive (and the dialog that follows with Mastrantonio)... ugh. What a tear-jerker!" }, { "movie-id": 24, "review": "The animation and acting in this movie are amazing, so is the unsettling nature of the plot. It doesn't shy away from the more difficult questions of what it would mean for man to make AI and what our relationship to it might be." }];
var movies = [{ "id": 1, "title": "Arrival", "year": 2016, "score": 0.94, "director": "Denis Villeneuve", "url": "https://www.rottentomatoes.com/m/arrival_2016", "synopsis": "When mysterious spacecraft touch down across the globe, an elite team--lead by expert linguist Louise Banks (Amy Adams)--are brought together to investigate. As mankind teeters on the verge of global war, Banks and the team race against time for answers--and to find them, she will take a chance that could threaten her life, and quite possibly humanity.", "rating": "pg-13", "runtime-in-minutes": 116, "oscar-nominations": 8, "oscars": 1, "cover-url": "assets/arrival-2016.jpg" }, { "id": 2, "title": "Coherence", "year": 2013, "score": 0.88, "director": "James Ward Byrkit", "url": "https://www.rottentomatoes.com/m/coherence_2013", "synopsis": "On the night of an astronomical anomaly, eight friends at a dinner party experience a troubling chain of reality bending events. Part cerebral sci-fi and part relationship drama, COHERENCE is a tightly focused, intimately shot film whose tension intensely ratchets up as its numerous complex mysteries unfold.", "rating": "nr", "runtime-in-minutes": 89, "oscar-nominations": 0, "oscars": 0, "cover-url": "assets/coherence-2013.jpg" }, { "id": 3, "title": "Interstellar", "year": 2014, "score": 0.71, "director": "Christopher Nolan", "url": "https://www.rottentomatoes.com/m/interstellar_2014", "synopsis": "With our time on Earth coming to an end, a team of explorers undertakes the most important mission in human history; traveling beyond this galaxy to discover whether mankind has a future among the stars.", "rating": "pg-13", "runtime-in-minutes": 169, "oscar-nominations": 5, "oscars": 1, "cover-url": "assets/interstellar-2014.jpg" }, { "id": 4, "title": "Apollo 13", "year": 1995, "score": 0.95, "director": "Ron Howard", "url": "https://www.rottentomatoes.com/m/apollo_13", "synopsis": "\"Houston, we have a problem.\" Those words were immortalized during the tense days of the Apollo 13 lunar mission crisis in 1970, events recreated in this epic historical drama from Ron Howard. Astronaut Jim Lovell (Tom Hanks) leads command module pilot Jack Swigert (Kevin Bacon) and lunar module driver Fred Haise (Bill Paxton) on what is slated as NASA's third lunar landing mission. All goes smoothly until the craft is halfway through its mission, when an exploding oxygen tank threatens the crew's oxygen and power supplies. As the courageous astronauts face the dilemma of either suffocating or freezing to death, Mattingly and Mission Control leader Gene Kranz (Ed Harris) struggle to find a way to bring the crew back home, all the while knowing that the spacemen face probable death once the battered ship reenters the Earth's atmosphere.", "rating": "pg", "runtime-in-minutes": 140, "oscar-nominations": 9, "oscars": 2, "cover-url": "assets/apollo-13-1995.jpg" }, { "id": 5, "title": "Moon", "year": 2009, "score": 0.89, "director": "Duncan Jones", "url": "https://www.rottentomatoes.com/m/10009075_moon", "synopsis": "An astronaut miner extracting the precious moon gas that promises to reverse the Earth's energy crisis nears the end of his three-year contract, and makes an ominous discovery in this psychological sci-fi film starring Sam Rockwell and Kevin Spacey. For three long years, Sam Bell has dutifully harvested Helium 3 for Lunar, a company that claims it holds the key to solving humankind's energy crisis. As Sam's contract comes to an end, the lonely astronaut looks forward to returning to his wife and daughter down on Earth, where he will retire early and attempt to make up for lost time. His work on the Selene moon base has been enlightening -- the solitude helping him to reflect on the past and overcome some serious anger issues -- but the isolation is starting to make Sam uneasy. With only two weeks to go before he begins his journey back to Earth, Sam starts feeling strange: he's having inexplicable visions, and hearing impossible sounds. Then, when a routine extraction goes horribly awry, it becomes apparent that Lunar hasn't been entirely straightforward with Sam about their plans for replacing him. The new recruit seems strangely familiar, and before Sam returns to Earth, he will grapple with the realization that the life he has created may not be entirely his own. Up there, hundreds of thousands of miles from home, it appears that Sam's contract isn't the only thing about to expire.", "rating": "r", "runtime-in-minutes": 97, "oscar-nominations": 0, "oscars": 0, "cover-url": "assets/moon-2009.jpg" }, { "id": 6, "title": "Source Code", "year": 2011, "score": 0.92, "director": "Duncan Jones", "url": "https://www.rottentomatoes.com/m/source_code", "synopsis": "When decorated soldier Captain Colter Stevens (Jake Gyllenhaal) wakes up in the body of an unknown man, he discovers he's part of a mission to find the bomber of a Chicago commuter train. In an assignment unlike any he's ever known, he learns he's part of a government experiment called the Source Code, a program that enables him to cross over into another man's identity in the last 8 minutes of his life. With a second, much larger target threatening to kill millions in downtown Chicago, Colter re-lives the incident over and over again, gathering clues each time, until he can solve the mystery of who is behind the bombs and prevent the next attack.", "rating": "pg-13", "runtime-in-minutes": 93, "oscar-nominations": 0, "oscars": 0, "cover-url": "assets/source-code-2011.jpg" }, { "id": 7, "title": "2001: A Space Odyssey", "year": 1968, "score": 0.94, "director": "Stanley Kubrick", "url": "https://www.rottentomatoes.com/m/1000085_2001_a_space_odyssey", "synopsis": "A mind-bending sci-fi symphony, Stanley Kubrick's landmark 1968 epic pushed the limits of narrative and special effects toward a meditation on technology and humanity. Based on Arthur C. Clarke's story The Sentinel, Kubrick and Clarke's screenplay is structured in four movements. At the \"Dawn of Man,\" a group of hominids encounters a mysterious black monolith alien to their surroundings. To the strains of Strauss's 1896 Also sprach Zarathustra, a hominid invents the first weapon, using a bone to kill prey. As the hominid tosses the bone in the air, Kubrick cuts to a 21st century spacecraft hovering over the Earth, skipping ahead millions of years in technological development. U.S. scientist Dr. Heywood Floyd (William Sylvester) travels to the moon to check out the discovery of a strange object on the moon's surface: a black monolith. As the sun's rays strike the stone, however, it emits a piercing, deafening sound that fills the investigators' headphones and stops them in their path. Cutting ahead 18 months, impassive astronauts David Bowman (Keir Dullea) and Frank Poole (Gary Lockwood) head toward Jupiter on the spaceship Discovery, their only company three hibernating astronauts and the vocal, man-made HAL 9000 computer running the entire ship. When the all-too-human HAL malfunctions, however, he tries to murder the astronauts to cover his error, forcing Bowman to defend himself the only way he can. Free of HAL, and finally informed of the voyage's purpose by a recording from Floyd, Bowman journeys to \"Jupiter and Beyond the Infinite,\" through the psychedelic slit-scan star-gate to an 18th century room, and the completion of the monolith's evolutionary mission. With assistance from special-effects expert Douglas Trumbull, Kubrick spent over two years meticulously creating the most \"realistic\" depictions of outer space ever seen, greatly advancing cinematic technology for a story expressing grave doubts about technology itself. Despite some initial critical reservations that it was too long and too dull, 2001 became one of the most popular films of 1968, underlining the generation gap between young moviegoers who wanted to see something new and challenging and oldsters who \"didn't get it.\" Provocatively billed as \"the ultimate trip,\" 2001 quickly caught on with a counterculture youth audience open to a contemplative (i.e. chemically enhanced) viewing experience of a film suggesting that the way to enlightenment was to free one's mind of the U.S. military-industrial-technological complex.", "rating": "g", "runtime-in-minutes": 139, "oscar-nominations": 4, "oscars": 1, "cover-url": "assets/2001-a-space-odyssey-1968.jpg" }, { "id": 8, "title": "Blade Runner", "year": 1982, "score": 0.89, "director": "Ridley Scott", "url": "https://www.rottentomatoes.com/m/blade_runner", "synopsis": "A blend of science fiction and noir detective fiction, Blade Runner (1982) was a box office and critical bust upon its initial exhibition, but its unique postmodern production design became hugely influential within the sci-fi genre, and the film gained a significant cult following that increased its stature. Harrison Ford stars as Rick Deckard, a retired cop in Los Angeles circa 2019. L.A. has become a pan-cultural dystopia of corporate advertising, pollution and flying automobiles, as well as replicants, human-like androids with short life spans built by the Tyrell Corporation for use in dangerous off-world colonization. Deckard's former job in the police department was as a talented blade runner, a euphemism for detectives that hunt down and assassinate rogue replicants. Called before his one-time superior (M. Emmett Walsh), Deckard is forced back into active duty. A quartet of replicants led by Roy Batty (Rutger Hauer) has escaped and headed to Earth, killing several humans in the process. After meeting with the eccentric Eldon Tyrell (Joe Turkel), creator of the replicants, Deckard finds and eliminates Zhora (Joanna Cassidy), one of his targets. Attacked by another replicant, Leon (Brion James), Deckard is about to be killed when he's saved by Rachael (Sean Young), Tyrell's assistant and a replicant who's unaware of her true nature. In the meantime, Batty and his replicant pleasure model lover, Pris (Darryl Hannah) use a dying inventor, J.F. Sebastian (William Sanderson) to get close to Tyrell and murder him. Deckard tracks the pair to Sebastian's, where a bloody and violent final confrontation between Deckard and Batty takes place on a skyscraper rooftop high above the city. In 1992, Ridley Scott released a popular director's cut that removed Deckard's narration, added a dream sequence, and excised a happy ending imposed by the results of test screenings; these legendary behind-the-scenes battles were chronicled in a 1996 tome, Future Noir: The Making of Blade Runner by Paul M. Sammon.", "rating": "r", "runtime-in-minutes": 114, "oscar-nominations": 2, "oscars": 0, "cover-url": "assets/blade-runner-1982.jpg" }, { "id": 9, "title": "Ghost in the Shell", "year": 1996, "score": 0.96, "director": "Mamoru Oshii", "url": "https://www.rottentomatoes.com/m/ghost_in_the_shell", "synopsis": "In the year 2029, the world has become interconnected by a vast electronic network that permeates every aspect of life. That same network also becomes a battlefield for Tokyo's Section Nine security force, which has been charged with apprehending the master hacker known only as the Puppet Master. Spearheading the investigation is Major Motoko Kusanagi, who -- like many in her department -- is a cyborg officer, far more powerful than her human appearance would suggest. And yet as the Puppet Master, who is even capable of hacking human minds, leaves a trail of victims robbed of their memories, Kusanagi ponders the very nature of her existence: is she purely an artificial construct, or is there more? What, exactly, is the \"ghost\" -- her essence -- in her cybernetic \"shell\"? When Section Six gets involved in the case, she is forced to confront the fact that there is more here than meets the eye, and that the Puppet Master may hold some of the answers she seeks. But little does she know that he has been seeking her as well.", "rating": "r", "runtime-in-minutes": 82, "oscar-nominations": 0, "oscars": 0, "cover-url": "assets/ghost-in-the-shell-1996.jpg" }, { "id": 10, "title": "Solaris", "year": 2002, "score": 0.66, "director": "Steven Soderbergh", "url": "https://www.rottentomatoes.com/m/solaris", "synopsis": "A therapist travels to a distant space station to treat a group of astronauts traumatized by mysterious entities -- and ends up having to deal with an entity of his own -- in this second film version of Stanislaw Lem's philosophical sci-fi novel. Solaris stars George Clooney as Chris Kelvin, a psychologist still mourning the loss of his wife Rheya (Natascha McElhone) when he's implored by a colleague named Gibarian (Ulrich Tukur) to investigate the increasingly weird goings-on at the Prometheus space station. By the time Kelvin gets there, Gibarian has committed suicide, leaving only the cryptic, babbling Snow (Jeremy Davies) and the paranoid, guarded Gordon (Viola Davis), both of whom are holed up in their respective rooms. As Kelvin interrogates the skeleton crew, he learns that they've had unwanted \"visitors,\" apparitions of long-dead friends, family, and loved ones who are apparently being generated by the interstellar energy source Solaris. The doctor is dubious of their claims until one night he, too, is greeted by his wife Rheya (Natascha McElhone), whose death still torments him. At first skeptical of the new Rheya, Kelvin gradually becomes obsessed with her -- and with the guilt that he feels over their troubled marriage -- to the point where the others begin to fear for his sanity. Produced by James Cameron, Solaris represented director Steven Soderbergh's first screenplay credit since the independently financed Schizopolis in 1996.", "rating": "pg-13", "runtime-in-minutes": 120, "oscar-nominations": 0, "oscars": 0, "cover-url": "assets/solaris-2002.jpg" }, { "id": 11, "title": "Gattaca", "year": 1997, "score": 0.82, "director": "Andrew Niccol", "url": "https://www.rottentomatoes.com/m/gattaca", "synopsis": "In a futuristic society where commerce has overridden more humanistic concerns, the rich and successful, eager to obtain physical and mental perfection, have taken to genetically engineering their off-spring. Such lab-created babies are known as Valids, while those conceived in the normal, loving fashion are In-Valids and are considered second-class citizens at best -- especially if they have birth defects. Vincent (Ethan Hawke) is an In-Valid while his brother Anton (Loren Dean) is a Valid. The former brother is short, sickly, and bespectacled, while the latter brother is handsome, healthy and born to succeed. But though Anton seems close to perfection, he lacks the emotional flaws, passion, determination, desire and faith that motivate Vincent, whose strongest desire is to become a space navigator for the Gattaca Aerospace Corporation and travel on an upcoming mission to the moons of Saturn. Unfortunately, his birth status and a heart defect, relegate him to menial jobs. Unwilling to abandon hope, Vincent determinedly visits DNA broker German (Tony Shalhoub) who is able to create false identities for similar In-Valids. It is not an easy transformation but eventually Vincent -- who thanks to the genetic contributions of paralyzed Valid Jerome Morrow (Jude Law), becomes Jerome while the wheel-chair bound donor becomes Eugene -- finally enters Gattaca for training. There he encounters a beautiful Valid pilot, Irene (Uma Thurman) whose defective heart prevents her from flying. Irene's plight is a fate she passively accepts whereas Vincent is willing to oppose and fight for what he wants. Meanwhile, an increasingly complex relationship evolves between Vincent/Jerome and Jerome/Eugene. Set in an oppressive, bureaucratic and chillingly plausible early-21st-century world, Andrew Niccol's sci-fi thriller differs from others in its focus on a morally ambiguous world and on characters rather than gizmos, technobabble and special effects.", "rating": "pg-13", "runtime-in-minutes": 106, "oscar-nominations": 1, "oscars": 0, "cover-url": "assets/gattaca-1997.jpg" }, { "id": 12, "title": "Patema Inverted", "year": 2014, "score": 0.79, "director": "Yasuhiro Yoshiura", "url": "https://www.rottentomatoes.com/m/patema_inverted", "synopsis": "Time of Eve director Yasuhiro Yoshiura is a perspective-twisting sci-fi adventure about two kids separated by opposite gravities. Patema lives in an underground world of tunnels, the long-abandoned ruins of a giant industrial complex. Though she is a princess, she is held back by the rules imposed by the elders of her clan. One day when she is exploring in a forbidden zone, she is startled by a strange bat-like creature and tumbles headlong into a void - and out into the wide open world above the surface, a place with reversed physics, where if she let go she would \"fall up\" into the sky and be lost forever. Age is a student on this surface world, a totalitarian society whose compliant population has been brainwashed against the \"sinners who fell into the sky.\" When he spies Patema hanging upside-down from a tree, he pulls her down to safety, struggling with all his might to keep her earthbound as she grips on to him for dear life. Together their weights cancel each other out, and once they master the art of navigating competing gravitational forces, they set out to evade the leaders of Age's world and discover the secret that keeps their worlds apart.", "rating": "nr", "runtime-in-minutes": 99, "oscar-nominations": 0, "oscars": 0, "cover-url": "assets/patema-inverted-2014.jpg" }, { "id": 13, "title": "The Girl Who Leapt Through Time", "year": 2007, "score": 0.87, "director": "Mamoru Hosoda", "url": "https://www.rottentomatoes.com/m/the_girl_who_leapt_through_time", "synopsis": "When a typical young high school girl discovers that she has the unique ability to traverse space and time, her efforts to use the power as a means of preserving the relationships she shares with her closest friends reveals the perpetually shifting nature of personal relationships in Digimon: The Movie director Mamoru Hosoda's warmhearted fantasy.", "rating": "nr", "runtime-in-minutes": 98, "oscar-nominations": 0, "oscars": 0, "cover-url": "assets/the-girl-who-leapt-through-time-2007.jpg" }, { "id": 14, "title": "Inception", "year": 2010, "score": 0.86, "director": "Christopher Nolan", "url": "https://www.rottentomatoes.com/m/inception", "synopsis": "Visionary filmmaker Christopher Nolan (Memento, The Dark Knight) writes and directs this psychological sci-fi action film about a thief who possesses the power to enter into the dreams of others. Dom Cobb (Leonardo DiCaprio) doesn't steal things, he steals ideas. By projecting himself deep into the subconscious of his targets, he can glean information that even the best computer hackers can't get to. In the world of corporate espionage, Cobb is the ultimate weapon. But even weapons have their weakness, and when Cobb loses everything, he's forced to embark on one final mission in a desperate quest for redemption. This time, Cobb won't be harvesting an idea, but sowing one. Should he and his team of specialists succeed, they will have discovered a new frontier in the art of psychic espionage. They've planned everything to perfection, and they have all the tools to get the job done. Their mission is complicated, however, by the sudden appearance of a malevolent foe that seems to know exactly what they're up to, and precisely how to stop them.", "rating": "pg-13", "runtime-in-minutes": 148, "oscar-nominations": 8, "oscars": 4, "cover-url": "assets/inception-2010.jpg" }, { "id": 15, "title": "Edge of Tomorrow", "year": 2014, "score": 0.91, "director": "Doug Liman", "url": "https://www.rottentomatoes.com/m/live_die_repeat_edge_of_tomorrow", "synopsis": "The epic action of \"Edge of Tomorrow\" unfolds in a near future in which an alien race has hit the Earth in an unrelenting assault, unbeatable by any military unit in the world. Major William Cage (Tom Cruise) is an officer who has never seen a day of combat when he is unceremoniously dropped into what amounts to a suicide mission. Killed within minutes, Cage now finds himself inexplicably thrown into a time loop-forcing him to live out the same brutal combat over and over, fighting and dying again...and again. But with each battle, Cage becomes able to engage the adversaries with increasing skill, alongside Special Forces warrior Rita Vrataski (Emily Blunt). And, as Cage and Rita take the fight to the aliens, each repeated encounter gets them one step closer to defeating the enemy.", "rating": "pg-13", "runtime-in-minutes": 113, "oscar-nominations": 0, "oscars": 0, "cover-url": "assets/edge-of-tomorrow-2014.jpg" }, { "id": 16, "title": "Pi", "year": 1998, "score": 0.87, "director": "Darren Aronofsky", "url": "https://www.rottentomatoes.com/m/pi", "synopsis": "God and man and math: The tawdry meets the Talmudic in this complex thriller about a tortured computer genius trying to beat the stock market.", "rating": "r", "runtime-in-minutes": 85, "oscar-nominations": 0, "oscars": 0, "cover-url": "assets/pi-1998.jpg" }, { "id": 17, "title": "Primer", "year": 2004, "score": 0.72, "director": "Shane Carruth", "url": "https://www.rottentomatoes.com/m/primer", "synopsis": "The debut feature from filmmaker Shane Carruth -- who wrote, directed, photographed, edited, scored, and stars -- Primer is a psychological sci-fi thriller about a group of four tech entrepreneurs. Toiling away in a garage, the quartet have successfully created error-checking systems for their clients. But their recent work seems to have created an unexpected and seemingly impossible side-effect. Suddenly, two members of the group realize they are in possession of a device that can double, or perhaps even quadruple, the space-time continuum of anything that enters it. What at first seems like a windfall of astronomical proportions eventually proves to be much more than they bargained for, as the duo attempt to manipulate time to their financial -- and emotional -- benefit. Also starring Casey Gooden, Anand Upadhyaya, and Carrie Crawford, Primer premiered at the 2004 Sundance Film Festival, where it won the coveted Grand Jury Prize for dramatic film.", "rating": "pg-13", "runtime-in-minutes": 80, "oscar-nominations": 0, "oscars": 0, "cover-url": "assets/primer-2004.jpg" }, { "id": 18, "title": "Melancholia", "year": 2011, "score": 0.79, "director": "Lars von Trier", "url": "https://www.rottentomatoes.com/m/melancholia_2011", "synopsis": "Justine (Kirsten Dunst) and Michael (Alexander Skarsgård) are celebrating their marriage at a sumptuous party in the home of her sister (Charlotte Gainsbourg) and brother-in-law (Kiefer Sutherland). Meanwhile, the planet, Melancholia, is heading towards Earth... Melancholia is a psychological disaster movie from director Lars von Trier.", "rating": "r", "runtime-in-minutes": 135, "oscar-nominations": 0, "oscars": 0, "cover-url": "assets/melancholia-2011.jpg" }, { "id": 19, "title": "Close Encounters of the Third Kind", "year": 1977, "score": 0.96, "director": "Steven Spielberg", "url": "https://www.rottentomatoes.com/m/close_encounters_of_the_third_kind", "synopsis": "Steven Spielberg followed Jaws (1975), his first major box-office success, with this epic science fiction adventure about a disparate group of people who attempt to contact alien intelligence. Roy Neary (Richard Dreyfuss) is an electrical lineman who, while sent out on emergency repairs, witnesses an unidentified flying object, and even has a \"sunburn\" from its bright lights to prove it. Neary's wife and children are at first skeptical, then concerned, and eventually fearful, as Roy refuses to accept a \"logical\" explanation for what he saw and is prepared to give up his job, his home, and his family to pursue the \"truth\" about UFOs. Neary's obsession eventually puts him in contact with others who've had close encounters with alien spacecraft, including Jillian (Melinda Dillon), a single mother whose son disappeared during her UFO experience, and Claude Lacombe (celebrated French filmmaker François Truffaut), a French researcher who believes that we can use a musical language to communicate with alien visitors. Lacombe's theory is put to the test when a band of government researchers and underground UFO enthusiasts (including Neary) join for an exchange with alien visitors near Devil's Tower, Wyoming. In 1980, a \"Special Edition\" was released. While its primary selling point was the addition of scenes inside the alien spaceship, Spielberg claimed that he also cleaned up some choppy editing in the second act.", "rating": "pg", "runtime-in-minutes": 137, "oscar-nominations": 9, "oscars": 2, "cover-url": "assets/close-encounters-of-the-third-kind-1977.jpg" }, { "id": 20, "title": "District 9", "year": 2009, "score": 0.9, "director": "Neill Blomkamp", "url": "https://www.rottentomatoes.com/m/district_9", "synopsis": "Director Neill Blomkamp teams with producer Peter Jackson for this tale of extraterrestrial refugees stuck in contemporary South Africa. It's been 28 years since the aliens made first contact, but there was never any attack from the skies, nor any profound technological revelation capable of advancing our society. Instead, the aliens were treated as refugees. They were the last of their kind, and in order to accommodate them, the government of South Africa set up a makeshift home in District 9 as politicians and world leaders debated how to handle the situation. As the humans begin to grow wary of the unwelcome intruders, a private company called Multi-National United (MNU) is assigned the task of controlling the aliens. But MNU is less interested in the aliens' welfare than attempting to understand how their weaponry works. Should they manage to make that breakthrough, they will receive tremendous profits to fund their research. Unfortunately, the highly advanced weaponry requires alien DNA in order to be activated. When MNU field operative Wikus van der Merwe (Sharlto Copley) is exposed to biotechnology that causes his DNA to mutate, the tensions between the aliens and the humans intensifies. Wikus is the key to unlocking the alien's technology, and he quickly becomes the most wanted man on the planet. Ostracized and isolated, Wikus retreats to District 9 in a desperate bid to shake his dogged pursuers.", "rating": "r", "runtime-in-minutes": 112, "oscar-nominations": 4, "oscars": 0, "cover-url": "assets/district-9-2009.jpg" }, { "id": 21, "title": "The Martian", "year": 2015, "score": 0.91, "director": "Ridley Scott", "url": "https://www.rottentomatoes.com/m/the_martian", "synopsis": "During a manned mission to Mars, Astronaut Mark Watney (Matt Damon) is presumed dead after a fierce storm and left behind by his crew. But Watney has survived and finds himself stranded and alone on the hostile planet. With only meager supplies, he must draw upon his ingenuity, wit and spirit to subsist and find a way to signal to Earth that he is alive. Millions of miles away, NASA and a team of international scientists work tirelessly to bring \"the Martian\" home, while his crewmates concurrently plot a daring, if not impossible rescue mission. As these stories of incredible bravery unfold, the world comes together to root for Watney's safe return. Based on a best-selling novel, and helmed by master director Ridley Scott, THE MARTIAN features a star studded cast that includes Jessica Chastain, Kristen Wiig, Kate Mara, Michael Peña, Jeff Daniels, Chiwetel Ejiofor, and Donald Glover.", "rating": "pg-13", "runtime-in-minutes": 164, "oscar-nominations": 7, "oscars": 0, "cover-url": "assets/the-martian-2015.jpg" }, { "id": 22, "title": "Looper", "year": 2012, "score": 0.93, "director": "Rian Johnson", "url": "https://www.rottentomatoes.com/m/looper", "synopsis": "In the futuristic action thriller Looper, time travel will be invented - but it will be illegal and only available on the black market. When the mob wants to get rid of someone, they will send their target 30 years into the past, where a \"looper\" - a hired gun, like Joe (Joseph Gordon-Levitt) - is waiting to mop up. Joe is getting rich and life is good... until the day the mob decides to \"close the loop,\" sending back Joe's future self (Bruce Willis) for assassination.", "rating": "r", "runtime-in-minutes": 119, "oscar-nominations": 0, "oscars": 0, "cover-url": "assets/looper-2012.jpg" }, { "id": 23, "title": "The Abyss", "year": 1989, "score": 0.89, "director": "James Cameron", "url": "https://www.rottentomatoes.com/m/abyss", "synopsis": "The crew of an experimental, high-tech submersible is called into action to investigate a mysterious nuclear submarine crash. A series of strange encounters leads the crew to suspect the accident was caused by an extraterrestrial craft, and that they may be participating in an encounter with an alien species. However, in order to make contact, they must not only brave the abyss, an exceedingly deep underwater canyon, but also deal with the violent actions of one of their own crew members, an increasingly paranoid Navy SEAL officer. Approved by director James Cameron, The Abyss: Special Edition is an extended director's cut of the 1989 underwater science fiction epic, reinstating nearly a half hour of footage removed from the original release under studio pressure. Much of the restored footage places the film's events in a grander political context, as the crew's mission becomes a factor in the dangerous escalation of nuclear tension between the U.S. and the Soviet Union. The largest change involves the film's ending, which provides further information on the aliens' mission on Earth, bringing the film to closer to Cameron's intention: a modern remake of Robert Wise's The Day the Earth Stood Still.", "rating": "pg-13", "runtime-in-minutes": 140, "oscar-nominations": 4, "oscars": 1, "cover-url": "assets/the-abyss-1989.jpg" }, { "id": 24, "title": "Ex Machina", "year": 2015, "score": 0.92, "director": "Alex Garland", "url": "https://www.rottentomatoes.com/m/ex_machina", "synopsis": "Alex Garland, writer of 28 Days Later and Sunshine, makes his directorial debut with the stylish and cerebral thriller, EX MACHINA. Caleb Smith (Domhnall Gleeson), a programmer at an internet-search giant, wins a competition to spend a week at the private mountain estate of the company's brilliant and reclusive CEO, Nathan Bateman (Oscar Isaac). Upon his arrival, Caleb learns that Nathan has chosen him to be the human component in a Turing Test-charging him with evaluating the capabilities, and ultimately the consciousness, of Nathan's latest experiment in artificial intelligence. That experiment is Ava (Alicia Vikander), a breathtaking A.I. whose emotional intelligence proves more sophisticated--and more deceptive--than the two men could have imagined.", "rating": "r", "runtime-in-minutes": 108, "oscar-nominations": 2, "oscars": 1, "cover-url": "assets/ex-machina-2015.jpg" }];
var Data$1 = {
	reviews: reviews,
	movies: movies
};

var movieData = Data$1.movies;
var reviewData = Data$1.reviews;

// cache API data
if (!window.localStorage.getItem('movie-data') || !window.localStorage.getItem('review-data')) {
  populateStorage();
}

function populateStorage() {
  window.localStorage.setItem('movie-data', JSON.stringify(movieData));
  window.localStorage.setItem('review-data', JSON.stringify(reviewData));
}

var dataObj = {};
dataObj.movies = JSON.parse(window.localStorage.getItem('movie-data'));
dataObj.reviews = JSON.parse(window.localStorage.getItem('review-data'));

var App = (function () {
  return React__default.createElement(
    'div',
    { className: 'page' },
    React__default.createElement(
      'div',
      { className: 'app-description' },
      React__default.createElement(
        'h1',
        { className: 'app-description__title' },
        'Movies Evan Likes!'
      ),
      React__default.createElement(
        'p',
        { className: 'app-description__content' },
        'Below is a (not) comprehensive list of movies that Evan really likes.'
      )
    ),
    React__default.createElement(Movies, { data: dataObj })
  );
});

reactDom.render(React__default.createElement(App, null), document.getElementById('app'));

})));
