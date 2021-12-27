'use strict'

/**
 * Ternary Operator
 */
{
  // Bad Code 💩
  {
    function getResult(score) {
      let result;
      if (score > 5) {
        result = '👍';
      } else if (score <= 5) {
        result = '👎';
      }
      return result;
    }
  }

  // Good Code 👍
  {
    function getResult(score) {
      return score > 5 ? '👍' : '👎';
    }
  }
}

/**
 * Nullish coalescing operator
 */
{
  // Bad Code 💩
  {
    function printMessage(text) {
      let message = text;
      if (text == null || text == undefined) {
        message = 'Nothing to display -.T';
      }
      console.log(message);
    }
  }

  // Good Code 👍
  {
    function printMessage(text) {
      const message = text ?? 'Nothing to display -.T';
      console.log(message);
    }
    // printMessage('Hello');
    // printMessage(undefined);
    // printMessage(null);
  }
}

/**
 * Object Destructuring
 */
{
  const person = {
    name: 'Julia',
    age: 20,
    phone: '01077777777',
  };

  // Bad Code #1
  {
    function displayPerson(person) {
      displayAvatar(person.name);
      displayName(person.name);
      displayProfile(person.name, person.age);
    }
  }

  // Bad Code #2
  {
    function displayPerson(person) {
      const name = person.name;
      const age = person.age;
      displayAvatar(name);
      displayName(name);
      displayProfile(name, age);
    }
  }

  // Good Code
  {
    function displayPerson(person) {
      const { name, age } = person;
      displayAvatar(name);
      displayName(name);
      displayProfile(name, age);
    }
  }
}

/**
 * Spread Syntax - Object
 */
{
  const item = { type: '👕', size: 'M' };
  const detail = { price: 20, made: 'Korea', gender: 'M' };

  // Bad Code #1
  {
    // item['price'] = detail.price;
  }

  // Bad Code #2
  {
    const newObject = new Object();
    newObject['type'] = item.type;
    newObject['size'] = item.size;
    newObject['price'] = item.price;
    newObject['made'] = item.made;
    newObject['gender'] = item.gender;
  }

  // Bad Code #2
  {
    const newObject2 = {
      type: item.type,
      size: item.size,
      price: detail.price,
      made: detail.made,
      gender: detail.gender,
    };
  }

  // Good Code #1
  {
    const shirt0 = Object.assign(item, detail);
  }

  // Good Code #2
  {
    const shirt = { ...item, ...detail };
  }
}

/**
 * Spread Syntax - Array
 */
{
  let fruits = ['🍉', '🍊', '🍌'];

  // fruits.push('🍓');
  let fruits2 = [...fruits, '🍓'];

  // fruits.unshift('🍇');
  let fruits3 = ['🍇', ...fruits];

  const fruits4 = ['🍈', '🍑', '🍍'];
  let combined = fruits.concat(fruits2);
  let combined2 = [...fruits, '🍒', ...fruits2];
}

/**
 * Optional Chaining
 */
{
  const bob = {
    name: 'Julia',
    age: 20,
  };
  const anna = {
    name: 'Julia',
    age: 20,
    job: {
      title: 'Software Engineer',
    },
  };

  // Bad Code
  {
    function displayJobTitle(person) {
      if (person.job && person.job.title) {
        console.log(person.job.title);
      }
    }
  }

  // Good Code #1
  {
    function displayJobTitle(person) {
      if (person.job?.title) {
        console.log(person.job.title);
      }
    }
  }

  // Good Code #2 - Optional Chaining + Nullish Coalescing
  {
    function displayJobTitle(person) {
      const title = person.job?.title ?? 'No Job Yet';
      console.log(title);
    }
  }
}

/**
 * Loops
 */
{
  const items = [1, 2, 3, 4, 5, 6];

  // Bad Code #1
  {
    function getAllEvens(items) {
      const result = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i] % 2 === 0) {
          result.push(items[i]);
        }
      }
      return result;
    }

    function multiplyByFour(items){
      const result = [];
      for (let i = 0; i < items.length; i++) {
        result.push(items[i] * 4);
      }
      return result;
    }

    function sumArray(items) {
      let sum = 0;
      for (let i = 0; i < items.length; i++) {
        sum += items[i];
      }
      return sum;
    }

    const evens = getAllEvens(items);
    const multiple = multiplyByFour(evens);
    const sum = sumArray(multiple);
    console.log(sum);
  }

  // Bad Code #2
  {
    function getAllEvens(items) {
      return items.filter(num => num % 2 === 0);
    }

    function multiplyByFour(items) {
      return items.map((num) => num * 4);
    }

    function sumArray(items) {
      return items.reduce((a, b) => a + b, 0);
    }

    const evens = getAllEvens(items);
    const multiple = multiplyByFour(evens);
    const sum = sumArray(multiple);
    console.log(sum);
  }

  // Good Code #1
  {
    const evens = items.filter((num) => num % 2 === 0);
    const multiple = evens.map((num) => num * 4);
    const sum = multiple.reduce((a, b) => a + b, 0);
    console.log(sum);
  }

  // Good Code #2 - Chaining
  {
    const result = items
      .filter((num) => num % 2 === 0)
      .map((num) => num * 4)
      .reduce((a, b) => a + b, 0);
    console.log(result);
  }
}

/**
 * Promise -> async, await
 */
{
  // Bad Code
  {
    function displayUser() {
      fetchUser() //
        .then((user) => {
          fetchProfile(user) //
            .then((profile) => {
              updateUI(user, profile);
            });
        });
      }
  }

  // Good Code
  {
    async function displayUser() {
      const user = await fetchUser();
      const profile = await fetchProfile(user);
      updateUI(user, profile);
    }
  }
}

/**
 * Quiz
 */
// Remove duplicates!
{
  const array = ['🐸', '🐱', '🐑', '🐸', '🐎', '🐱'];
  console.log(array);
  console.log([...new Set(array)]);
}






