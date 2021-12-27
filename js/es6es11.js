'use strict'

/**
 * Spread Syntax
 */
{
  const obj1 = { key: 'key1' };
  const obj2 = { key: 'key2' };
  const array = [obj1, obj2];

  // array copy
  const arrayCopy = [...array];
  console.log(array, arrayCopy);

  const arrayCopy2 = [...array, { key: 'key3' }];
  console.log(array, arrayCopy, arrayCopy2);

  // object copy
  const obj3 = { ...obj1 };
  console.log(obj3);

  // array concatenation
  const fruits1 = ['🍑', '🍓'];
  const fruits2 = ['🍌', '🥝'];
  const fruits = [...fruits1, ...fruits2];
  console.log(fruits);

  // object merge
  const dog1 = { dog1: '🐕' };
  const dog2 = { dog2: '🐶' };
  const dog = { ...dog1, ...dog2 };
  console.log(dog);
}

/**
 * Default parameters
 */
{
  function printMessage(message = 'default message') {
    console.log(message);
  }
  printMessage('hello');
  printMessage();
}

/**
 * Ternary Operator
 */
{
  let isCat = true;
  const component = isCat ? '🐱' : '🐶';
  console.log(component);
}

/**
 * Template Literals
 */
{
  const weather = '🌤';
  const temparature = '16℃';

  // 💩
  console.log(
    'Today weather is ' + weather + ' and temparature is ' + temparature + '.'
  );

  // 👍
  console.log(`Today weather is ${weather} and temparature is ${temparature}.`);
}

/**
 * Optional Chaining (ES11)
 */
{
  const person1 = {
    name: 'Ellie',
    job: {
      title: 'S/W Engineer',
      manager: {
        name: 'Bob',
      },
    },
  };
  const person2 = {
    name: 'Bob',
  };

  // 💩💩💩💩💩💩
  {
    function printManager(person) {
      console.log(person.job.manager.name);
    }
    printManager(person1);
    // printManager(person2);
  }

  // 💩💩💩
  {
    function printManager(person) {
      console.log(
        person.job
          ? person.job.manager
              ? person.job.manager.name
                  : undefined
                : undefined
      );
    }
    printManager(person1);
    printManager(person2);
  }

  // 💩
  {
    function printManager(person) {
      console.log(person.job && person.job.manager && person.job.manager.name);
    }
    printManager(person1);
    printManager(person2);
  }

  // 👍
  {
    function printManager(person) {
      console.log(person.job?.manager?.name);
    }
    printManager(person1);
    printManager(person2);
  }
}

/**
 * Nullish Coalescing Operator (ES11)
 */
{
  // Logical OR operator
  // false: false, '', 0, null, undefined
  {
    const name = 'Ellie';
    const userName = name || 'Guest';
    console.log(userName);
  }

  {
    const name = null;
    const userName = name || 'Guest';
    console.log(userName);
  }

  // 💩
  {
    const name = '';
    const userName = name || 'Guest';
    console.log(userName);

    const num = 0;
    const message = num || 'undefined';
    console.log(message);
  }

  // 👍
  {
    const name = '';
    const userName = name ?? 'Guest';
    console.log(userName);

    const num = 0;
    const message = num ?? 'undefined';
    console.log(message);
  }
}

