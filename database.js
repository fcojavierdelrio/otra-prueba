const { createClient } = supabase;
const connection = createClient(
  "https://ilzowclnsvabbpwnwkrt.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlsem93Y2xuc3ZhYmJwd253a3J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzMTI2NjQsImV4cCI6MjA1MDg4ODY2NH0.KrPg77Bavax4DgHCpDou4L9XAB41II9_ywNcjy8w6ao"
);

async function insertRow({ PALETAS, MATRICULA }) {
  return await connection
    .from("PALETAS")
    .insert([{ PALETAS, MATRICULA }])
    .select("*");
}
