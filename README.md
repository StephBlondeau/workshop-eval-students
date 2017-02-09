# workshop-eval-students

Workshop to evaluate students on basic features with JavaScript.

## Commands

Please install dependencies first.

	npm install

To launch the tests.

	npm test

To show basic result on CLI.

	npm start

## Exercises

### Exercise 1

Please make all tests pass.

After finish this exercise, please commit all your files.

	git add .

	git commit -m "Exercise 1"

### Exercise 2

Add a new type of product : *VideoGame*, type of product which has a sprecific property : *platform*.

Add 3 new products in the store :

- FIFA 17, 39.56, PlayStation 4

- XCOM: Enemy Unknown, 15.00, PC

- Super Smash Bros Melee, 63.90, Game Cube

Don't forget to keep all tests pass.

After finish this exercise, please commit all your files.

	git add .

	git commit -m "Exercise 2"

### Exercise 3

Please refactor *Product*, *Book*, *DVD*, *VideoGame* classes with the ES2015 syntax.

Refactor the method *toString()* with the ES2015 syntax ("Template strings").

Don't forget to keep all tests pass.

After finish this exercise, please commit all your files.

	git add .

	git commit -m "Exercise 3"

### Exercise 4

Add a method *getDuration()* for each product.

Duration express minutes with an integer.

For DVD, it returns the static property *runningTime*.

For *Book* and *VideoGame*, it returns average of 2 properties *minDuration* and *maxDuration*.

	// Books
	new Book('Preacher Book One', 16.59, '978-1401240455', 80, 200),
	new Book('JavaScript: The Good Parts', 22.79, '978-0596517748', 105, 265),
	new Book('Alice In Wonderland', 6.99, '978-1619490222', 100, 190),
	new Book('Harry Potter and the Sorcerer\'s Stone', 6.85, '978-0439708180', 140, 270),
	// DVDs
	new DVD('The God, The Bad, and The Ugly', 12.99, true, 178),
	new DVD('Star Wars: A New Hope', 19.99, true, 124),
	new DVD('Rogue One: A Star Wars Story', 17.39, true, 120),
	new DVD('Alice In Wonderland', 14.99, true, 108),
	new DVD('The Wire Season 1', 29.99, false, 780),
	new DVD('Breaking Bad: Season 05', 16.49, false, 375),
	new DVD('Freaks and Geeks: The Complete series', 54.99, false, 756),
	// VideoGames
	new VideoGame('FIFA 17', 39.56, 'PlayStation 4', 400, 1600),
	new VideoGame('XCOM: Enemy Unknown', 15.00, 'PC', 300, 1800),
	new VideoGame('Super Smash Bros Melee', 63.90, 'Game Cube', 300, 2400)

This "duration" should be mentionned in the *toString()* method, for example : "Alice In Wonderland cost 14.99$, duration: 108 minutes".

Write new tests to verify the duration of each type of product.

Don't forget to keep all tests pass.

After finish this exercise, please commit all your files.

	git add .

	git commit -m "Exercise 4"

### Exercise 5

Now the function *findProducts()* should be able to return one or more products with new criteria *belowDuration* as *belowCost*.

The function *findProducts()* should now be called with one parameter *criterias*, it will be an object like this for example : criterias = {belowCost: 20, belowDuration: 150}.

Write new tests to verify *findProducts()* with cross criterias.

After finish this exercise, please commit all your files.

	git add .

	git commit -m "Exercise 5"

### Exercise 6

Refactor *findProducts()* with one or many specific array methods, Cf. [MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array).

Don't forget to keep all tests pass.

After finish this exercise, please commit all your files.

	git add .

	git commit -m "Exercise 6"

### Exercise 7

Consider the service dollar euro exchange rate in file *rateExchangeService.js*, you should now be able to show the price of a basket in dollars and then in euros when function *open()* is called.

Don't forget to keep all tests pass.

After finish this exercise, please commit all your files.

	git add .

	git commit -m "Exercise 7"
