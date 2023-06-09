const initialState = {
  posts: [
    {
      id: '1',
      categoryId: '1',
      title: 'Article title I',
      shortDescription: 'Lorem ipsum dolor sit amet.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi neque nam omnis ex eaque temporibus! Vero cupiditate quibusdam voluptatem consectetur ut. Nihil error vitae ea. Eius delectus, ipsum quia! Amet!',
      publishedDate: '2023-03-27',
      author: 'John Doe'
    },
    {
      id: '2',
      categoryId: '1',
      title: 'Article title II',
      shortDescription: 'Nihil error vitae ea.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi neque nam omnis ex eaque temporibus! Vero cupiditate quibusdam voluptatem consectetur ut. Nihil error vitae ea. Eius delectus, ipsum quia! Amet!',
      publishedDate: '2023-03-28',
      author: 'John Smith'
    },
    {
      id: '3',
      categoryId: '2',
      title: 'Article title III',
      shortDescription: 'Cras vel commodo.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi neque nam omnis ex eaque temporibus! Vero cupiditate quibusdam voluptatem consectetur ut. Nihil error vitae ea. Eius delectus, ipsum quia! Amet!',
      publishedDate: '2023-03-29',
      author: 'Ann Doe'
    },
    {
      id: '4',
      categoryId: '3',
      title: 'Article title IV',
      shortDescription: 'Nihil error vitae ea.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi neque nam omnis ex eaque temporibus! Vero cupiditate quibusdam voluptatem consectetur ut. Nihil error vitae ea. Eius delectus, ipsum quia! Amet!',
      publishedDate: '2023-03-30',
      author: 'Ann Smith'
    }
  ],
  categories: [
    {
      id: '1',
      name: 'Movies'
    },
    {
      id: '2',
      name: 'News'
    },
    {
      id: '3',
      name: 'Sport'
    }
  ]
};

export default initialState;