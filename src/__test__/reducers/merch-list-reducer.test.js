import merchListReducer from '../../reducers/merch-list-reducer';

describe('merchListReducer', () => {

  let action;
  const merchData = {
    name: 'Goose Costume',
    description: 'Fly around town, like a bird.',
    quantity: 100,
    id: 1
  };

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

});