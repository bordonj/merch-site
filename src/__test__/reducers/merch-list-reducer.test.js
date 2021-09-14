import merchListReducer from '../../reducers/merch-list-reducer';

describe('merchListReducer', () => {

  let action;
  const merchData = {
    name: 'Goose Costume',
    description: 'Fly around town, like a bird.',
    quantity: 100,
    id: 1
  };

  const currentState = {
    1: {name: 'Jenn',
    description: 'confused potato',
    quantity: 1,
    id: 1 },
    2: {name: 'Pigeon',
    description: 'very professional',
    quantity: 1,
    id: 2 }
  }

  test('Should return default state if no action type is recognized', () => {
    expect(merchListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new merch data to masterMerchList', () => {
    const { name, description, quantity, id } = merchData;
    action = {
      type: 'ADD_MERCH',
      name: name,
      description: description,
      quantity: quantity,
      id: id
    };

    expect(merchListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        description: description,
        quantity: quantity,
        id: id
      }
    });
  });

  test('Should successfully delete a merch', () => {
    action = {
      type: 'DELETE_MERCH',
      id: 1
    };
    expect(merchListReducer(currentState, action)).toEqual({
      2: {name: 'Pigeon',
      description: 'very professional',
      quantity: 1,
      id: 2}
    });
  });

});