exports.seed = function (knex) {
  return knex("issues").insert([
    {
      id: 1,
      title: "pothole on 5th St",
      description:
        "Theirs a really bad pothole on 5th street that needs fix because it is a liability to drivers on the road!!",
      user_id: 1,
    },
    {
      id: 2,
      title: "neighbor not mowing his grass",
      description:
        "Hello, my nex door neighbor hasn't mowed his lawn is 5 weeks and it makes my house lose curb appeal",
      upVotes: 5,
      user_id: 1,
    },
    {
      id: 3,
      title: "dogs wont stop barking",
      description:
        "I cant sleep at night, please get my neighbors dogs to stop barking!!!!!!!!",
      user_id: 2,
    },
  ]);
};
