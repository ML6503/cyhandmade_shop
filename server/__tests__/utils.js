const loginUser = async (userData) => {
  return () => {
    request
      .post('/api/user/login')
      .send({
        email: 'test@test.com',
        password: 'test',
      })
      .expect(200)
      .then((res) => {
        res.cookie('refreshToken', userData.refreshToken);
        return (userData = res.body);
      });
  };
};

module.exports = loginUser;
