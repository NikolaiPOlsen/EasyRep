Deno.serve(async (req) => {
    const { action, query, partId, quantity } = await req.json();
    const key = Deno.env.get("ASWO_KEY");

    if (action === "fetchParts") {
        const response = await fetch(
            `https://aswoshop.aswo.com/service/customerapi/articlesearch?articlesearchkeywords=${query}&format=json&apikey=${key}`
        );
        const data = await response.json();
        return new Response(JSON.stringify(Object.values(data)), {
            headers: { "Content-Type": "application/json" },
        });
    }

    if (action === "fetchPartDetails") {
        const response = await fetch(
            `https://aswoshop.aswo.com/service/customerapi/articledata?artnr=${partId}&format=json&apikey=${key}`
        );
        return new Response(JSON.stringify(await response.json()), {
            headers: { "Content-Type": "application/json" },
        });
    }

    if (action === "addToCart") {
        const response = await fetch(
            `https://aswoshop.aswo.com/service/customerapi/shoppingbasketput?artnr=${partId}&quantity=${quantity}&format=json&apikey=${key}`,
            { method: "POST" }
        );
        const result = await response.json();
        if (!result || result.ERRORNUMBER !== 0) {
            return new Response(JSON.stringify({ error: result?.ERRORMESSAGE || "Failed" }), { status: 400 });
        }
        return new Response(JSON.stringify({ ok: true }), { headers: { "Content-Type": "application/json" } });
    }

    return new Response(JSON.stringify({ error: "Unknown action" }), { status: 400 });
});
