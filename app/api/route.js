import * as cheerio from "cheerio";

export async function GET() {
  try {
    const req = await fetch("https://github.com/MateusRMC?tab=repositories", {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    const html = await req.text();
    const $ = cheerio.load(html);

    const repos = [];

    $("#user-repositories-list li h3 a").each((i, el) => {
      repos.push({
        name: $(el).text().trim(),
      });
    });

    return Response.json(repos);
  } catch (error) {
    return Response.json({
      success: false,
      error: error.message,
    });
  }
}
