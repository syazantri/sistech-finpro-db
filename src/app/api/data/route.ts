import DATA  from "../../constant.json";

export const GET = (req: Request) => {
  if (req.method === 'GET') {
    return new Response(JSON.stringify(DATA), { status: 200 })
  }
}