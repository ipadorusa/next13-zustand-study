import { rest } from 'msw'

export const handlers = [
  // Handles a GET /user request
  rest.get('/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          createdAt: '2023-03-16T20:15:12.183Z',
          name: 'Jean Walker',
          avatar:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/495.jpg',
          userId: '1',
        },
        {
          createdAt: '2023-03-16T03:15:28.347Z',
          name: 'Jordan Harber',
          avatar:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/709.jpg',
          userId: '2',
        },
        {
          createdAt: '2023-03-16T18:54:55.832Z',
          name: "Spencer O'Reilly",
          avatar:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/573.jpg',
          userId: '3',
        },
        {
          createdAt: '2023-03-16T09:11:02.868Z',
          name: 'Darlene Predovic',
          avatar:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/30.jpg',
          userId: '4',
        },
      ])
    )
  }),
]
