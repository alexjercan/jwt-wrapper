import * as jwtWrapper from './index';

describe('Unit Tests', () => {
  describe('Pool Tests', () => {
    it('should work when setup is correct', () => {
      const user = { user_id: 1, username: 'username' };
      const secret = 'secret';

      const token = jwtWrapper.sign(user, secret);
      const verified = jwtWrapper.verify(token, secret);

      expect(verified).toBeDefined();
    });
    it('should not work when secret is incorrect', () => {
      const user = { user_id: 1, username: 'username' };
      const secret = 'secret';
      const otherSecret = 'secret1';

      const token = jwtWrapper.sign(user, secret);
      const verified = jwtWrapper.verify(token, otherSecret);

      expect(verified).toBeUndefined();
    });
    it('should not work when setup is incorrect', () => {
      const secret = 'secret';

      const verified = jwtWrapper.verify(undefined, secret);

      expect(verified).toBeUndefined();
    });
  });
});
