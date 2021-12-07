// IMPORT MODULES under test here:
import { renderGame, renderTeam } from '../render-utils.js';
// import { example } from '../example.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('renderGame should return a DOM node of a div that displays name1, name2, score1, score2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="game"><div><p>Blue Team</p><p>5</p></div><div><p>Red Team</p><p>43</p></div></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const testObj = {
        name1: 'Blue Team',
        name2: 'Red Team',
        score1: 5,
        score2: 43
    };
    const actual = renderGame(testObj).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('renderTeam should return a DOM node that is a div with two nested p elements', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div><p>Blue Team</p><p>5</p></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTeam('Blue Team', 5).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

