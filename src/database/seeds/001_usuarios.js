
exports.seed = function(knex) {
  return knex('usuario').del()
    .then(function () {
      return knex('usuario').insert([
        {}
      ]);
    });
};
