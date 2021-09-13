import merchListReducer from '../../reducers/merch-list-reducer';

describe('merchListReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(merchListReducer({}, { type: null })).toEqual({});
  });

});