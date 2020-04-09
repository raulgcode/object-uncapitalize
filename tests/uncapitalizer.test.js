const uncapitalizer = require('../src/uncapitalizer');
describe('Uncapitalizer', () => {

  it('Should uncapitalize all the keys in a plain object', () => {
    let testObject = {
      CapitalKey1: 'test capital key',
      CapitalKey2: 'test capital key'
    };

    testObject = uncapitalizer(testObject);

    expect(Object.keys(testObject)[0]).toEqual('capitalKey1');
    expect(Object.keys(testObject)[1]).toEqual('capitalKey2');

  });

  it('Should uncapitalize all the keys in a complex object', () => {
    let testObject = {
      CapitalKey1: {NestedObject: '', AnotherNestedObject: ''},
      CapitalKey2: {NestedObject: '', AnotherNestedObject: ''},
      CapitalKey3: {
        NestedObject: ''
        , AnotherNestedObject: ''
        , NestedComplexOject:{
          NestedObject: ''
        } 
      }
    };

    let expectedObject = {
      capitalKey1: {nestedObject: '', anotherNestedObject: ''},
      capitalKey2: {nestedObject: '', anotherNestedObject: ''},
      capitalKey3: {
        nestedObject: ''
        , anotherNestedObject: ''
        , nestedComplexOject:{
          nestedObject: ''
        } 
      }
    };

    testObject = uncapitalizer(testObject);

    expect(testObject).toEqual(expectedObject);
  });

  it('Should uncapitalize all the object keys in arrays', () => {
    let testArray = [
      {CapitalKey: 1},
      {CapitalKey: 2},
      {CapitalKey: 3},
      {
        CapitalKey: 3, 
        NestedArray: [ {CapitalKey:""}]
      },
    ];

    const expectedArray = [
      {capitalKey: 1},
      {capitalKey: 2},
      {capitalKey: 3},
      {
        capitalKey: 3, 
        nestedArray: [ {capitalKey:""}]
      },
    ];

    testArray = uncapitalizer(testArray);

    expect(testArray).toEqual(expectedArray);
  });

  it('Should leave same object keys when they are numeric', ()=>{
    let testObject = {
      1: 'numeric key',
      2: 'numeric key'
    };

    let expectedObject = {
      1: 'numeric key',
      2: 'numeric key'
    };

    testObject = uncapitalizer(testObject);

    expect(testObject).toEqual(expectedObject);
  });

});