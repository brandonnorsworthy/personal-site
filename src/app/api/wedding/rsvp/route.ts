import { fetchGroupById, updateWeddingGroup } from "../../../wedding/db/queries";

export async function POST(request: Request) {
  const body = await request?.json();

  try {
    const { confirmed } = await fetchGroupById(body.rsvpCode);
    if (confirmed !== null) {
      return new Response(JSON.stringify({ message: "Group already confirmed" }), {
        headers: { "Content-Type": "application/json" },
        status: 401,
      });
    }

    await updateWeddingGroup(body.rsvpCode, body.coming, body.numberOfPeople)
    return new Response(JSON.stringify({ message: "Success" }), {
      headers: { "Content-Type": "application/json" },
      status: 201,
    });
  } catch (error) {
    console.error('Error updating group:', error);
    return new Response(JSON.stringify({ message: "Error updating group" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}