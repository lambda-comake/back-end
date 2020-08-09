exports.seed = function (knex) {
  return knex("issues").insert([
    {
      id: 1,
      title: "Pothole on 5th St, getting worse everyday!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor massa lacus, vel pulvinar arcu euismod quis. Maecenas eleifend mi vitae rhoncus tempor. Nullam at pellentesque metus. Vivamus sapien est, vehicula vel eleifend vitae, dignissim vel nibh. Vestibulum eu fermentum leo, nec venenatis ex. Nulla nisi nunc, pretium vitae nunc nec, gravida pellentesque lorem. Curabitur vel augue placerat, mollis risus porttitor, tristique est. Ut mattis nec nisl sed tempor.",
      upVotes: 15,
      user_id: 1,
    },
    {
      id: 2,
      title: "Neighbor not mowing his grass",
      description:
        "Sed nisi velit, suscipit sed feugiat et, aliquam sed odio. Morbi metus libero, suscipit sed volutpat sit amet, facilisis id dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent a magna lobortis, bibendum mauris id, mollis ex. Nunc maximus porta imperdiet.",
      upVotes: 11,
      user_id: 1,
    },
    {
      id: 3,
      title: "Dogs wont stop barking, my family can't sleep",
      description:
        "Integer dignissim justo ut placerat fermentum. Suspendisse ultricies quam eget iaculis semper. Donec mattis auctor nibh id blandit. Morbi nec nisi at massa condimentum ultricies ultrices a libero. In efficitur porta hendrerit. Phasellus ac nulla eget justo pulvinar sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      upVotes: 25,
      user_id: 2,
    },
    {
      id: 4,
      title: "Bridge going over Swattara Creek is bumpy",
      description:
        "Praesent maximus ullamcorper molestie. Pellentesque eu consequat tortor. Mauris tempus egestas ipsum nec consequat. Aliquam porttitor, elit nec pellentesque dignissim, eros erat eleifend nunc, non volutpat justo purus a est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin quis tortor eu felis auctor tempor tincidunt quis dolor.",
      upVotes: 31,
      user_id: 2,
    },
    {
      id: 5,
      title: "Traffic is getting way worse, something needs to change!",
      description:
        "Vivamus bibendum, dolor sed accumsan placerat, nulla purus lacinia erat, ut ullamcorper leo dolor vel urna. Etiam molestie risus quis magna faucibus, quis sagittis felis lacinia. Suspendisse pellentesque, ante vitae viverra congue, lacus dolor aliquam ipsum, porttitor iaculis odio augue sed ex.",
      upVotes: 10,
      user_id: 2,
    },
    {
      id: 6,
      title: "People not wearing there masks at the grocery store",
      description:
        "Suspendisse ac ultrices diam, at lobortis nisi. Nam sit amet tincidunt est. Curabitur fringilla fermentum lorem a ornare. Suspendisse blandit nulla non velit venenatis, bibendum laoreet ipsum luctus. Sed a condimentum dolor.",
      upVotes: 22,
      user_id: 2,
    },
    {
      id: 7,
      title: "Amazon packages missing from my doorstep",
      description:
        "Morbi accumsan lorem condimentum massa ultrices, vel malesuada arcu tincidunt. Donec vitae laoreet leo. Nam laoreet vulputate mi vel fermentum. Nunc lacinia arcu ullamcorper iaculis vulputate. Vivamus auctor venenatis sapien, nec egestas nibh convallis et.",
      upVotes: 8,
      user_id: 3,
    },
    {
      id: 8,
      title: "Neighbor is playing his drums too loud",
      description:
        "Aenean placerat ornare purus sollicitudin viverra. Integer ornare tortor mauris, vitae venenatis mauris interdum id. Sed non egestas ante. Donec imperdiet ipsum nec justo euismod molestie.",
      upVotes: 2,
      user_id: 3,
    },
    {
      id: 9,
      title: "Suspicious activity happening on the corner of 12th and A st",
      description:
        "Praesent fermentum convallis malesuada. Proin at libero ornare, lacinia orci sit amet, rhoncus lacus. Suspendisse auctor lorem faucibus risus mattis elementum. Aliquam at enim elit. Suspendisse nec justo hendrerit, varius justo sit amet, aliquet velit. Quisque odio est, eleifend vel velit eu, congue tincidunt ligula. Phasellus nunc nibh, suscipit at venenatis at, ullamcorper sed arcu.",
      upVotes: 13,
      user_id: 3,
    },
    {
      id: 10,
      title: "Large party and music is too loud!!",
      description:
        "Phasellus nunc nibh, suscipit at venenatis at, ullamcorper sed arcu. Donec mollis, justo in volutpat suscipit, elit est egestas felis, ut dignissim ex ipsum non metus.",
      upVotes: 1,
      user_id: 4,
    },
    {
      id: 11,
      title: "I found a cat, does it belong to anyone?",
      description:
        "Nunc eu justo lobortis, consectetur urna in, pretium turpis. Nunc mattis nibh est, quis gravida justo scelerisque eu. Vivamus pellentesque tortor id mauris vestibulum, vitae mattis est dignissim. Ut non iaculis velit, ut maximus elit. Phasellus eu nisl id mi consequat gravida ac sed risus.",
      upVotes: 19,
      user_id: 4,
    },
    {
      id: 12,
      title: "Bull Mastiff ran away, she has a dog tag",
      description:
        "Nam vel pulvinar tortor, et ornare enim. Vestibulum nec viverra ipsum. Integer rhoncus finibus dolor vel porttitor. Sed auctor quis mi eget tristique. Proin ornare, metus blandit finibus mattis, massa quam molestie enim, eget fringilla neque augue ac lectus.",
      upVotes: 9,
      user_id: 5,
    },
    {
      id: 13,
      title: "Not enough mountain bike trails",
      description:
        "Sed venenatis elementum lacus in ornare. Sed vitae metus ac turpis aliquam consectetur. Sed rhoncus luctus risus rhoncus suscipit. Pellentesque nec arcu ante. Nunc a lacus ut erat luctus dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      upVotes: 0,
      user_id: 5,
    },
  ]);
};
