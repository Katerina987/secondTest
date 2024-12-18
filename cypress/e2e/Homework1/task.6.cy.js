import appActions from './classTask6';

describe('Purchase items', () => {
    it('should successfully purchase an item', () => {
        appActions.login('standard_user', 'secret_sauce');
        appActions.purchaseItem('Sauce Labs Bike Light'); // Change to your desired item
    });
});