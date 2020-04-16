# GSIV20_Swapnil_Roy

<h3>
  Movies app
</h3>


## How to run the the project

step1
```bash
$ git clone https://github.com/swapnilroy1995/GSIV20_Swapnil_Roy.git
```

step 2

```bash
$ cd GSIV20_Swapnil_Roy
```

step 3

```bash
$ npm install
```

step 4

```bash
$ react-native run-android
```


## About the project

This app has two screens 
	1	 Movies list screen where you can scroll through all the upcoming movies infinitely and search for any movie on your mind.
			a. The list automatically updates the list and lets you scroll infinitely.
			b. The search feature aotumatically search for the text entered on every keystroke and on deleting all the text bring back the list of upcoming movies rendered initially.
			c. There is a Cross icon in the Searhbar which allows the user to delete the text and bring back the upcoming movies list instantly.
			d. Clicking on the Movie cards will take you to the Movie Details screen.
			
	2. Movie Details Shows all the info available about the movie made available through apis from themoviedb.org.
	

## Challenges in the project
	
	Maintaining a list of infinite scroll which involves list from two different functionalities(upcoming movie list , search movie list) in one screen and render, update and delete which is required when it is required.
	Using Redux state management system helped a lot which allowed to maintain the state and the list when required.
	Making things seem seemless is a part of project quality and achieving it through Redux does take some proficiency and skill to implement.
	

## More to be done if 4 more hours are available

	1. Implementing Dark mode making all the screens and components adjust itself on changing the theme by user.
	2. Making a feature to allow user to determine which list of movies(Upcoming, Popular etc ) should be rendered on start.
	
	
	
	
