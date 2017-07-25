export const login = user => (
  jQuery.ajax ({
    method: 'POST',
    url: '/api/session',
    data: user
  })
);

export const signup = user => (
  jQuery.ajax({
    method: 'POST',
    url: '/api/user',
    data: user
  })
);

export const logout = () => (
  jQuery.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);
